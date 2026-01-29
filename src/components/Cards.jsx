import React from "react";
import {
  Eye,
  Zap,
  Moon,
  Sun,
  ShieldAlert,
  MessageSquareQuote,
} from "lucide-react";

const Cards = () => {
  const offerings = [
    {
      title: "Black Magic Detection",
      desc: "Identify negative energy imprints and spiritual blockages in your aura.",
      icon: <ShieldAlert className="text-orange-600" size={18} />,
    },
    {
      title: "Energy Sessions",
      desc: "Real-time planetary transit analysis to align your chakras.",
      icon: <Zap className="text-orange-500" size={18} />,
    },
    {
      title: "Spiritual Guidance",
      desc: "Direct path to your soul's purpose based on Atmakaraka.",
      icon: <Eye className="text-orange-400" size={18} />,
    },
    {
      title: "Meditation Messages",
      desc: "Personalized daily chants and prompts generated via Neural AI.",
      icon: <MessageSquareQuote className="text-orange-500" size={18} />,
    },
    {
      title: "Lunar Insights",
      desc: "Deep dive into Nakshatras to understand hidden emotional patterns.",
      icon: <Moon className="text-zinc-400" size={18} />,
    },
    {
      title: "Karmic Decoding",
      desc: "Analyze your past life debts and how to resolve them now.",
      icon: <Sun className="text-orange-600" size={18} />,
    },
  ];

  return (
    <div className="bg-[#050201] text-white py-16 mt-10 px-8 border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Simple & Clean Header */}
        <div className="mb-12 border-l-2 border-orange-600 pl-6">
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">
            The Oracle Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            What Rekha Offers.
          </h2>
        </div>

        {/* Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-zinc-900">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-transparent border-r border-b border-zinc-900 p-10 hover:bg-zinc-950 transition-colors duration-300"
            >
              <div className="space-y-6">
                {/*  Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-zinc-900/50 border border-zinc-800">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold mb-3 tracking-wider uppercase text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  CTA */}
        <div className="mt-16 flex justify-center">
          <button className="bg-white text-black px-10 py-4 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-zinc-200 transition-all shadow-xl">
            Experience Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
