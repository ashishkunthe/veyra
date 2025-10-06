"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import WaitlistModal from "@/components/WaitList";

export default function Hero() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white px-6 md:px-16 overflow-hidden">
      {/* Background glow lights */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-600 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-600 opacity-30 blur-[120px] rounded-full"></div>

      {/* 📜 Left: Text Content */}
      <div className="flex-1 text-center lg:text-left z-10">
        {/* Beta badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm mb-6 backdrop-blur-md"
        >
          🚀 Introducing <span className="font-semibold">Veyra</span> — now in
          public beta
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-2xl"
        >
          The Future of <span className="text-indigo-400">Invoicing</span> is{" "}
          <span className="text-indigo-400">Here</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mt-6 max-w-lg"
        >
          Veyra is the all-in-one invoicing platform for SaaS teams and
          freelancers. Get paid faster, manage your finances, and grow your
          business with ease.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center"
        >
          <button
            onClick={() => setShowWaitlist(true)}
            className="px-8 py-4 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition shadow-lg"
          >
            Join Public Beta
          </button>
          <button
            onClick={() => setShowWaitlist(true)}
            className="px-8 py-4 bg-transparent border border-white font-semibold rounded-full hover:bg-white hover:text-black transition"
          >
            View Demo
          </button>
        </motion.div>
      </div>

      {/* 📊 Right: Product Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="flex-1 mt-16 lg:mt-0 flex justify-center"
      >
        <Image
          src="/screen.png"
          alt="Veyra Dashboard Preview"
          width={600}
          height={400}
          className="rounded-2xl shadow-2xl border border-white/10"
        />
      </motion.div>

      {/* ✨ Waitlist Modal */}
      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </section>
  );
}
