"use client";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-[#F8F5F0] text-center text-[#7A6E64] border-t border-[#E2D8CB]">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#A67C52] font-semibold">Veyra</span> • Crafted
        with ❤️ for startups
      </p>
    </footer>
  );
}
