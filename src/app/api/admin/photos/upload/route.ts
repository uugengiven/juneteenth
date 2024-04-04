import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { S3Client } from '@aws-sdk/client-s3';
import Image from '@/data/models/Images';

export async function POST(request: Request) {
  const { filename, contentType, collection, originalName, description } = await request.json();

  const fileExtension = originalName.split('.').pop();
  const cleanFilename = await validateFileName(filename, fileExtension, collection);

  try {
    // Save image information to the database
    const image = await Image.create({
      filename: cleanFilename,
      collection,
      description,
      visible: true,
    });

    const client = new S3Client({ region: process.env.AWS_REGION });
    const { url, fields } = await createPresignedPost(client, {
      Bucket: String(process.env.AWS_BUCKET_NAME),
      Key: `photos/${collection}/${cleanFilename}`,
      Conditions: [
        ['content-length-range', 0, 10485760], // up to 10 MB
        ['starts-with', '$Content-Type', contentType],
      ],
      Fields: {
        acl: 'public-read',
        'Content-Type': contentType,
      },
      Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    });

    return Response.json({ url, fields });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
}

const validateFileName = async (filename: string, extension: string, collection: string) => {
  // Strip all illegal characters (e.g. /, \, :, *, ?, ", <, >, |)
  // and replace spaces with underscores
  // and ensure the filename ends with the correct file extension
  // If no filename is provided, generate a random one

  const cleanFilename = filename.replace(/[^a-z0-9]/gi, '_').replace(/ /g, '_');
  let uniqueFilename = cleanFilename;

  if (!cleanFilename) {
    uniqueFilename = `${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`;
  }

  // Check if the filename already exists in the same collection
  const existingImage = await Image.findOne({
    where: {
      filename: `${uniqueFilename}.${extension}`,
      collection,
    },
  });

  if (existingImage) {
    // If the filename already exists, append random letters to the filename
    const randomLetters = Math.random().toString(36).substring(2, 7);
    uniqueFilename = `${uniqueFilename}_${randomLetters}`;
  }

  return `${uniqueFilename}.${extension}`;
};