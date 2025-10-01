import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veyra – Smart SaaS Invoicing",
  description:
    "Create, send, and automate invoices with ease – Veyra makes invoicing effortless.",
  icons: {
    icon: "/logo.svg", // This is your favicon
    apple: "/logo.svg", // optional for Apple devices
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
