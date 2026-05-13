import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happenings",
  description: "Upcoming events, weekly specials, and what's going on at Good Days Cafe.",
};

export default function HappeningsPage() {
  return (
    <main className="flex-1 px-6 py-16 max-w-6xl mx-auto w-full">
      <h1 className="font-display text-5xl text-olive mb-4">Happenings</h1>
      <p className="font-body text-charcoal/60">Coming soon.</p>
    </main>
  );
}
