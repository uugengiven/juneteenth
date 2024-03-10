import EventHero from '@/components/schedule/EventHero';
import ClientComponent from './ClientComponents';
import events from '@/data/events';

const EventsPage = async () => {
  
    return (
      <div>
        <EventHero event={events[0]} />
        <ClientComponent events={events} />
      </div>
    );
  };

export default EventsPage;