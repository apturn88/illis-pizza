'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Visit' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-crust-50/90 backdrop-blur border-b border-crust-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="Illi's Pizza home">
          <Image
            src="/images/logo-circle.png"
            alt=""
            width={56}
            height={56}
            className="h-12 w-12 sm:h-14 sm:w-14"
            priority
          />
          <span className="font-display text-xl sm:text-2xl text-brick-700 tracking-tight">
            Illi&rsquo;s Pizza
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-charcoal-700 hover:text-brick-700 transition"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact#order"
            className="ml-2 inline-flex items-center rounded-full bg-brick-700 hover:bg-brick-800 text-crust-50 px-5 py-2.5 text-xs tracking-widest uppercase transition"
          >
            Order
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-charcoal-800 hover:bg-crust-100"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-crust-200 bg-crust-50">
          <div className="mx-auto max-w-6xl px-5 py-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-widest uppercase text-charcoal-700 hover:text-brick-700"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact#order"
              onClick={() => setOpen(false)}
              className="mt-2 mb-3 inline-flex items-center justify-center rounded-full bg-brick-700 text-crust-50 px-5 py-3 text-xs tracking-widest uppercase"
            >
              Order
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
