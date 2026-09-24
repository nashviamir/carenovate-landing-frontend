'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldCheck, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Comparison', href: '#comparison' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Features', href: '#features' },
    { label: 'Portal', href: '#the-platform' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-sm border-b border-slate-200' : 'border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl lg:text-2xl tracking-tight text-slate-900 leading-none">
                CareHub<span className="text-primary-500">™</span>
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium mt-0.5">
                by CareNovate
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-primary-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center">
            <Link
              href="#book-demo-section"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Book a Demo</span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-700 hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <Link
              href="#book-demo-section"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-lg text-center font-bold text-white bg-primary-600 hover:bg-primary-700 flex items-center justify-center space-x-2"
            >
              <span>Book Facility Demo</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}