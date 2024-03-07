"use client"

import React, { useState, useEffect } from 'react';
import { montserrat } from '@/app/fonts'; 
import sponsor_list from '@/data/sponsors';

const SponsorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [sponsors, setSponsors] = useState(sponsor_list.map((sponsor, index) => {
    if (index === 0) {
      return { ...sponsor, className: '-translate-x-full opacity-50' } // leftVisible
    }
    if (index === 1) {
      return { ...sponsor, className: 'translate-x-0 opacity-100 scale-110' } // center
    }
    if (index === 2) {
      return { ...sponsor, className: 'translate-x-full opacity-50' } // rightVisible
    }
    return { ...sponsor, className: '-translate-x-[2000px] opacity-0' } // offRight
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(currentIndex => indexClamp(currentIndex + 1));
    }, 3000); // Change the main sponsor every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const indexClamp = (index:number) => {
    // Ensure the index is within the bounds of the sponsors array
    // if not the return the index that is within the bounds by rotating to the other end as needed
    // if the array length is 10 and the index is -2, the result will be 8
    // if the array length is 10 and the index is 11, the result will be 1
    return (index + sponsors.length) % sponsors.length;
  }

  useEffect(() => {
    const tempSponsors = [...sponsors];

    tempSponsors[currentIndex].className = 'translate-x-0 opacity-100 scale-125'; // center
    tempSponsors[indexClamp(currentIndex + 1)].className = 'translate-x-[150%] opacity-70'; // rightVisible
    tempSponsors[indexClamp(currentIndex - 1)].className = '-translate-x-[150%] opacity-70'; // leftVisible
    tempSponsors[indexClamp(currentIndex - 2)].className = '-translate-x-[250%] opacity-0'; // offLeft
    tempSponsors[indexClamp(currentIndex + 2)].className = 'translate-x-[250%] opacity-0'; // offRight

    setSponsors(sponsors);
  }, [currentIndex])

  return (
    <section className="py-12 px-4 md:px-0 bg-white text-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-8 ${montserrat.className}`}>Thank You to Our Sponsors</h2>
        <div className="flex w-full h-52 md:h-64 justify-center items-center relative overflow-hidden">
          {sponsors.map((sponsor) => (
            <a key={sponsor.name} href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer" className={`absolute transition-all duration-500 ease-in-out transform ${sponsor.className}`}>
              <img src={sponsor.imageUrl} alt={sponsor.name} className="h-32 md:h-52 max-w-32 md:max-w-52 object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
