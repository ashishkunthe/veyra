"use client";
import { Rocket, X } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function WaitlistModal({ isOpen, onClose }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!isOpen) return null;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (!backendUrl) {
      console.error("❌ Missing NEXT_PUBLIC_BACKEND_URL in .env.local");
      return;
    }

    try {
      const res = await axios.post(`${backendUrl}/waitlist`, { name, email });

      if (res.status === 201) {
        setSuccess(true);
        setName("");
        setEmail("");
      }
    } catch (err: any) {
      console.error("Waitlist error:", err);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl relative animate-fadeIn">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X size={20} />
        </button>

        {!success ? (
          <>
            {/* 🚀 Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 flex items-center justify-center rounded-full">
                <Rocket className="text-indigo-600 w-6 h-6" />
              </div>
            </div>

            {/* 📝 Heading */}
            <h2 className="text-xl font-bold text-center text-gray-900 mb-1">
              Join the Waitlist
            </h2>
            <p className="text-gray-600 text-center mb-6 text-sm">
              Be the first to know when{" "}
              <span className="font-medium text-indigo-600">Veyra</span>{" "}
              launches!
            </p>

            {/* 📩 Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Join Waitlist
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
                <Rocket className="text-green-600 w-6 h-6" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              You’re in!
            </h3>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              We’ll notify you as soon as Veyra is ready
              <Rocket className="text-indigo-600 w-4 h-4 inline-block" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
