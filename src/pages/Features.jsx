import React from "react";
import Cards from "../components/Cards";

const Features = () => {
  return (
    <div className="bg-[#050201] min-h-screen pt-10 pb-10">
      {/*  TEXT SECTION  */}
      <div className="max-w-4xl mx-auto text-center mb-24 px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-8">
          Beyond Algorithms
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
          Where Ancient Sutras meet <br />
          <span className="text-orange-600 italic font-serif">
            Neural Intelligence.
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
          Rekha koi saadharan software nahi hai. Humne pracheen Vedic ganit ke
          shlokon ko NASA ke precision data ke saath merge kiya hai. Humara
          Neural Engine aapke janm-chakra ki har rekha ko analyze karta hai
          taaki aapko wo mil sake jo aapki kismat mein likha hai.
          <span className="text-zinc-300 block mt-6 font-medium italic">
            Sahi disha, sahi samay, sahi sanket.
          </span>
        </p>

        {/* Divider */}
        <div className="mt-16 w-32 h-[1px] bg-orange-900/30 mx-auto"></div>
      </div>

      {/* 2. CARDS SECTION (Full width container) */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <Cards />
      </div>
    </div>
  );
};

export default Features;
