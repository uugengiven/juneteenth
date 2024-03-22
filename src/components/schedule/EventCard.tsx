"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import * as Accordion from '@radix-ui/react-accordion';
import { EventInterface } from '@/data/events';
import { montserrat } from '@/app/fonts';

interface EventCardProps {
  event: EventInterface;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isScheduled, setIsScheduled] = useState(false);

  useEffect(() => {
    const scheduledEvents = JSON.parse(localStorage.getItem('scheduledEvents') || '[]');
    setIsScheduled(scheduledEvents.includes(event.id));
  }, [event.id]);

  const handleToggleSchedule = () => {
    const scheduledEvents = JSON.parse(localStorage.getItem('scheduledEvents') || '[]');
    if (scheduledEvents.includes(event.id)) {
      const updatedEvents = scheduledEvents.filter((id: number) => id !== event.id);
      localStorage.setItem('scheduledEvents', JSON.stringify(updatedEvents));
      setIsScheduled(false);
    } else {
      scheduledEvents.push(event.id);
      localStorage.setItem('scheduledEvents', JSON.stringify(scheduledEvents));
      setIsScheduled(true);
    }
  };



  return (
  <div
      className="bg-white rounded-lg shadow-md relative"
    >
      {isScheduled && (
    <div className="absolute inset-0 -m-1 bg-gradient-to-br from-red-700 via-orange-500 to-yellow-400 rounded-lg z-[-1]" />
  )}
      <div className="relative h-48 rounded-t-lg overflow-hidden">
        <Image
          src={`/images/${event.image}`}
          alt={event.name}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900">
          <div className="flex items-center">
            <span className="flex items-center text-white mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              {event.likes}
            </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {event.type}
          </span>
        </div>
          <button
          onClick={handleToggleSchedule}
          className={`inline-block ${isScheduled ? "bg-red-700" : "bg-green-700"} rounded-full px-3 py-1 text-sm font-semibold text-white`}
        >
          {isScheduled ? 'Remove from Schedule' : 'Add to Schedule'}
        </button>
      </div>
      <div className="p-4">
        
        <h3 className="text-xl font-bold">{event.name}</h3>
        <p className="text-gray-500 mt-2">
          {event.date} | {event.time}
        </p>
        <p className="text-gray-500 mt-1">{event.location}</p>
        

        
        <Accordion.Root type="single" collapsible className="mt-4">
          <Accordion.Item value="description">
            <Accordion.Trigger className={`text-red-500 hover:text-red-600 ${montserrat.className}`}>
              Show More
            </Accordion.Trigger>
            <Accordion.Content>
              <p className="mt-2 text-gray-600">{event.description}</p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};

export default EventCard;