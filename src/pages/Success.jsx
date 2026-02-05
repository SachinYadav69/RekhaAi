import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p>No order found.</p>
          <button
            onClick={() => navigate("/pricing")}
            className="mt-4 px-4 py-2 bg-orange-600 text-black rounded"
          >
            Go to Pricing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full p-8 border border-zinc-800 rounded-xl text-center">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
        <h1 className="text-2xl font-bold mb-2">Payment Successful 🎉</h1>
        <p className="text-zinc-400 mb-6">Your subscription is now active.</p>

        <div className="text-left space-y-2 mb-6 text-sm">
          <div className="flex justify-between">
            <span className="text-zinc-500">Order ID</span>
            <span className="font-mono break-all">{state.orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Plan</span>
            <span className="capitalize">{state.planId || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Amount</span>
            <span>₹{state.amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Status</span>
            <span className="text-green-400">{state.status}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/tryforfree")}
          className="w-full py-3 bg-orange-600 text-black font-bold rounded hover:bg-orange-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Success;
