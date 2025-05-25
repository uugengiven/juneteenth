// app/api/admin/events/[id]/route.ts
import { NextResponse } from 'next/server';
import Event from '@/data/models/Event';

interface Params {
  id: string;
}

export async function PUT(request: Request, { params }: { params: Params }) {
  const eventId = parseInt(params.id);

  try {
    const event = await Event.findByPk(eventId);

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    const formData = await request.json();

    const {
      name,
      date,
      time,
      type,
      image,
      description,
      location,
      featured,
    } = formData;

    await event.update({
      name,
      date,
      time,
      type,
      image,
      description,
      location,
      featured,
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
export async function POST(_request: Request, { params }: { params: Params }) {
  const eventId = parseInt(params.id);

  try {
    const event = await Event.findByPk(eventId);

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    await event.destroy();

    return NextResponse.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}