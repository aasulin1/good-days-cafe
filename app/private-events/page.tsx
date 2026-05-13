import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Events",
  description: "Host your next private event or buyout at Good Days Cafe in Reno, NV.",
};

export default function PrivateEventsPage() {
  return (
    <main className="flex-1 px-6 py-16 max-w-6xl mx-auto w-full">
      <h1 className="font-display text-5xl text-olive mb-4">Private Events</h1>
      <p className="font-body text-charcoal/60">Coming soon.</p>
    </main>
  );
}
