import Image from '@/data/models/Images';

export async function GET(request: Request) {
  try {
    // Fetch all images from the database
    const images = await Image.findAll();

    // Return the images as a JSON response
    return Response.json({ photos: images }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching images:', error);
    return Response.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}