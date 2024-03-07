import { montserrat } from '../../app/fonts';
import Link from 'next/link';

const InformationSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-r from-gray-50 via-gray-100 to-slate-100 text-gray-700">
      <div className="max-w-4xl mx-auto">
        <div className="flex">
          <div className="w-2/3 pr-4">
          <h2 className={`text-4xl font-extrabold text-gray-800 mb-6 ${montserrat.className}`}>Discover Juneteenth</h2>
            <p className="mb-4 text-md text-gray-600">
              Juneteenth, also known as Freedom Day, commemorates the June 19th, 1865, announcement of the abolition of slavery in Texas, and more generally the emancipation of enslaved African Americans throughout the former Confederate States of America. Its name is a blend of &quot;June&quot; and &quot;nineteenth,&quot; and it&apos;s a time to celebrate African American freedom, culture, and achievements.
            </p>
            <p className="mb-4 text-md text-gray-600">
              The Juneteenth celebration of Pittsburgh is renowned for being one of the largest in the country, drawing thousands of participants each year. It&apos;s a vibrant showcase of history, culture, and community spirit.
            </p>
            <p className="mb-6 text-md text-gray-600">
              We invite you to join us in this significant celebration. It&apos;s an opportunity to honor the past while also embracing the community&apos;s future through unity and shared joy.
            </p>
            <a href="/tickets" className="inline-block bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors">
              Get Tickets
            </a>
          </div>
          <div className="w-1/3 px-4">
            <img src="/images/istockphoto-985980752-1024x1024.jpg" alt="Juneteenth Celebration" className="object-cover w-full h-96 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
