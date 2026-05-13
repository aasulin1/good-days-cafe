import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit",
  description: "Find us at 941 N Virginia St, Reno, NV. Hours, directions, and contact info.",
};

export default function VisitPage() {
  return (
    <main className="flex-1 px-6 py-16 max-w-6xl mx-auto w-full">
      <h1 className="font-display text-5xl text-olive mb-4">Visit</h1>
      <p className="font-body text-charcoal/60">Coming soon.</p>
    </main>
  );
}
