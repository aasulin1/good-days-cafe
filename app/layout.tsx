import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import "./globals.css";

const bootlegSans = localFont({
  src: "./fonts/BootlegSans.otf",
  variable: "--font-bootleg-sans",
  display: "swap",
});

const seriousSansBold = localFont({
  src: "./fonts/SeriousSans-Bold.otf",
  variable: "--font-serious-sans-bold",
  display: "swap",
});

const seriousSans = localFont({
  src: "./fonts/SeriousSans-Regular.otf",
  variable: "--font-serious-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Good Days Cafe | Reno, NV",
    template: "%s | Good Days Cafe",
  },
  description:
    "A feel-good neighborhood cafe in Reno, NV. Breakfast, lunch, coffee, and good vibes at 941 N Virginia St.",
  metadataBase: new URL("https://gooddayscafereno.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bootlegSans.variable} ${seriousSansBold.variable} ${seriousSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-body antialiased">
        <Nav />
        {children}
        <InstagramFeed />
        <Footer />
      </body>
    </html>
  );
}
