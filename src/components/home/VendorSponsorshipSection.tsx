import { FC } from 'react';
import Link from 'next/link';

const VendorSponsorshipSection: FC = () => {
  return (
    <section className="bg-gradient-to-br from-red-700 via-orange-500 to-yellow-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-8">Get Involved</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="text-lg text-white mb-6">
              Support the Juneteenth Celebration and showcase your brand to our community.
            </p>
            <Link href="/sponsors">
              <span className="inline-block bg-white text-red-700 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100">
                Sponsorship Opportunities
              </span>
            </Link>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Become a Vendor</h3>
            <p className="text-lg text-white mb-6">
              Join us at the Juneteenth Celebration and showcase your products or services.
            </p>
            <Link href="/vendor-application">
              <span className="inline-block bg-white text-red-700 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100">
                Apply Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorSponsorshipSection;