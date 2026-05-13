export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-display text-5xl text-olive">Good Days Cafe</h1>
      <p className="font-heading text-lg text-charcoal">Reno, NV — 941 N Virginia St</p>
      <p className="max-w-md text-base text-charcoal/70">
        Site coming soon. In the meantime, find us on{" "}
        <a
          href="https://www.instagram.com/gooddayscafe/"
          className="underline underline-offset-2 hover:text-olive transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        .
      </p>
    </main>
  );
}
