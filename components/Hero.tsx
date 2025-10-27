"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import WaitlistModal from "@/components/WaitList";

export default function Hero() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-center bg-white text-black px-6 md:px-16 overflow-hidden">
      {/* 📊 Left: Product Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center mt-12 lg:mt-0"
      >
        <Image
          src="/screen.png"
          alt="Veyra Dashboard Preview"
          width={550}
          height={350}
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      {/* 📜 Right: Text Content */}
      <div className="flex-1 text-center lg:text-left z-10 max-w-xl">
        {/* Beta badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-2 bg-blue-100 text-sm rounded-full text-amber-700 mb-6"
        >
          🚀 Introducing <span className="font-semibold">Veyra</span> - now in
          public beta
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          The Future of <span className="text-shadow-amber-300">Invoicing</span>{" "}
          is <span className="text-shadow-amber-600">Here</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 mt-6 text-lg"
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
            className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition"
          >
            Join Public Beta
          </button>
          <button
            onClick={() => setShowWaitlist(true)}
            className="px-8 py-4 bg-transparent border border-gray-300 text-black font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            View Demo
          </button>
        </motion.div>
      </div>

      {/* ✨ Modal */}
      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </section>
  );
}
