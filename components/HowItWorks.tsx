"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Send, Repeat } from "lucide-react";
import WaitlistModal from "@/components/WaitList";

const steps = [
  {
    icon: <FileText size={48} />,
    title: "1. Create Your Invoice",
    desc: "Fill in client details, add line items, set tax and generate invoices in seconds.",
  },
  {
    icon: <Send size={48} />,
    title: "2. Send It Instantly",
    desc: "Deliver invoices directly to clients via email PDF included, tracked, and ready.",
  },
  {
    icon: <Repeat size={48} />,
    title: "3. Automate & Get Paid",
    desc: "Enable recurring billing and let Veyra handle the rest while you focus on growth.",
  },
];

export default function HowItWorks() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <section
        id="how"
        className="w-full py-28 bg-gradient-to-b from-gray-950 via-indigo-950 to-black text-white text-center relative overflow-hidden"
      >
        {/* 🌌 Background glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          How <span className="text-indigo-400">Veyra</span> Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-16"
        >
          We’ve simplified invoicing into three powerful steps from creation to
          automation.
        </motion.p>

        {/* 🪄 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
              className="flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 hover:scale-105 hover:bg-white/10 transition"
            >
              <div className="mb-6 text-indigo-400">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ✅ CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16"
        >
          <button
            onClick={() => setShowWaitlist(true)}
            className="px-10 py-4 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition shadow-lg"
          >
            Start Free Today
          </button>
        </motion.div>
      </section>

      {/* 🪩 Waitlist Modal */}
      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </>
  );
}
