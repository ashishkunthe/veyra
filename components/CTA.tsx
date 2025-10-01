"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full py-28 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 text-center text-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-500 opacity-30 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-indigo-500 opacity-30 blur-[150px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-6 relative z-10"
      >
        Start Sending Invoices in Minutes 🚀
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg max-w-2xl mx-auto mb-10 text-gray-200 relative z-10"
      >
        Join early adopters using{" "}
        <span className="text-white font-semibold">Veyra</span> to simplify
        billing and save hours every month.
      </motion.p>

      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        className="inline-block px-12 py-4 bg-white text-indigo-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition relative z-10"
      >
        Join the Waitlist
      </motion.a>
    </section>
  );
}
