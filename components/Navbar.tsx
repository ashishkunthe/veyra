"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#18130c] backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white font-medium tracking-wide">Veyra</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="#features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="#how" className="hover:text-white transition">
            How it Works
          </Link>

          {/* CTA Button */}
          <Link
            href="#"
            className="px-5 py-2 text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
