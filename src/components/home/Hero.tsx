import Image from 'next/image';
import { FC } from 'react';
import CountdownTimer from './CountdownTimer';
import { montserrat } from '@/app/fonts';

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: FC<HeroProps> = ({ title, description, ctaText, ctaLink }) => {
  const eventDate = "6/15/2024 12:00:00 PM";
  return (
    <section className="relative bg-red-700 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/image025.jpg"
          alt="Juneteenth Celebration"
          fill
          className="object-cover object-right-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-white">{description}</p>
        <div className="mt-10">
          <a
            href={ctaLink}
            className="inline-block bg-white text-red-700 rounded-md py-3 px-8 text-base font-medium hover:bg-gray-100"
          >
            {ctaText}
          </a>
        </div>
        <div className="mt-10">
          <h2 className={`text-5xl mb-3 font-heavy`}>June 14th-16th, 2024</h2>
          <CountdownTimer date={eventDate} />
        </div>
      </div>
    </section>
  );
};

export default Hero;