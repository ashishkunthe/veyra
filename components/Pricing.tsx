"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import WaitlistModal from "@/components/WaitList";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "",
    highlight: false,
    features: [
      "5 invoices total (one-time)",
      "Email delivery",
      "Cloud storage",
      "Basic status tracking",
    ],
    cta: "Start Free",
  },
  {
    name: "Starter",
    price: "₹200",
    period: "/month",
    highlight: true,
    features: [
      "Up to 1000 invoices/month",
      "Payment links in invoices",
      "Real-time tracking",
      "Automated reminders",
    ],
    cta: "Get Starter",
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    highlight: false,
    features: [
      "Unlimited invoices",
      "All Starter features",
      "Priority support",
      "Future pro tools",
    ],
    cta: "Go Pro",
  },
];

export default function Pricing() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <section
        id="pricing"
        className="w-full py-28 bg-gradient-to-b from-black via-indigo-950 to-black text-white text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-[120px] rounded-full"></div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Choose Your Plan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-16"
        >
          Start free with 5 invoices total upgrade when you’re ready to scale 🚀
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 relative z-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              className={`p-10 rounded-2xl border ${
                plan.highlight
                  ? "bg-indigo-600 border-indigo-400 scale-105 shadow-2xl"
                  : "bg-white/5 border-white/10"
              } hover:scale-105 transition backdrop-blur-md`}
            >
              <h3 className="text-3xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-5xl font-extrabold mb-2">{plan.price}</div>
              <p className="text-gray-400 mb-6">{plan.period}</p>

              <ul className="text-left space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" /> {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowWaitlist(true)}
                className={`w-full px-8 py-3 rounded-full font-semibold block transition ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 Waitlist modal directly used here */}
      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </>
  );
}
