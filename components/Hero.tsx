"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import WaitlistModal from "@/components/WaitList";

export default function Hero() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-white text-black px-6 sm:px-8 md:px-12 lg:px-20 py-20">
      {/* Left Image */}
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
          className="rounded-xl shadow-xl w-full max-w-lg"
        />
      </motion.div>

      {/* Right Text */}
      <div className="flex-1 text-center lg:text-left z-10 max-w-xl">
        {/* Amber Beta badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm rounded-full mb-6"
        >
          🚀 Introducing <span className="font-semibold">Veyra</span> Public
          Beta
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Create invoices
          <span className="text-amber-600"> effortlessly</span> in minutes
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 mt-6 text-base md:text-lg max-w-md mx-auto lg:mx-0"
        >
          Automate your workflow, get paid faster, and focus on the work you
          love. Designed for SaaS teams and freelancers.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <button
            onClick={() => setShowWaitlist(true)}
            className="px-10 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition"
          >
            Join Public Beta
          </button>

          <button
            onClick={() => setShowWaitlist(true)}
            className="px-10 py-4 border border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition"
          >
            View Demo
          </button>
        </motion.div>
      </div>

      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </section>
  );
}
