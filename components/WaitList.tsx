"use client";
import { Rocket } from "lucide-react";
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
      const res = await axios.post(`${backendUrl}/waitlist`, {
        name,
        email,
      });

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
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {!success ? (
          <>
            <h2 className="text-2xl text-black font-bold text-center mb-4 flex items-center justify-center gap-2">
              Join the Waitlist <Rocket className="text-indigo-600" />
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Be the first to know when Veyra launches!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
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
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              🎉 You’re in!
            </h3>
            <p className="text-gray-600">
              We’ll notify you as soon as Veyra is ready.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
