import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const Checkout = () => {
  const { state: plan } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!plan) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-500 mb-4 tracking-widest uppercase">
            No plan selected.
          </p>
          <button
            onClick={() => navigate("/pricing")}
            className="px-8 py-3 bg-orange-600 text-white font-black uppercase text-xs tracking-tighter hover:bg-white hover:text-black transition-all"
          >
            Return to Pricing
          </button>
        </div>
      </div>
    );
  }

  const handlePayNow = async () => {
    try {
      setLoading(true);
      setError("");
      if (Number(plan.price) === 0) {
        navigate("/success", {
          state: { orderId: "FREE" + Date.now(), amount: 0, status: "active" },
        });
        return;
      }
      const res = await axios.post(`${API_BASE}/api/create-order`, {
        planId: plan.id || plan.name.toLowerCase(),
        amount: Number(plan.price),
      });
      navigate("/success", { state: res.data });
    } catch (e) {
      setError("Payment failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050201] text-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT side - PLAN DETAILS */}
        <div className="flex flex-col justify-center space-y-8 p-8 border-l-2 border-orange-600 bg-zinc-950/30">
          <div>
            <span className="text-[10px] text-orange-600 font-black uppercase tracking-[0.4em]">
              Selected Plan
            </span>
            <h1 className="text-5xl font-black italic uppercase mt-2">
              {plan.name}
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Unlock the full potential of your experience with the {plan.name}{" "}
              tier. Premium features are ready for deployment.
            </p>
            <ul className="space-y-3">
              {plan.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center text-[11px] uppercase tracking-widest text-zinc-300"
                >
                  <span className="w-2 h-2 bg-orange-600 mr-3 rotate-45"></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-zinc-900">
            <p className="text-zinc-500 text-[10px] uppercase mb-1">
              Monthly Investment
            </p>
            <p className="text-4xl font-black">
              ${plan.price}
              <span className="text-sm text-zinc-600 font-normal">/mo</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: BILLING FORM */}
        <div className="bg-zinc-950 border border-zinc-900 p-10 backdrop-blur-sm relative overflow-hidden">
          <h2 className="text-xl font-bold uppercase tracking-tighter mb-8">
            Payment Information
          </h2>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest">
                Card Holder
              </label>
              <input
                type="text"
                placeholder="NAME ON CARD"
                className="w-full bg-black border border-zinc-800 p-4 text-xs tracking-widest outline-none focus:border-orange-600 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest">
                Card Details
              </label>
              <input
                type="text"
                placeholder="XXXX XXXX XXXX XXXX"
                className="w-full bg-black border border-zinc-800 p-4 text-xs tracking-widest outline-none focus:border-orange-600 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest">
                  Expiry
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-black border border-zinc-800 p-4 text-xs tracking-widest outline-none focus:border-orange-600 transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest">
                  CVC
                </label>
                <input
                  type="password"
                  placeholder="***"
                  className="w-full bg-black border border-zinc-800 p-4 text-xs tracking-widest outline-none focus:border-orange-600 transition-all"
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={handlePayNow}
                disabled={loading}
                className="w-full py-5 bg-white text-black font-black uppercase text-[11px] tracking-[0.3em] hover:bg-orange-600 hover:text-white transition-all disabled:opacity-40"
              >
                {loading ? "Authorizing..." : `Confirm Payment: $${plan.price}`}
              </button>

              {error && (
                <p className="text-orange-600 text-[10px] font-bold uppercase mt-4 text-center tracking-widest">
                  {error}
                </p>
              )}

              <p className="text-center text-zinc-600 text-[9px] mt-6 uppercase tracking-[0.2em]">
                Secure Encrypted Transaction
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
