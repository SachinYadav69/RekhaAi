import React from "react";

const Planets = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden relative selection:bg-yellow-500/30">
      {/* --- LEFT GIANT PLANET --- */}
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-20 blur-[2px] pointer-events-none hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80"
          alt="mars-side"
          className="w-full h-full object-cover rounded-full shadow-[0_0_150px_rgba(220,38,38,0.15)]"
        />
      </div>

      {/* --- RIGHT GIANT PLANET --- */}
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[650px] h-[650px] opacity-15 blur-[1px] pointer-events-none hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&q=80"
          alt="saturn-side"
          className="w-full h-full object-cover rounded-full shadow-[0_0_150px_rgba(234,179,8,0.1)]"
        />
      </div>

      {/* CENTRAL MOON SECTION */}
      <div className="relative flex items-center justify-center w-full h-[450px] z-10">
        {/* The Moon  */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.15)] border border-white/5">
          <img
            src="https://images.unsplash.com/photo-1522030239044-12f014385ca0?w=800&q=80"
            className="w-full h-full object-cover grayscale brightness-110 contrast-125"
            alt="Moon"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent"></div>
        </div>
      </div>

      {/*  CONTENT SECTION */}
      <div className="max-w-3xl px-8 text-center z-30 -mt-20 mb-16">
        <div className="inline-block px-4 py-1 mb-6 border border-white/10 rounded-full text-[9px] uppercase tracking-[0.6em] text-white/40 bg-white/5 backdrop-blur-sm">
          Lunar Energy
        </div>

        <h2 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tighter leading-none">
          Moon <span className="font-serif italic text-gray-500">&</span>{" "}
          Destiny
        </h2>

        <p className="text-gray-400 leading-relaxed text-lg md:text-xl font-light max-w-2xl mx-auto italic border-l border-white/10 pl-6">
          "The Moon doesn't just pull the tides; it pulls at our deepest
          emotions. While stars provide the map, the Moon provides the rhythm of
          our intuition and the shadows of our subconscious."
        </p>

        <div className="mt-10 h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"></div>
      </div>
    </div>
  );
};

export default Planets;
