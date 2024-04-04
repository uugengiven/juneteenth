import { NextResponse } from 'next/server';
import Event from '@/data/models/Event';

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const eventId = parseInt(params.id, 10);

  try {
    const event = await Event.findByPk(eventId);

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    event.likes += 1;
    await event.save();

    return NextResponse.json({ likes: event.likes }, { status: 200 });
  } catch (error) {
    console.error('Error updating likes:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}