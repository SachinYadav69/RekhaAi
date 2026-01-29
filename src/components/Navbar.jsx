import React from "react";
import Rekha from "../../public/Assets/Rekha.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#050201]">
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        {/* REKHA Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="inline-block">
            <img
              src={Rekha}
              alt="Rekha Logo"
              className="w-30 md:w-40 h-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
          <Link
            to="/pricing"
            className="hover:text-orange-400 transition-colors tracking-[0.25em]"
          >
            Pricing
          </Link>
          <Link
            to="/features"
            className="hover:text-orange-400 transition-colors tracking-[0.25em]"
          >
            Features
          </Link>
          <Link
            to="/methodology"
            className="hover:text-orange-400 transition-colors tracking-[0.25em]"
          >
            Methodology
          </Link>
          <Link
            to="/tryforfree"
            className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all shadow-lg shadow-orange-500/10 tracking-widest text-[9px]"
          >
            TRY FOR FREE
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
