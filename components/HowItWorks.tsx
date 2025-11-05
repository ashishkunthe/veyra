"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Send, Repeat } from "lucide-react";

const steps = [
  {
    icon: <FileText size={40} className="text-amber-600" />,
    title: "Create Your Invoice",
    desc: "Generate clean, branded invoices in seconds. No complexity, no hassle.",
  },
  {
    icon: <Send size={40} className="text-amber-600" />,
    title: "Send It Instantly",
    desc: "Deliver invoices securely via email and get notified when they’re opened.",
  },
  {
    icon: <Repeat size={40} className="text-amber-600" />,
    title: "Automate & Get Paid",
    desc: "Enable recurring billing and reminders. Receive payments faster.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section
        id="how"
        className="w-full py-24 md:py-32 bg-[#fff9f1] text-gray-900 text-center relative overflow-hidden"
      >
        {/* Ambient Decoration */}
        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-amber-200 opacity-30 blur-[140px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-yellow-300 opacity-20 blur-[140px] rounded-full" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          How <span className="text-amber-700">Veyra</span> Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mb-14"
        >
          Create. Send. Automate. Everything you need to get paid without
          friction.
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 + 0.2, duration: 0.6 }}
              className="flex flex-col items-center bg-white border border-amber-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-14"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://veyra-main.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold shadow-md transition inline-block"
          >
            Start Free Today
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
