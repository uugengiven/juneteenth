import Image from 'next/image';
import { FC } from 'react';
import { EventInterface } from '@/data/events';

interface EventHeroProps {
  event: EventInterface;
}

const EventHero:FC<EventHeroProps> = ({ event }) => {
  return (
    <section className="relative h-[75vh]">
      <div className="absolute inset-0">
        <Image
          src={`/images/${event.image}`}
          alt={event.name}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          objectPosition='top'
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      </div>
      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 text-white text-center h-full flex flex-col justify-end">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {event.name}
        </h1>
        <p className="mt-6 text-xl">
          {event.date} | {event.time}
        </p>
        <p className="mt-6 text-xl">
          {event.location}
        </p>
      </div>
    </section>
  );
};

export default EventHero;