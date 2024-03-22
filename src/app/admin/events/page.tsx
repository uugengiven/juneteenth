// src/app/admin/events/page.tsx
import React from 'react';
import AuthWrapper from '@/components/AuthWrapper';
import EventList from '@/components/events/EventList';
import Link from 'next/link';
import Event from '@/data/models/Event';
import { Op } from 'sequelize';

const EventsAdminPage: React.FC = async () => {
  const events = await Event.findAll({
    order: [
      ['date', 'ASC'],
      ['time', 'ASC']
    ]
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Events Admin</h1>
        <Link href="/admin/events/new" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          New Event
        </Link>
      </div>
      <EventList events={events} />
    </div>
  );
};

export default AuthWrapper(EventsAdminPage);