"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const TOAST_ORDER_URL =
  "https://order.toasttab.com/online/good-days-cafe-941-n-virginia-street";
// TODO: replace with actual Toast gift card and rewards URLs
const TOAST_GIFT_CARDS_URL = "https://www.toasttab.com/good-days-cafe-941-n-virginia-street/giftcards";
const TOAST_REWARDS_URL = "https://www.toasttab.com/good-days-cafe-941-n-virginia-street/rewards";

const NAV_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Happenings", href: "/happenings" },
  { label: "Private Events", href: "/private-events" },
  { label: "Order Catering", href: "/order-catering" },
  { label: "Online Ordering", href: TOAST_ORDER_URL, external: true },
  { label: "About Us", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-cream border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="font-display text-xl text-olive shrink-0">
          Good Days Cafe
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-sm text-charcoal hover:text-olive transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className={`font-heading text-sm transition-colors hover:text-olive ${
                  pathname === href ? "text-olive" : "text-charcoal"
                }`}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop — Gift Cards + Rewards */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={TOAST_GIFT_CARDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm px-4 py-1.5 rounded-full border border-olive text-olive hover:bg-olive hover:text-cream transition-colors"
          >
            Gift Cards
          </a>
          <a
            href={TOAST_REWARDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm px-4 py-1.5 rounded-full bg-olive text-cream hover:bg-charcoal transition-colors"
          >
            Rewards
          </a>
        </div>

        {/* Mobile — hamburger */}
        <button
          className="lg:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-charcoal/10 bg-cream px-6 py-4 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-sm text-charcoal hover:text-olive transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className={`font-heading text-sm transition-colors hover:text-olive ${
                  pathname === href ? "text-olive" : "text-charcoal"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            )
          )}
          <div className="flex gap-3 pt-2 border-t border-charcoal/10">
            <a
              href={TOAST_GIFT_CARDS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-sm px-4 py-1.5 rounded-full border border-olive text-olive hover:bg-olive hover:text-cream transition-colors"
            >
              Gift Cards
            </a>
            <a
              href={TOAST_REWARDS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-sm px-4 py-1.5 rounded-full bg-olive text-cream hover:bg-charcoal transition-colors"
            >
              Rewards
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
