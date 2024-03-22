// src/app/admin/events/edit/[id]/page.tsx
import React from 'react';
import AuthWrapper from '@/components/AuthWrapper';
import Event from '@/data/models/Event';
import EditEventForm from '@/components/events/EditEventForm';
import { notFound } from 'next/navigation';

interface EditEventPageProps {
  params: {
    id: string;
  };
}

const EditEventPage: React.FC<EditEventPageProps> = async ({ params }) => {
  const eventId = parseInt(params.id);
  const event = JSON.parse(JSON.stringify(await Event.findByPk(eventId)));

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Event</h1>
      <EditEventForm event={event} />
    </div>
  );
};

export default AuthWrapper(EditEventPage);