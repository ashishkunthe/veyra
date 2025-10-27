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
    price: "₹299",
    period: "/month",
    highlight: true,
    features: [
      "Up to 1,000 invoices/month",
      "Payment links in invoices",
      "Real-time tracking",
      "Automated reminders",
    ],
    cta: "Get Starter",
  },
  {
    name: "Pro",
    price: "₹749",
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
        className="w-full py-20 md:py-28 bg-[#fff9f1] text-gray-900 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-200 opacity-25 blur-[140px] rounded-full"></div>

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
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-16"
        >
          Start free with 5 invoices and upgrade when you are ready to scale 🚀
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              className={`relative p-10 rounded-2xl border transition shadow-md hover:shadow-xl hover:scale-105 md:hover:scale-110
              ${
                plan.highlight
                  ? "bg-amber-500 text-white border-amber-600 shadow-xl"
                  : "bg-white border-gray-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-xs rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-3xl font-semibold mb-4">{plan.name}</h3>

              <div className="flex items-end justify-center gap-1 mb-6">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span
                  className={`text-lg ${
                    plan.highlight ? "text-white/90" : "text-gray-700"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="text-left space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      plan.highlight ? "text-white" : "text-gray-700"
                    }`}
                  >
                    <Check
                      className={`w-5 h-5 ${
                        plan.highlight ? "text-white" : "text-amber-500"
                      }`}
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowWaitlist(true)}
                className={`w-full px-8 py-3 rounded-full font-semibold transition
                ${
                  plan.highlight
                    ? "bg-white text-amber-600 hover:bg-gray-100"
                    : "bg-amber-500 text-white hover:bg-amber-600"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </>
  );
}
