import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Catering",
  description: "Order catering from Good Days Cafe for your next event in Reno, NV.",
};

export default function OrderCateringPage() {
  return (
    <main className="flex-1 px-6 py-16 max-w-6xl mx-auto w-full">
      <h1 className="font-display text-5xl text-olive mb-4">Order Catering</h1>
      <p className="font-body text-charcoal/60">Coming soon.</p>
    </main>
  );
}
