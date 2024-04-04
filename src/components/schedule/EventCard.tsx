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
  const [likes, setLikes] = useState(event.likes);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const scheduledEvents = JSON.parse(localStorage.getItem('scheduledEvents') || '[]');
    setIsScheduled(scheduledEvents.includes(event.id));
    const likedEvents = JSON.parse(localStorage.getItem('likedEvents') || '[]');
    setHasLiked(likedEvents.includes(event.id));
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
      handleToggleFavorite();
    }
  };

  const handleToggleFavorite = async () => {
    if (hasLiked) {
      return;
    }

    try {
      const response = await fetch(`/api/events/${event.id}/like`, {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
        setHasLiked(true);

        const likedEvents = JSON.parse(localStorage.getItem('likedEvents') || '[]');
        likedEvents.push(event.id);
        localStorage.setItem('likedEvents', JSON.stringify(likedEvents));
      } else {
        console.error('Error updating likes:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const heart = () => {
    if(hasLiked) {
        return (
        <svg 
          className="h-6 w-6 mr-1 text-red-500"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" 
          fill="currentColor"
        >
        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
      </svg>
      );
    }
    return (
      <svg 
        className="h-6 w-6 mr-1 text-red-500"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512" 
        fill="currentColor"
      >
        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
      </svg>
    );
  }


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
          objectPosition='top'
        />
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900">
          <div className="flex items-center">
            <button 
              className="flex items-center text-white mr-4 p-1" 
              onClick={handleToggleFavorite}
              disabled={hasLiked}
            >
              {heart()}
              {likes}
            </button>
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