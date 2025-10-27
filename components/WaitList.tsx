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
  const AMBER = "#A67C52";

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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-[#FAF6F0] rounded-2xl p-8 w-full max-w-sm shadow-2xl relative border border-[#E2D8CB]">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-[#7A6E64] hover:text-[#A67C52] transition"
        >
          <X size={20} />
        </button>

        {!success ? (
          <>
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F1E7D8]">
                <Rocket className="w-6 h-6" style={{ color: AMBER }} />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-xl font-bold text-center text-[#3E3A36] mb-1">
              Join the Waitlist
            </h2>
            <p className="text-[#7A6E64] text-center mb-6 text-sm">
              Be the first to try{" "}
              <span className="font-semibold" style={{ color: AMBER }}>
                Veyra
              </span>{" "}
              when it launches.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 text-[#3E3A36] bg-[#F7F3ED] border rounded-lg 
                  focus:outline-none focus:border-[#C3AC91]
                  ${
                    error.toLowerCase().includes("name")
                      ? "border-red-400"
                      : "border-[#E2D8CB]"
                  }`}
                aria-label="Name"
                minLength={2}
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 text-[#3E3A36] bg-[#F7F3ED] border rounded-lg
                  focus:outline-none focus:border-[#C3AC91]
                  ${
                    error.toLowerCase().includes("email")
                      ? "border-red-400"
                      : "border-[#E2D8CB]"
                  }`}
                aria-label="Email"
                required
              />

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold text-white transition 
                  ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:opacity-90"
                  }`}
                style={{
                  backgroundColor: AMBER,
                  boxShadow: "0 8px 18px rgba(166,124,82,0.25)",
                }}
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F1E7D8]">
                <Check className="w-6 h-6" style={{ color: AMBER }} />
              </div>
            </div>

            <h3 className="text-2xl font-bold" style={{ color: AMBER }}>
              You're in!
            </h3>
            <p className="text-[#7A6E64] mt-2">
              We’ll notify you as soon as Veyra is ready to fly.
            </p>

            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 rounded-full font-semibold bg-[#c77120] text-white hover:bg-[#8C6239] transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
