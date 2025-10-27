"use client";
import { motion } from "framer-motion";
import { Mail, LineChart, CreditCard, Bell } from "lucide-react";

const features = [
  {
    icon: <Mail className="w-6 h-6 text-amber-600" />,
    title: "Smart Invoice Delivery",
    desc: "Send invoices directly to your clients’ inbox for faster payments.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-amber-600" />,
    title: "Real-Time Tracking",
    desc: "Track invoicing progress instantly from sent to paid.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-amber-600" />,
    title: "Seamless Payments",
    desc: "Accept payments easily via cards, bank transfer or UPI.",
  },
  {
    icon: <Bell className="w-6 h-6 text-amber-600" />,
    title: "Automated Reminders",
    desc: "Never chase payments manually again.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-24 bg-[#fdfaf5] text-gray-900 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight"
        >
          Why Teams Choose <span className="text-amber-700">Veyra</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg mb-14"
        >
          Boost productivity and get paid faster with intelligent invoicing
          tools built for SaaS and freelancers.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-6">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="flex items-start gap-4 p-6 sm:p-8 bg-white border border-amber-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
          >
            <div className="p-3 bg-amber-100/70 rounded-lg shrink-0">
              {f.icon}
            </div>

            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {f.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
