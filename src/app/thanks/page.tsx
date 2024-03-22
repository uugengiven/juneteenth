// src/app/thanks/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const ThanksPage = async () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 text-center">
          <Image
            src="/images/Screenshot_20231022-140752-862.png"
            alt="Thank You"
            width={300}
            height={200}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            We appreciate your interest in being a vendor at our event. Your application has been submitted successfully.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We will review your application and get back to you shortly with further details.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ThanksPage;