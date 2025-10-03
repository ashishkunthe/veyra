"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import WaitlistModal from "@/components/WaitList";

export default function Hero() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white px-6 overflow-hidden">
      {/* Background blur lights */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-600 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-600 opacity-30 blur-[120px] rounded-full"></div>

      {/* Beta Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm mb-6 backdrop-blur-md"
      >
        🚀 Introducing <span className="font-semibold">Veyra</span> now in
        public beta
      </motion.div>

      {/* Hero Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl"
      >
        The Future of <span className="text-indigo-400">Invoicing</span> is Here
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
      >
        Veyra is your all-in-one platform to create, send, automate, and track
        invoices built for modern SaaS teams and freelancers.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 flex gap-4 justify-center flex-wrap"
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

      {/* Dashboard Preview Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-16 max-w-4xl w-full pb-20"
      >
        <Image
          src="/veyra.png"
          alt="Veyra Dashboard Preview"
          width={1200}
          height={700}
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
