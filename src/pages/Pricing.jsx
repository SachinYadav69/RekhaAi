import React from "react";
import { Check, Sparkles, HelpCircle, Tag, Users } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Seeker",
      price: "0",
      desc: "Perfect for exploring your cosmic basics.",
      features: [
        "Daily Horoscope",
        "Basic Kundli Chart",
        "Moon Sign Analysis",
        "Community Access",
      ],
      button: "Start Free",
      highlight: false,
    },
    {
      name: "Oracle",
      price: "29",
      desc: "Our most popular plan for deep neural insights.",
      features: [
        "Everything in Seeker",
        "AI Life Predictions",
        "Detailed Dasha Analysis",
        "Relationship Compatibility",
        "Remedial Suggestions",
      ],
      button: "Get Oracle Pro",
      highlight: true,
    },
    {
      name: "Mystic",
      price: "99",
      desc: "Unlimited access for professional astrologers.",
      features: [
        "Everything in Oracle",
        "Advanced Shadbala Charts",
        "NASA Ephemeris API Access",
        "Custom PDF Reports",
        "Priority AI Support",
      ],
      button: "Go Mystic",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050201] text-white pt-10 pb-20 px-8 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-900/10 blur-[100px] -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Discount Banner */}
        <div className="mb-12 flex justify-center">
          <div className="bg-orange-600/10 border border-orange-500/20 px-6 py-2 rounded-full flex items-center gap-3">
            <Tag size={14} className="text-orange-500" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-200">
              New Year Offer: Get 20% off on Annual Plans. Use code{" "}
              <span className="text-white">REKHA20</span>
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/20 border border-orange-900/30 text-[10px] font-bold text-orange-500 uppercase tracking-[0.4em]">
            <Sparkles size={12} /> Fair Exchange
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
            Cosmic{" "}
            <span
              className="text-zinc-800"
              style={{ WebkitTextStroke: "1px #27272a" }}
            >
              Access.
            </span>
          </h1>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-10 border transition-all duration-500 ${plan.highlight ? "bg-white/[0.03] border-orange-500/30 backdrop-blur-xl scale-105 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-white/[0.01] border-zinc-900 backdrop-blur-md hover:border-zinc-700"}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-black text-[10px] font-black px-4 py-1 uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold tracking-widest uppercase mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">$</span>
                  <span className="text-6xl font-black tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="text-zinc-500 text-sm">/mo</span>
                </div>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-orange-600 mt-0.5" />
                    <span className="text-sm text-zinc-400 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className={`w-full py-5 font-black uppercase text-[10px] tracking-[0.3em] transition-all ${plan.highlight ? "bg-white text-black hover:bg-orange-600 hover:text-white" : "bg-transparent border border-zinc-800 text-white hover:bg-white hover:text-black"}`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* Minimal FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-center text-2xl font-black uppercase tracking-widest mb-16 flex items-center justify-center gap-4">
            <HelpCircle className="text-orange-600" /> Frequently Asked
          </h2>
          <div className="grid gap-8">
            <div className="space-y-2 border-l border-zinc-800 pl-6">
              <h4 className="text-sm font-bold uppercase text-orange-400">
                Can I cancel anytime?
              </h4>
              <p className="text-zinc-500 text-sm">
                Yes, you can cancel your subscription at any time from your
                dashboard without any hidden fees.
              </p>
            </div>
            <div className="space-y-2 border-l border-zinc-800 pl-6">
              <h4 className="text-sm font-bold uppercase text-orange-400">
                Is my data private?
              </h4>
              <p className="text-zinc-500 text-sm">
                We use 256-bit encryption. Your birth details are only used for
                calculation and never shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
