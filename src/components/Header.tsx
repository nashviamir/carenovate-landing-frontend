'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';

import type { Header as HeaderData } from '@/payload-types';
import { asMedia } from '@/lib/media';

export default function Header({ data }: { data: HeaderData }) {
  const logo = asMedia(data.logo);
  const NAV_LINKS = data.navLinks ?? [];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white border-b border-brandGrey-50 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 z-10 group"
            aria-label="CareNovate Home"
          >
            <div className="relative h-10 lg:h-12 w-[140px] lg:w-[160px]">
              {logo?.url && (
                <Image
                  src={logo.url}
                  alt={logo.alt}
                  fill
                  priority
                  sizes="160px"
                  className="object-contain object-left group-hover:opacity-90 transition-opacity"
                />
              )}
            </div>
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-m-16 transition-colors ${
                    active
                      ? 'text-primary-500'
                      : 'text-brandGrey-500 hover:text-primary-500'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 flex-shrink-0 z-10">
            <Link
              href={data.cta.href}
              className="hidden sm:inline-flex btn-primary"
            >
              <Sparkles className="w-4 h-4" />
              <span>{data.cta.label}</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-btn text-brandGrey-500 hover:bg-brandGrey-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-brandGrey-50 px-4 py-4 space-y-1 shadow-card">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-btn text-m-16 transition-colors ${
                  active
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-brandGrey-500 hover:bg-brandGrey-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3 mt-2 border-t border-brandGrey-50">
            <Link
              href={data.cta.href}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-primary"
            >
              <Sparkles className="w-4 h-4" />
              <span>{data.cta.mobileLabel}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}