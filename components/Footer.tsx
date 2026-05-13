import Link from "next/link";

const QUICK_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Happenings", href: "/happenings" },
  { label: "Private Events", href: "/private-events" },
  { label: "Order Catering", href: "/order-catering" },
  { label: "About Us", href: "/about" },
  { label: "Visit", href: "/visit" },
];

const HOURS = [
  { day: "Monday – Friday", hours: "7am – 3pm" },
  { day: "Saturday – Sunday", hours: "8am – 3pm" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="font-display text-2xl text-cream">
            Good Days Cafe
          </Link>
          <p className="font-body text-sm text-cream/60 leading-relaxed">
            A feel-good neighborhood cafe in the heart of Reno.
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/gooddayscafe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream/60 hover:text-cream transition-colors"
            >
              {/* Instagram icon */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@gooddayscafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-cream/60 hover:text-cream transition-colors"
            >
              {/* TikTok icon */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hours & Address */}
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm uppercase tracking-wider text-cream/40">Visit Us</h3>
          <address className="font-body text-sm text-cream/70 not-italic leading-relaxed">
            941 N Virginia St<br />
            Reno, NV 89503
          </address>
          <ul className="font-body text-sm text-cream/70 space-y-1">
            {HOURS.map(({ day, hours }) => (
              <li key={day}>
                <span className="text-cream/40">{day}</span><br />
                {hours}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm uppercase tracking-wider text-cream/40">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Email / SMS signup */}
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm uppercase tracking-wider text-cream/40">Stay in the Loop</h3>
          <p className="font-body text-sm text-cream/60">
            Sign up for updates, events, and good news.
          </p>
          {/* Klaviyo embed goes here */}
          <div className="klaviyo-form-placeholder h-20 rounded border border-cream/10 flex items-center justify-center">
            <span className="font-body text-xs text-cream/30">Klaviyo signup — coming soon</span>
          </div>
        </div>
      </div>

      {/* Live IG feed grid placeholder */}
      <div className="border-t border-cream/10 py-6 px-6 max-w-7xl mx-auto">
        <p className="font-heading text-xs uppercase tracking-wider text-cream/30 mb-4">Latest from Instagram</p>
        <div className="grid grid-cols-6 gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-cream/5 rounded" />
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/10 px-6 py-4 max-w-7xl mx-auto">
        <p className="font-body text-xs text-cream/30">
          © {new Date().getFullYear()} Good Days Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
