// src/app/admin/events/edit/[id]/page.tsx
import React from 'react';
import AuthWrapper from '@/components/AuthWrapper';
import Event from '@/data/models/Event';
import { notFound } from 'next/navigation';

interface EditEventPageProps {
  params: {
    id: string;
  };
}

const DeleteEventPage: React.FC<EditEventPageProps> = async ({ params }) => {
  const eventId = parseInt(params.id);
  const event = JSON.parse(JSON.stringify(await Event.findByPk(eventId)));

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Delete Event</h1>
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
        <strong className="font-bold">Warning!</strong>
        <span className="block sm:inline">Are you sure you want to delete the event {event.name}?</span>
      </div>
        <form
            action={`/api/admin/events/${eventId}`}
            method="POST"
            className="flex flex-col space-y-4"
        >
        <input type="hidden" name="_method" value="DELETE" />
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
          <a
            href="/admin/events"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </a>
        </div>
        </form>
    </div>
  );
};

export default AuthWrapper(DeleteEventPage);