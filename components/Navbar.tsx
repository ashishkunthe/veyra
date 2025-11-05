"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#F8F5F0] backdrop-blur-md border-b border-[#E2D8CB] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#A67C52] font-semibold text-lg tracking-wide hover:opacity-80 transition"
        >
          Veyra
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#7A6E64]">
          <Link href="#features" className="hover:text-[#A67C52] transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-[#A67C52] transition">
            Pricing
          </Link>
          <Link href="#how" className="hover:text-[#A67C52] transition">
            How it Works
          </Link>

          {/* CTA */}
          <Link
            href="https://veyra-main.vercel.app/"
            className="px-5 py-2 text-sm bg-[#c77120] text-white rounded-full hover:bg-[#8C6239] transition shadow-sm"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
