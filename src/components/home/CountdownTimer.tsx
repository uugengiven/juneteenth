"use client"

import React from "react";
import { useEffect, useState } from "react";

export interface CountdownTimerProps
  extends React.HTMLAttributes<HTMLDivElement>{
    date: string
}

const CountdownTimer = ({date}:CountdownTimerProps) => {
      const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = Date.parse(date) - Date.parse(new Date().toString());
      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({days, hours, minutes, seconds});
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="flex space-x-4">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{timeLeft.days}</span>
        <span>Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{timeLeft.hours}</span>
        <span>Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{timeLeft.minutes}</span>
        <span>Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{timeLeft.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;