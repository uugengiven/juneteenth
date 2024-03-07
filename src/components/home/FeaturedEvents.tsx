import Image from 'next/image';
import { FC } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  likes: number;
  image: string;
}

interface FeaturedEventsProps {
  events: Event[];
}

const FeaturedEvents: FC<FeaturedEventsProps> = ({ events }) => {
  return (
    <section className="bg-gray-900 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-br from-red-700 via-orange-500 to-yellow-400 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-white text-red-700 px-2 py-1 rounded-full text-xs uppercase">
                    {event.type}
                  </span>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 fill-current text-red-600 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                    </svg>
                    <span className="text-white text-sm">{event.likes}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-white text-sm">{event.date} | {event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;