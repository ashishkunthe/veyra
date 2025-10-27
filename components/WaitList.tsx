"use client";
import { Rocket, X, Check } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function WaitlistModal({ isOpen, onClose }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const AMBER = "#FBBF24";

  if (!isOpen) return null;

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validateName = (value: string) => /^[A-Za-z\s]+$/.test(value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (trimmedName.length < 2) {
      setError("Name must be at least 2 characters.");
      return;
    }

    if (!validateName(trimmedName)) {
      setError("Name should contain only letters and spaces.");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!backendUrl) {
      setError("Server unavailable. Please try again later.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${backendUrl}/waitlist`, {
        name: trimmedName,
        email: trimmedEmail,
      });

      if (res.status === 201 || res.status === 200) {
        setSuccess(true);
        setName("");
        setEmail("");
      } else {
        setError("Unexpected response. Please try again.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
    >
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl relative border"
        style={{ borderColor: "#F3E8D9" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X size={20} />
        </button>

        {!success ? (
          <>
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#FFF4DB" }}
              >
                <Rocket className="w-6 h-6" style={{ color: AMBER }} />
              </div>
            </div>

            {/* Heading */}
            <h2
              id="waitlist-title"
              className="text-xl font-bold text-center text-gray-900 mb-1"
            >
              Join the Waitlist
            </h2>
            <p className="text-gray-600 text-center mb-6 text-sm">
              Be the first to know when{" "}
              <span className="font-medium" style={{ color: AMBER }}>
                Veyra
              </span>{" "}
              launches!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 text-gray-900 bg-gray-50 border rounded-lg focus:outline-none
                  ${
                    error.toLowerCase().includes("name")
                      ? "border-red-400"
                      : "border-gray-200"
                  }`}
                style={{ boxShadow: "none" }}
                aria-label="Name"
                minLength={2}
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 text-gray-900 bg-gray-50 border rounded-lg focus:outline-none
                  ${
                    error.toLowerCase().includes("email")
                      ? "border-red-400"
                      : "border-gray-200"
                  }`}
                style={{ boxShadow: "none" }}
                aria-label="Email"
                required
              />

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                style={{
                  backgroundColor: AMBER,
                  boxShadow: loading
                    ? "none"
                    : "0 6px 18px rgba(251,191,36,0.18)",
                }}
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="flex justify-center mb-3">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#FFF4DB" }}
              >
                <Check className="w-6 h-6" style={{ color: AMBER }} />
              </div>
            </div>
            <h3 className="text-2xl font-bold" style={{ color: AMBER }}>
              You’re in!
            </h3>
            <p className="text-gray-700 mt-2">
              We’ll notify you as soon as Veyra is ready to fly.
            </p>

            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 rounded-full font-semibold"
              style={{
                backgroundColor: AMBER,
                color: "#fff",
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
