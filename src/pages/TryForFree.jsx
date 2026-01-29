import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TryForFree = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMsg, setStatusMsg] = useState({ text: "", type: "" });

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") navigate("/results");
  }, [navigate]);

  const handleAuth = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (isSignup) {
      // Signup Logic
      if (users.find((u) => u.email === email)) {
        setStatusMsg({ text: "Email already exists!", type: "error" });
        return;
      }

      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));

      setStatusMsg({
        text: "Account Created! Login Now.",
        type: "success",
      });
      setIsSignup(false); // Direct Login mode par bhej dega
    } else {
      // Login Logic
      const user = users.find(
        (u) => u.email === email && u.password === password,
      );

      if (user) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/results");
      } else {
        setStatusMsg({ text: "Ghalat Email ya Password!", type: "error" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050201] flex items-center justify-center text-white px-6">
      <div className="w-full max-w-md border border-zinc-900 p-10 bg-zinc-950/50 backdrop-blur-md">
        <h2 className="text-3xl font-black italic uppercase mb-8 border-l-4 border-orange-600 pl-4">
          {isSignup ? "Create Destiny" : "The Portal"}
        </h2>

        <form onSubmit={handleAuth} className="space-y-5">
          <input
            type="email"
            placeholder="EMAIL"
            required
            className="w-full bg-black border border-zinc-800 p-4 text-xs tracking-widest outline-none focus:border-orange-600"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            required
            className="w-full bg-black border border-zinc-800 p-4 text-xs tracking-widest outline-none focus:border-orange-600"
            onChange={(e) => setPassword(e.target.value)}
          />

          {statusMsg.text && (
            <p
              className={`text-[10px] uppercase tracking-widest font-bold ${statusMsg.type === "success" ? "text-green-500" : "text-orange-600"}`}
            >
              {statusMsg.text}
            </p>
          )}

          <button className="w-full bg-white text-black py-4 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-orange-600 hover:text-white transition-all">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p
          className="mt-6 text-[10px] text-zinc-500 text-center cursor-pointer uppercase tracking-widest"
          onClick={() => {
            setIsSignup(!isSignup);
            setStatusMsg({ text: "", type: "" });
          }}
        >
          {isSignup ? "Already a member? Login" : "New here? Join the Cosmos"}
        </p>
      </div>
    </div>
  );
};

export default TryForFree;
