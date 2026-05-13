import Link from "next/link";

const TOAST_ORDER_URL =
  "https://order.toasttab.com/online/good-days-cafe-941-n-virginia-street";

const MENU_FEATURES = [
  {
    name: "The Hash",
    description:
      "Crispy potatoes, caramelized onions, roasted peppers, and two eggs your way. A Good Days staple.",
    tag: "Breakfast",
  },
  {
    name: "Harvest Grain Bowl",
    description:
      "Farro, roasted seasonal vegetables, pickled onion, soft-boiled egg, and house tahini dressing.",
    tag: "Grain Bowls",
  },
  {
    name: "Dirty Matcha Latte",
    description:
      "Ceremonial grade matcha, a shot of espresso, and your choice of milk. Served hot or iced.",
    tag: "Matchas",
  },
];

const HAPPENINGS_PREVIEW = [
  {
    date: "SAT, JUN 7",
    title: "Live Music on the Patio",
    type: "One-off",
    description: "Join us for an afternoon of local live music and bottomless mimosas.",
  },
  {
    date: "Every Sunday",
    title: "Bottomless Brunch",
    type: "Weekly",
    description: "Bottomless mimosas + bloody marys from open until 2pm. No reservation needed.",
  },
  {
    date: "FRI, JUN 20",
    title: "Summer Solstice Pop-Up",
    type: "One-off",
    description: "Special seasonal menu, local vendors, and good vibes to celebrate the longest day.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">

      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 bg-olive/10 overflow-hidden">
        {/* Placeholder image area */}
        <div className="absolute inset-0 border-2 border-dashed border-olive/20 flex items-end justify-start p-4 pointer-events-none">
          <span className="font-heading text-xs text-olive/30 uppercase tracking-widest">
            Hero image — replace with full-bleed photo
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-olive leading-none">
            Every Day is<br />a Good Day
          </h1>
          <p className="font-body text-lg text-charcoal max-w-md">
            A feel-good neighborhood cafe in the heart of Reno.
            Breakfast, lunch, coffee, and good vibes at 941 N Virginia St.
          </p>
          <a
            href={TOAST_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm px-8 py-3 rounded-full bg-olive text-cream hover:bg-charcoal transition-colors"
          >
            Order Online
          </a>
        </div>
      </section>

      {/* ── About snippet ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Placeholder image */}
          <div className="aspect-[4/3] bg-olive/10 rounded-xl border-2 border-dashed border-olive/20 flex items-end justify-start p-4">
            <span className="font-heading text-xs text-olive/30 uppercase tracking-widest">
              Cafe photo — replace
            </span>
          </div>
          {/* Copy */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-4xl lg:text-5xl text-olive">
              Good food, good people, good days.
            </h2>
            <p className="font-body text-base text-charcoal leading-relaxed">
              We opened Good Days Cafe because we believe a neighborhood spot should feel
              like home — a place where the coffee is always fresh, the food is made with
              care, and you leave feeling better than when you walked in.
            </p>
            <p className="font-body text-base text-charcoal leading-relaxed">
              Come as you are. Stay as long as you like. We&apos;ll keep the good days going.
            </p>
            <Link
              href="/about"
              className="font-heading text-sm text-olive hover:text-charcoal transition-colors underline underline-offset-4 self-start"
            >
              Our story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Customer Favorites ── */}
      <section className="py-20 px-6 bg-olive">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 gap-4">
            <h2 className="font-display text-4xl lg:text-5xl text-cream">Customer Favorites</h2>
            <Link
              href="/menu"
              className="font-heading text-sm text-cream/60 hover:text-cream transition-colors underline underline-offset-4 shrink-0"
            >
              Full menu →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {MENU_FEATURES.map(({ name, description, tag }) => (
              <div
                key={name}
                className="flex flex-col gap-4 bg-cream/5 rounded-xl p-6 hover:bg-cream/10 transition-colors"
              >
                {/* Placeholder image */}
                <div className="aspect-[4/3] bg-cream/5 rounded-lg border border-dashed border-cream/10 flex items-end justify-start p-3">
                  <span className="font-heading text-xs text-cream/20 uppercase tracking-widest">
                    Food photo
                  </span>
                </div>
                <span className="font-heading text-xs uppercase tracking-widest text-cream/60">
                  {tag}
                </span>
                <h3 className="font-heading text-xl text-cream">{name}</h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Happenings preview ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 gap-4">
            <h2 className="font-display text-4xl lg:text-5xl text-olive">What&apos;s happening</h2>
            <Link
              href="/happenings"
              className="font-heading text-sm text-olive/60 hover:text-olive transition-colors underline underline-offset-4 shrink-0"
            >
              All events →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {HAPPENINGS_PREVIEW.map(({ date, title, type, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 border border-charcoal/10 rounded-xl p-6 hover:border-olive/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-heading text-xs uppercase tracking-widest text-olive">
                    {date}
                  </span>
                  <span className="font-heading text-xs px-2 py-0.5 rounded-full bg-olive/10 text-olive/70">
                    {type}
                  </span>
                </div>
                <h3 className="font-heading text-lg text-charcoal">{title}</h3>
                <p className="font-body text-sm text-charcoal leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
