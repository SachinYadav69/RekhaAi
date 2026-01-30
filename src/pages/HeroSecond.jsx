import React from "react";
import { MoveRight } from "lucide-react";
import BabaImage from "../../public/Assets/Baba.png";
import Cards from "../components/Cards";
import Planets from "../components/Planets";
import { Link } from "react-router-dom";

const HeroSecond = () => {
  const planets = [
    "MERCURY",
    "VENUS",
    "EARTH",
    "MARS",
    "JUPITER",
    "SATURN",
    "URANUS",
    "NEPTUNE",
    "PLUTO",
  ];

  return (
    <div className="bg-[#050201] text-white overflow-hidden py-16">
      {/* --- INFINITE PLANET SCROLLER --- */}
      <div className="relative mb-20 border-y border-zinc-900 bg-zinc-950/30 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite]">
          {/* Double list for seamless looping */}
          {[...planets, ...planets].map((planet, index) => (
            <div key={index} className="flex items-center mx-12">
              <span className="text-[10px] font-black tracking-[0.5em] text-white hover:text-orange-500 transition-colors cursor-default">
                {planet}
              </span>
              <div className="ml-12 w-1.5 h-1.5 rounded-full bg-orange-900/40"></div>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: EDGY SQUARE IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-square overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
            <img
              src={BabaImage}
              alt="Mystical AI"
              className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-2 border-b-2 border-orange-600/30 -z-10"></div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="flex flex-col justify-center space-y-10">
          <div className="space-y-4">
            <p className="text-gray-600 font-bold text-[10px] uppercase tracking-[0.5em]">
              The Methodology
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              ANCIENT DATA. <br />
              <span className="text-zinc-800 font-outline-2">MODERN AI.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                id: "01",
                title: "NEURAL ASTROLOGY",
                desc: "Vedic principles through advanced neural networks.",
              },
              {
                id: "02",
                title: "PRECISION MAPPING",
                desc: "Planetary degrees calculated using JPL Ephemeris.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="group border-t border-zinc-900 pt-6"
              >
                <div className="flex items-center gap-6">
                  <span className="text-white-600 font-mono text-xs">
                    {item.id}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight text-zinc-100">
                      {item.title}
                    </h4>
                    <p className="text-zinc-600 text-sm max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link to="/methodology">
            <button className="group flex items-center gap-6 bg-white text-black w-fit px-10 py-5 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-orange-600 hover:text-white transition-all duration-500">
              Launch Analysis{" "}
              <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </main>

      <Planets />
      <Cards />

      {/* Inline Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSecond;
