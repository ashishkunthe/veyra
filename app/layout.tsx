import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://veyra-six.vercel.app"),
  title: "Veyra – Smart SaaS Invoicing",
  description:
    "Create, send, and automate invoices with ease – Veyra makes invoicing effortless.",
  icons: {
    icon: "/logo.svg", // This is your favicon
    apple: "/logo.svg", // optional for Apple devices
  },
  openGraph: {
    title: "Veyra – Smart SaaS Invoicing",
    description:
      "Create, send, and automate invoices with ease – Veyra makes invoicing effortless.",
    type: "website",
    url: "https://veyra-six.vercel.app/",
    siteName: "Veyra",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Veyra – Smart SaaS Invoicing Preview",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veyra – Smart SaaS Invoicing",
    description:
      "Create, send, and automate invoices with ease – Veyra makes invoicing effortless.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://veyra-six.vercel.app/",
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
