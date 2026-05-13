import type { Metadata } from "next";
import MenuTabs from "@/components/MenuTabs";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our full menu — breakfast, hashes, grain bowls, salads, sandwiches, coffee, matchas, and more.",
};

export default function MenuPage() {
  return (
    <main className="flex-1">
      <MenuTabs />
    </main>
  );
}
