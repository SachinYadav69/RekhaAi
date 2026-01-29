import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generatePrediction } from "../utils/gemini";

const Results = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    tob: "",
    pob: "",
  });
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true")
      navigate("/try-for-free");
  }, [navigate]);

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await generatePrediction(formData);
    setPrediction(res);
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#050201] text-white flex flex-col md:flex-row font-sans">
      {/* left formmm area*/}
      <div className="w-full md:w-1/2 p-12 border-r border-zinc-900 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full space-y-10">
          <div className="flex justify-between items-end">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">
              Birth Records
            </h1>
            <button
              onClick={handleLogout}
              className="text-[10px] text-zinc-600 hover:text-orange-600 uppercase tracking-widest transition-colors"
            >
              Logout
            </button>
          </div>

          <form onSubmit={handlePredict} className="space-y-8">
            <div className="space-y-1">
              <label className="text-[10px] text-zinc-500 tracking-widest uppercase font-bold">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-zinc-800 py-2 outline-none focus:border-orange-600 text-xl font-serif italic"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 tracking-widest uppercase font-bold">
                  Date of Birth
                </label>
                <input
                  type="date"
                  required
                  className="w-full bg-transparent border-b border-zinc-800 py-2 outline-none focus:border-orange-600 text-xs"
                  onChange={(e) =>
                    setFormData({ ...formData, dob: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 tracking-widest uppercase font-bold">
                  Time of Birth
                </label>
                <input
                  type="time"
                  required
                  className="w-full bg-transparent border-b border-zinc-800 py-2 outline-none focus:border-orange-600 text-xs"
                  onChange={(e) =>
                    setFormData({ ...formData, tob: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-zinc-500 tracking-widest uppercase font-bold">
                Place of Birth
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-zinc-800 py-2 outline-none focus:border-orange-600 text-xl font-serif italic"
                onChange={(e) =>
                  setFormData({ ...formData, pob: e.target.value })
                }
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-orange-600 py-6 font-black uppercase text-[10px] tracking-[0.5em] hover:bg-white hover:text-black transition-all"
            >
              {loading ? "Aligning Celestial Bodies..." : "Decrypt My Karma"}
            </button>
          </form>
        </div>
      </div>

      {/* right prediction area */}
      <div className="w-full md:w-1/2 bg-zinc-950/30 flex items-center justify-center p-12 relative overflow-hidden">
        <div className="max-w-lg w-full text-center relative z-10">
          {!prediction && !loading && (
            <p className="text-zinc-700 uppercase tracking-[0.6em] text-[10px] animate-pulse">
              Waiting for your details...
            </p>
          )}

          {loading && (
            <div className="space-y-4">
              <div className="w-12 h-12 border-t-2 border-orange-600 border-solid rounded-full animate-spin mx-auto"></div>
              <p className="text-orange-600 text-[10px] tracking-[0.4em] font-bold">
                The stars are speaking...
              </p>
            </div>
          )}

          {prediction && !loading && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-10 duration-700">
              <p className="text-orange-600 text-[10px] font-black tracking-[0.6em] uppercase">
                The Celestial Verdict
              </p>
              <p className="text-2xl font-serif italic leading-relaxed text-zinc-300">
                "{prediction}"
              </p>
              <button
                onClick={() => window.print()}
                className="mt-8 border border-zinc-800 px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Save Wisdom
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
