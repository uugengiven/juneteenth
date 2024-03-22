import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Hero from '@/components/home/Hero';
import HeroSection from '../components/home/HeroSection';
import InformationSection from '../components/home/InformationSection';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import SponsorsSection from '../components/home/Sponsors';
import Footer from '../components/Footer';
import SawTeethDivider from '@/components/home/SawTeethDivider';
import JuneteenthHistory from '@/components/home/JuneteenthHistory';
import VendorSponsorshipSection from '@/components/home/VendorSponsorshipSection';
import Event from '@/data/models/Event';

const Home: NextPage = async () => {
  const events = JSON.parse(JSON.stringify(await Event.findAll({ where: { featured: true } })));

  return (
    <>
      <Navbar />
      <Hero
        title="Juneteenth Celebration"
        description="Join us for a 3-day event filled with music, vendors, classes, a parade, and more!"
        ctaText="View Schedule"
        ctaLink="/schedule"
      />
      <FeaturedEvents events={events} />
      <SawTeethDivider />
      <SponsorsSection />
      <JuneteenthHistory />
      <VendorSponsorshipSection />
      <Footer />
    </>
  );
};

export default Home;
