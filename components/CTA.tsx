"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import WaitlistModal from "./WaitList";
import { Rocket } from "lucide-react";

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-28 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-center text-white relative overflow-hidden">
      {/* 🌌 Subtle background glows */}
      <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-purple-400 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] bg-indigo-400 opacity-20 blur-[120px] rounded-full"></div>

      {/* 🔹 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10 flex items-center justify-center gap-3"
      >
        Start Sending Invoices in Minutes
        <Rocket className="w-8 h-8 text-yellow-300" />
      </motion.h2>

      {/* 🔹 Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-base md:text-lg max-w-xl mx-auto mb-10 text-gray-200 relative z-10"
      >
        Join our early adopters and simplify your billing process, saving you
        valuable time and resources.
      </motion.p>

      {/* 🔹 Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        className="inline-block px-8 py-3 bg-white text-indigo-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition relative z-10"
      >
        Join the Waitlist
      </motion.button>

      {/* 📩 Waitlist Modal */}
      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
