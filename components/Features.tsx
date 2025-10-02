"use client";
import { motion } from "framer-motion";

const features = [
  {
    emoji: "📬",
    title: "Smart Invoice Delivery",
    desc: "Send invoices instantly with built-in tracking and delivery insights so you always know when clients receive them.",
  },
  {
    emoji: "📊",
    title: "Real-Time Tracking",
    desc: "Stay updated on invoice status at every step from sent to opened to paid without lifting a finger.",
  },
  {
    emoji: "💳",
    title: "Seamless Payments",
    desc: "Include payment links directly in your invoices and get paid faster, without messy back-and-forth.",
  },
  {
    emoji: "🔔",
    title: "Automated Reminders",
    desc: "Follow-ups for pending payments and overdue invoices are handled automatically so you don’t have to chase clients.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-28 bg-gradient-to-b from-black via-indigo-950 to-black text-center text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-[120px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-4"
      >
        Why to join <span className="text-indigo-400">Veyra</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg text-gray-300 max-w-2xl mx-auto mb-16"
      >
        Stop chasing clients. Start tracking invoices. Join the public beta
        today and experience stress-free invoicing.
      </motion.p>

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
