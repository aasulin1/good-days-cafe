import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our full menu — breakfast, hashes, grain bowls, salads, sandwiches, coffee, and more.",
};

export default function MenuPage() {
  return (
    <main className="flex-1 px-6 py-16 max-w-6xl mx-auto w-full">
      <h1 className="font-display text-5xl text-olive mb-4">Menu</h1>
      <p className="font-body text-charcoal/60">Coming soon.</p>
    </main>
  );
}
