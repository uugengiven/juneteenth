import Image from 'next/image';
import * as Accordion from '@radix-ui/react-accordion';
import { EventInterface } from '@/data/events';

interface EventCardProps {
  event: EventInterface;
}

const EventCard : React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.name}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{event.name}</h3>
        <p className="text-gray-500 mt-2">
          {event.date} | {event.time}
        </p>
        <div className="flex items-center mt-4">
          <span className="text-gray-600 mr-2">{event.likes} likes</span>
          <span className="text-gray-600">{event.type}</span>
        </div>
        <Accordion.Root type="single" collapsible className="mt-4">
          <Accordion.Item value="description">
            <Accordion.Trigger className="text-blue-500 hover:text-blue-600">
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