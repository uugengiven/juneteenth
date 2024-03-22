// app/api/events/route.ts
import { NextResponse } from 'next/server';
import Event from '@/data/models/Event';

export async function POST(request: Request) {
  try {
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

    const event = await Event.create({
      name,
      date,
      time,
      type,
      image,
      description,
      location,
      featured,
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}