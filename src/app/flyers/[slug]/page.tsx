import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { flyers } from '@/data/flyers';

export function generateStaticParams() {
  return flyers.map(flyer => ({ slug: flyer.slug }));
}

export default function FlyerPage({ params }: { params: { slug: string } }) {
  const flyer = flyers.find(f => f.slug === params.slug);

  if (!flyer) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center bg-white">
        <h1 className="text-3xl md:text-5xl font-black text-center text-red-700 mb-6">
          {flyer.title}
        </h1>
        {flyer.url && (
          <a
            href={flyer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-800 mb-6"
          >
            Get Tickets Now
          </a>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/flyers/2026/${flyer.file}`}
          alt={flyer.title}
          className="max-w-full h-auto rounded-md shadow-lg"
        />
      </div>
      <Footer />
    </>
  );
}
