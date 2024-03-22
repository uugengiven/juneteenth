// components/EventList.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  type: string;
  likes: number;
  image: string;
  description: string;
  location: string;
  featured: boolean;
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {events.map((event) => (
          <tr key={event.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex-shrink-0 h-20 w-20">
                <Image
                  src={`/images/${event.image}`}
                  alt={event.name}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{event.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{event.date}</td>
            <td className="px-6 py-4 whitespace-nowrap">{event.time}</td>
            <td className="px-6 py-4 whitespace-nowrap">{event.type}</td>
            <td className="px-6 py-4 whitespace-nowrap">{event.location}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {event.featured ? 'Yes' : 'No'}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <Link href={`/admin/events/edit/${event.id}`} className="text-blue-500 hover:text-blue-700">
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventList;