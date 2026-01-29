import React from "react";
import { Cpu, Globe, Database, PenTool } from "lucide-react";

const Methodology = () => {
  return (
    <div className="bg-[#050201] min-h-screen pt-32 pb-20 px-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <p className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-4">
            Our Process
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 italic">
            THE ENGINE <br />
            <span
              className="text-zinc-800"
              style={{ WebkitTextStroke: "1px #27272a" }}
            >
              OF DESTINY.
            </span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Humne purane vedon ki taqat ko aaj ke neural algorithms ke saath
            joda hai. Rekha sirf bhavishyavani nahi karti, ye cosmic data ko
            process karti hai.
          </p>
        </div>

        {/* The 4-Step Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Step 1 */}
          <div className="group border-l border-zinc-900 pl-8 py-6 hover:border-orange-600 transition-all duration-500">
            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
              <Database className="text-orange-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              01. NASA EPHEMERIS DATA
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              Hum NASA ke JPL (Jet Propulsion Laboratory) ke ephemeris data ka
              upyog karte hain. Isse humein har grah (planet) ki exact position
              milti hai, 9 decimal points tak ki accuracy ke saath.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group border-l border-zinc-900 pl-8 py-6 hover:border-orange-600 transition-all duration-500">
            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
              <PenTool className="text-orange-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              02. VEDIC ALGORITHMS
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              BPHS (Brihat Parashara Hora Shastra) aur anya pracheen granthon ke
              sutras ko humne complex mathematical codes mein badla hai. Ye
              algorithms grahon ki dasha aur unke bal ka sateek vishleshan karte
              hain.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group border-l border-zinc-900 pl-8 py-6 hover:border-orange-600 transition-all duration-500">
            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
              <Cpu className="text-orange-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              03. NEURAL INTERPRETATION
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              Data ko process karne ke baad, humara AI (Gemini Powered) in
              technical calculations ko ek saral aur prabhavshali bhasha mein
              badalta hai, taaki aap apni life ke decisions asani se le sakein.
            </p>
          </div>

          {/* Step 4 */}
          <div className="group border-l border-zinc-900 pl-8 py-6 hover:border-orange-600 transition-all duration-500">
            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
              <Globe className="text-orange-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              04. KARMIC FEEDBACK LOOP
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              Rekha samay ke saath sikhti hai. Jaise-jaise transits (grah
              gochar) badalte hain, humara system aapke charts ko real-time mein
              update karta rehta hai.
            </p>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-32 p-12 bg-zinc-950 border border-zinc-900 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
          <p className="text-2xl font-serif italic text-zinc-300">
            "Mathematics is the language in which God has written the universe."
          </p>
          <p className="text-orange-600 text-xs mt-4 uppercase tracking-widest font-bold">
            — Galileo Galilei (Applied to Rekha)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
