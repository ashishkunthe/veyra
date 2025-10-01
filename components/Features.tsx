"use client";
import { motion } from "framer-motion";

const features = [
  {
    emoji: "⚡",
    title: "One-Click Invoices",
    desc: "Generate and share invoices instantly — no templates needed.",
  },
  {
    emoji: "☁️",
    title: "Cloud Storage",
    desc: "Access all your invoices anywhere, anytime — securely in the cloud.",
  },
  {
    emoji: "📬",
    title: "Smart Email Delivery",
    desc: "Send invoices with tracking and delivery status built-in.",
  },
  {
    emoji: "🔁",
    title: "Recurring Billing",
    desc: "Automate repetitive invoicing and focus on growing your business.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-28 bg-gradient-to-b from-black via-indigo-950 to-black text-center text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-[120px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-16"
      >
        Why Teams ❤️ <span className="text-indigo-400">Veyra</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 relative z-10">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:scale-105 transition transform backdrop-blur-md"
          >
            <div className="text-5xl mb-4">{f.emoji}</div>
            <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
