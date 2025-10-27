"use client";
import { motion } from "framer-motion";
import { Mail, LineChart, CreditCard, Bell } from "lucide-react";

const features = [
  {
    icon: <Mail className="w-6 h-6 text-amber-600" />,
    title: "Smart Invoice Delivery",
    desc: "Send invoices directly to your clients’ inboxes with our smart delivery system, ensuring prompt receipt and reducing delays.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-amber-600" />,
    title: "Real-Time Tracking",
    desc: "Monitor the status of your invoices in real-time, from sending to payment, so you always know where your finances stand.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-amber-600" />,
    title: "Seamless Payments",
    desc: "Accept payments effortlessly through various methods, including credit cards, bank transfers, and digital wallets, for quick and convenient transactions.",
  },
  {
    icon: <Bell className="w-6 h-6 text-amber-600" />,
    title: "Automated Reminders",
    desc: "Set up automated reminders for overdue invoices, ensuring timely follow-ups without manual effort, and maintaining healthy client relationships.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-28 bg-[#f7f3e9] text-gray-900 relative overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center relative z-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Why to join <span className="text-amber-700">Veyra</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-16"
        >
          Veyra is the ultimate solution for streamlining your invoicing
          process. With our intuitive platform, you can effortlessly create,
          send, and manage invoices, ensuring timely payments and improved cash
          flow.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6 relative z-10">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            className="flex items-start gap-4 p-8 bg-white/90 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="p-3 bg-amber-100 rounded-lg">{f.icon}</div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {f.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
