"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight text-black"
        >
          DIDO<span className="text-gray-400">DIGITAL</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#layanan"
            className="text-sm text-gray-600 transition hover:text-black"
          >
            Layanan
          </a>

          <a
            href="#solusi"
            className="text-sm text-gray-600 transition hover:text-black"
          >
            Solusi
          </a>

          <a
            href="#portfolio"
            className="text-sm text-gray-600 transition hover:text-black"
          >
            Portofolio
          </a>

          <a
            href="#harga"
            className="text-sm text-gray-600 transition hover:text-black"
          >
            Harga
          </a>

          <a
            href="#tentang"
            className="text-sm text-gray-600 transition hover:text-black"
          >
            Tentang
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#kontak"
          className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 md:inline-flex"
        >
          Konsultasi Gratis
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 md:hidden"
        >
          <span className="text-xl">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-black/5 bg-white px-5 py-5 md:hidden">
          <nav className="flex flex-col">

            <a
              href="#layanan"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700"
            >
              Layanan
            </a>

            <a
              href="#solusi"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700"
            >
              Solusi
            </a>

            <a
              href="#portfolio"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700"
            >
              Portofolio
            </a>

            <a
              href="#harga"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700"
            >
              Harga
            </a>

            <a
              href="#tentang"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700"
            >
              Tentang
            </a>

            <a
              href="#kontak"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white"
            >
              Konsultasi Gratis
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}