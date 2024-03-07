import React from "react";
import { montserrat } from "../../app/fonts";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const eventDate ="June 14, 2024 12:00:00"; // Set the event date

  return (
    <div className="flex items-center justify-between bg-red-700 pl-10">
      <div className="space-y-4 max-w-md text-white">
        <h1 className={`text-5xl font-bold ${montserrat.className}`}>Juneteenth</h1>
        <p className="text-xl">Join us in celebrating freedom and community</p>
        <CountdownTimer date={eventDate} />
      </div>
      <div className="relative w-1/2 aspect-video">
        <div style={{ clipPath: 'xywh(0 15px 100% 90% round 50px 0)' }} className="overflow-hidden">
          <img src="/images/istockphoto-1137781079-1024x1024.jpg" alt="Juneteenth Celebration" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
