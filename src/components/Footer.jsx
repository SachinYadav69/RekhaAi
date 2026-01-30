import React from "react";
import { Instagram, Twitter, Mail, ArrowUpRight } from "lucide-react";
import Rekha from "../../public/Assets/Rekha.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#050201] text-white border-t border-zinc-900 pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & About Section */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <img
              src={Rekha}
              alt="Rekha Logo"
              className="w-32 h-auto grayscale brightness-200"
            />
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Merging 5,000 years of Vedic wisdom with next-generation neural
              intelligence. The future isn't predicted; it's calculated.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-white transition-colors"
              >
                <Instagram size={18} className="text-zinc-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-white transition-colors"
              >
                <Twitter size={18} className="text-zinc-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-white transition-colors"
              >
                <Mail size={18} className="text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white font-bold">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/methodology"
                  className="hover:text-white transition-colors"
                >
                  Methodology
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white font-bold">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-center gap-2 group cursor-pointer">
                <span className="group-hover:text-white transition-colors">
                  Help Center
                </span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-all"
                />
              </li>
              <li className="flex items-center gap-2 group cursor-pointer">
                <span className="group-hover:text-white transition-colors">
                  Contact Expert
                </span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-all"
                />
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Access
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-600">
          <p>© 2026 Rekha AI. Built for the seekers.</p>
          <div className="flex gap-8">
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">
              Vedic Engine Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
