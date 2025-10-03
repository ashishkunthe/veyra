"use client";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-black text-center text-gray-400 border-t border-white/10">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-indigo-400">Veyra</span> - Made with ❤️ for
        startups.
      </p>
    </footer>
  );
}
