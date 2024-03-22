import { NextResponse } from 'next/server';
import Event from '@/data/models/Event';

export async function GET() { 
  try {
    const events = await Event.findAll();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}