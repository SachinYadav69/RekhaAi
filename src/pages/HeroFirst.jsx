import React from "react";
import { Sparkles, ChevronRight } from "lucide-react";

const HeroFirst = () => {
  return (
    <div className="bg-[#050201] text-[#ededed] selection:bg-orange-500/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-[#050201] to-[#050201] -z-10"></div>

      {/* Padding niche se kam kar di (pb-10) aur min-h-screen hata diya */}
      <main className="relative z-10 pt-20 pb-10 px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/30 border border-orange-900/50 text-[11px] font-medium text-orange-300 mb-8 uppercase tracking-widest leading-none">
          <Sparkles size={12} className="text-orange-400" />
          Powered by AI
        </div>
        {/* Heading with Side Flares */}

        <div className="relative max-w-5xl">
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
            <div className="w-40 h-64 bg-orange-600/20 blur-[80px] rounded-full -rotate-12 transform origin-bottom-right"></div>
          </div>
          <div className="relative max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent relative z-10 leading-tight">
              The future is written <br /> in the stars.
            </h1>
          </div>

          <div className="absolute -right-24 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
            <div className="w-40 h-64 bg-orange-600/20 blur-[40px] rounded-full rotate-12 transform origin-bottom-left"></div>
          </div>
        </div>
        <p className="text-zinc-500 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light">
          Experience personal astrology that evolves with you. Direct cosmic
          insights delivered via our advanced neural engine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 z-20">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-orange-600 hover:text-white transition-all flex items-center gap-2">
            Generate Chart <ChevronRight size={18} />
          </button>
          <button className="px-8 py-3 rounded-full font-semibold border border-zinc-800 hover:bg-zinc-900 transition-all text-zinc-400">
            View Sample
          </button>
        </div>
      </main>
    </div>
  );
};

export default HeroFirst;
