"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 bg-black/60 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Veyra Logo" width={40} height={40} />
          <span className="text-2xl font-bold bg-gradient-to-r text-amber-50  bg-clip-text">
            Veyra
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link href="#features" className="hover:text-indigo-400 transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-indigo-400 transition">
            Pricing
          </Link>
          <Link href="#how" className="hover:text-indigo-400 transition">
            How it Works
          </Link>
          <Link
            href="#"
            className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
