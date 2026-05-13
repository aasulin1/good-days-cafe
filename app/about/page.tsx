import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Good Days Cafe — our story, our team, and our community in Reno, NV.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 px-6 py-16 max-w-6xl mx-auto w-full">
      <h1 className="font-display text-5xl text-olive mb-4">About Us</h1>
      <p className="font-body text-charcoal/60">Coming soon.</p>
    </main>
  );
}
