import React from "react";
import { montserrat } from "../../app/fonts";
import Image from "next/image";

const DollarBank = () => {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center mb-12">
        <div className="w-full flex flex-col justify-center items-center bg-slate-700 py-6 text-white">
        <div className="w-2/3 h-1 bg-gradient-to-r from-red-700 via-orange-500 to-yellow-400 mb-6"></div>
        <Image src="/images/sponsors/dollarbank_clear.png" alt="Dollar Bank Logo" width={400} height={400} />
        <div className="text-lg">presents the</div>
        <h2 className={`text-5xl pb-4 ${montserrat.className}`}>Small Business Vendor Plaza</h2>
        <div className="w-2/3 h-1 bg-gradient-to-l from-red-700 via-orange-500 to-yellow-400"></div>
        </div>
        <div className="aspect-video mx-4 rounded-lg overflow-hidden w-1/2 my-6">
                <iframe
                src="https://www.youtube.com/embed/SjnFdRibjks?si=RuplTlZBaC9RVlKe"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full shadow-md"
                ></iframe>
            </div>
      </section>
    </>);
};

export default DollarBank;
