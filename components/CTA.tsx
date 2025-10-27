"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import WaitlistModal from "./WaitList";
import { Rocket } from "lucide-react";

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-28 bg-[#fff9f1] text-center text-gray-900 relative overflow-hidden">
      {/* Subtle Golden Glow */}
      <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-amber-200 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] bg-orange-300 opacity-30 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3 relative z-10"
      >
        Start Sending Invoices in Minutes
        <Rocket className="w-8 h-8 text-amber-600" />
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-base md:text-lg max-w-xl mx-auto mb-10 text-gray-700 relative z-10"
      >
        Join our early adopters and simplify your billing process, saving you
        valuable time and resources.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.07 }}
        onClick={() => setIsOpen(true)}
        className="inline-block px-8 py-3 bg-amber-600 text-white rounded-full font-semibold shadow-lg hover:bg-amber-700 transition relative z-10"
      >
        Join the Waitlist
      </motion.button>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
