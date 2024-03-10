import EventHero from '@/components/schedule/EventHero';
import ClientComponent from './ClientComponents';
import events from '@/data/events';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EventsPage = async () => {
  
    return (
      <>
        <Navbar />
        <EventHero event={events[0]} />
        <ClientComponent events={events} />
        <Footer />
      </>
    );
  };

export default EventsPage;