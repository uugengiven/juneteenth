import EventCard from './EventCard';
import { EventInterface } from '@/data/events';

interface EventsListProps {
  events: EventInterface[];
  selectedFilter: string;
}

const EventsList : React.FC<EventsListProps> = ({ events, selectedFilter }) => {
    const filteredEvents = selectedFilter === 'all'
      ? events
      : events.filter((event) => event.type === selectedFilter);
  
    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    );
  };

export default EventsList;