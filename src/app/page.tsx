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

const events = [
  {
    id: 1,
    title: 'Jubilee Parade',
    date: 'June 16',
    time: '10:00 AM',
    type: 'Parade',
    likes: 12,
    image: '/images/parade.png',
  },
  {
    id: 2,
    title: 'Vendor Fair',
    date: 'June 14-16',
    time: '12:00 PM',
    type: 'Market',
    likes: 87,
    image: '/images/IMG_20230902_150344718.jpg',
  },
  {
    id: 3,
    title: 'Jazmin',
    date: 'June 15, 2023',
    time: '7:00 PM',
    type: 'Music',
    likes: 122,
    image: '/images/FB_IMG_1695686484619.jpg',
  },
];

const Home: NextPage = () => {
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
