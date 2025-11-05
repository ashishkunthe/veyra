"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full py-20 md:py-28 bg-[#fff9f1] text-center text-gray-900 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-20 left-1/3 w-[420px] h-[420px] bg-amber-200 opacity-25 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-20 right-1/3 w-[420px] h-[420px] bg-orange-300 opacity-20 blur-[150px] rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-2 relative z-10"
      >
        Start Sending Invoices in Minutes
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-700 relative z-10 px-4"
      >
        Join our early adopters and simplify your billing process, saving time
        and growing revenue without friction.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        href="https://veyra-main.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-4 bg-amber-600 text-white text-lg rounded-full font-semibold shadow-md hover:shadow-xl hover:bg-amber-700 transition relative z-10 inline-block"
      >
        Get Started
      </motion.a>
    </section>
  );
}
