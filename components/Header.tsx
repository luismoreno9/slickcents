"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CATEGORIES, categorySlug } from "@/lib/articles";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-cream-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 relative flex-shrink-0">
              <Image
                src="/images/logo bueno.png"
                alt="SlickCents"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display font-bold text-lg text-bark-900 tracking-tight notranslate hidden sm:inline" translate="no">
              Slick<span className="text-forest-600">Cents</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="text-sm font-medium text-bark-600 hover:text-forest-600 px-3 py-2 rounded-lg hover:bg-forest-50 transition-all">
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-bark-600 hover:text-forest-600 px-3 py-2 rounded-lg hover:bg-forest-50 transition-all flex items-center gap-1">
                Categories
                <svg className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-card-hover border border-cream-200 py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    href={`/category/${categorySlug(cat)}`}
                    className="block px-4 py-2 text-sm text-bark-700 hover:text-forest-600 hover:bg-forest-50 transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" className="text-sm font-medium text-bark-600 hover:text-forest-600 px-3 py-2 rounded-lg hover:bg-forest-50 transition-all">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-bark-600 hover:text-forest-600 px-3 py-2 rounded-lg hover:bg-forest-50 transition-all">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-xs px-4 py-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Newsletter
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-bark-600 hover:bg-cream-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-cream-200 bg-white px-4 py-4 space-y-1 animate-fade-in">
          <Link href="/" className="block text-sm font-medium text-bark-700 py-2.5 px-3 rounded-lg hover:bg-forest-50 hover:text-forest-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <div className="px-3 py-1.5">
            <p className="text-xs font-semibold text-bark-400 uppercase tracking-wider mb-2">Categories</p>
            {CATEGORIES.map((cat) => (
              <Link key={cat} href={`/category/${categorySlug(cat)}`} className="block text-sm text-bark-600 py-1.5 hover:text-forest-600 transition-colors" onClick={() => setMenuOpen(false)}>
                {cat}
              </Link>
            ))}
          </div>
          <Link href="/about" className="block text-sm font-medium text-bark-700 py-2.5 px-3 rounded-lg hover:bg-forest-50 hover:text-forest-600 transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block text-sm font-medium text-bark-700 py-2.5 px-3 rounded-lg hover:bg-forest-50 hover:text-forest-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
