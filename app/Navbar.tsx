"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur z-50 px-6 py-4 flex justify-between items-center">
      
      {/* LOGO */}
      <h1 className="text-xl font-bold text-yellow-500">
        Aydee Orfebre
      </h1>

      {/* MENU */}
      <div className="flex gap-6 text-sm text-white">
        <Link href="/" className="hover:text-yellow-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-yellow-400 transition">
          About us
        </Link>
        <Link href="/catalogo" className="hover:text-yellow-400 transition">
          Products
        </Link>
        <Link href="/contact" className="hover:text-yellow-400 transition">
          Contacts
        </Link>
      </div>
    </nav>
  );
}