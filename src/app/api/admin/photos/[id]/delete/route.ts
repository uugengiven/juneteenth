import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';
import Image from '@/data/models/Images';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const imageId = params.id;

  try {
    // Find the image by ID in the database
    const image = await Image.findByPk(imageId);

    if (!image) {
      return Response.json({ error: 'Image not found' }, { status: 404 });
    }

    // Delete the image from the S3 bucket
    const s3Client = new S3Client({ region: process.env.AWS_REGION });
    const deleteParams = {
      Bucket: String(process.env.AWS_BUCKET_NAME),
      Key: `photos/${image.collection}/${image.filename}`,
    };
    await s3Client.send(new DeleteObjectCommand(deleteParams));

    // Delete the image from the database
    await image.destroy();

    return Response.json({ message: 'Image deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting image:', error);
    return Response.json({ error: 'Failed to delete image' }, { status: 500 });
  }
}