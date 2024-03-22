import EventHero from '@/components/schedule/EventHero';
import ClientComponent from './ClientComponents';
import Event from '@/data/models/Event';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EventsPage = async () => {
    const events = JSON.parse(JSON.stringify(await Event.findAll({
      order: [
        ['date', 'ASC'],
        ['time', 'ASC']
      ]
    })));

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