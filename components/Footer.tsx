"use client";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-[#F8F5F0] text-center text-[#7A6E64] border-t border-[#E2D8CB]">
      <p className="text-sm flex items-center justify-center gap-1">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#A67C52] font-semibold">Veyra</span> • Crafted
        with
        <Heart className="w-4 h-4 text-[#A67C52] inline-block" />
        for startups
      </p>
    </footer>
  );
}
