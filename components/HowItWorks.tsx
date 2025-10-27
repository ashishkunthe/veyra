"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Send, Repeat } from "lucide-react";
import WaitlistModal from "@/components/WaitList";

const steps = [
  {
    icon: <FileText size={40} className="text-amber-600" />,
    title: "1. Create Your Invoice",
    desc: "Easily generate professional invoices with our intuitive templates. Customize with your logo, and add line items in seconds.",
  },
  {
    icon: <Send size={40} className="text-amber-600" />,
    title: "2. Send It Instantly",
    desc: "Deliver your invoices directly to your clients’ inboxes with a single click. Track when they’re opened and viewed.",
  },
  {
    icon: <Repeat size={40} className="text-amber-600" />,
    title: "3. Automate & Get Paid",
    desc: "Set up recurring invoices and automated payment reminders. Accept online payments to get your money faster.",
  },
];

export default function HowItWorks() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <section
        id="how"
        className="w-full py-28 bg-[#fff9f1] text-gray-900 text-center relative overflow-hidden"
      >
        {/* Soft Ambient Glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-200 opacity-30 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-300 opacity-20 blur-[120px] rounded-full"></div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          How <span className="text-amber-700">Veyra</span> Works
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-16"
        >
          Veyra simplifies invoicing with a streamlined process. Create, send,
          and automate payments effortlessly, ensuring you get paid on time,
          every time.
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl p-10 shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16"
        >
          <button
            onClick={() => setShowWaitlist(true)}
            className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition shadow-lg"
          >
            Start Free Today
          </button>
        </motion.div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </>
  );
}
