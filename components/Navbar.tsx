"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#f7f2e8] backdrop-blur-md border-b border-amber-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-amber-600 font-semibold text-lg tracking-wide"
        >
          Veyra
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-amber-700">
          <Link href="#features" className="hover:text-amber-900 transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-amber-900 transition">
            Pricing
          </Link>
          <Link href="#how" className="hover:text-amber-900 transition">
            How it Works
          </Link>

          {/* CTA */}
          <Link
            href="#"
            className="px-5 py-2 text-sm bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
