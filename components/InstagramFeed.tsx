export default function InstagramFeed() {
  return (
    <section className="py-10 px-6 bg-cream border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto">
        <p className="font-heading text-xs text-charcoal/40 mb-4">Latest from Instagram</p>
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-square bg-charcoal/5 rounded" />
          ))}
        </div>
      </div>
    </section>
  );
}
