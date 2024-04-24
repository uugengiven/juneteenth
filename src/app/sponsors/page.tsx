//src/app/sponsors/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Infographic from '@/components/sponsors/Infographic';
import SponsorshipPackage from '@/components/sponsors/SponsorshipPackage';
import SponsorshipPackageData from '@/components/sponsors/PackageData';
import Image from 'next/image';

const SponsorshipPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-white rounded-md my-4 shadow-lg">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 px-6 rounded-lg mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Sponsor the Juneteenth Festival
            </h2>
            <p className="text-xl mb-6">
              Join us in celebrating the vibrant spirit of Juneteenth in
              Pittsburgh! With an estimated attendance of over 1 million people
              across our family of events and tv audience along with a
              significant impact on the local economy, the Stop The Violence
              Pittsburgh collection of events are a fantastic opportunity to
              showcase your brand and support the community.
            </p>
            <p className="text-xl mb-8 font-bold">
              Stop The Violence Pittsburgh is teaming up with The Consult Box
              for sponsorship inqueries and activations. Please contact Kim
              Bogesdorfer by calling{' '}
              <a
                className="font-black text-blue-200 hover:text-green-200"
                href="tel:412-855-5443"
              >
                (412) 855-5443
              </a>{' '}
              or emailing{' '}
              <a
                className="font-black text-blue-200 hover:text-green-200"
                href="mailto:bogey@theconsultbox.com"
              >
                bogey@theconsultbox.com
              </a>{' '}
              for the following sponsorships or to create a customized
              sponsorship that matches your brand!
            </p>
            <a
              href="mailto:Bogey@theconsultbox.com"
              className="inline-block bg-white text-blue-500 font-bold py-3 pl-4 pr-8 rounded-lg hover:bg-blue-100"
            >
              <Image
                src="/images/tcb_logo_only.png"
                width="40"
                height="24"
                alt="Email icon"
                className="inline-block mr-2"
              />
              Become a Sponsor
            </a>
          </div>
        </div>
        <div className="p-8 rounded-lg bg-slate-100">
          <h2 className="text-6xl text-center m-4">2023 Juneteenth Impact</h2>
          <Infographic />
        </div>
        <div className="flex flex-col my-12">
          <h2 className="text-6xl text-center font-black">
            Sponsorship Packages
          </h2>
          {SponsorshipPackageData.map((packageData, index) => (
            <SponsorshipPackage
              key={index}
              title={packageData.title}
              investment={packageData.investment}
              benefits={packageData.benefits}
              images={packageData.images}
              variant={packageData.variant}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SponsorshipPage;
