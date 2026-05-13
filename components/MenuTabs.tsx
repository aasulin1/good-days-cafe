"use client";

import { useState } from "react";

type Badge = "GF" | "V" | "Veg";
type SizePrice = { "12oz": string; "16oz"?: string; "20oz"?: string };

type MenuItem = {
  name: string;
  description?: string;
  price: string | SizePrice;
  badges?: Badge[];
  note?: string;
};

type SubSection = {
  title?: string;
  subtitle?: string;
  addOns?: string;
  items: MenuItem[];
};

type MenuSection = {
  id: string;
  label: string;
  subsections: SubSection[];
};

const SECTIONS: MenuSection[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    subsections: [
      {
        subtitle: "Served all day",
        items: [
          { name: "French Toast", description: "Maple syrup, butter", price: "$9", badges: ["Veg"], note: "Add berries +$3" },
          { name: "Yogurt Bowl", description: "Honey, coconut, granola, berries", price: "$8", badges: ["Veg"] },
          { name: "Acai Bowl", description: "Granola, almond butter, assorted fruit, honey, coconut", price: "$10", badges: ["Veg"] },
          { name: "Steak & Eggs", description: "Potatoes, arugula salad, toast", price: "$16" },
          { name: "Breakfast Sandwich", description: "Egg, ham, american cheese, spicy bacon mayo, arugula, grilled tomato", price: "$10", note: "Add potatoes +$1, sweet potatoes +$2" },
          { name: "Breakfast Burrito", description: "Egg, jalapeño, peppers, onion, potato, cheese", price: "$11", note: "Add bacon or sausage +$3" },
          { name: "Avocado Toast", description: "Avocado, prosciutto, arugula, calabrian chili, balsamic glaze", price: "$9", note: "Add egg +$2" },
        ],
      },
      {
        title: "Hashes",
        subtitle: "All hashes made with 2 sous vide eggs, signature hash, and toast",
        items: [
          { name: "Eggs Benny", description: "Ham, spinach, hollandaise", price: "$12" },
          { name: "Italian", description: "Italian sausage, tomato, calabrian chili, arugula", price: "$12" },
          { name: "Veggie", description: "Seasonal vegetables, arugula", price: "$12" },
        ],
      },
    ],
  },
  {
    id: "starters",
    label: "Starters",
    subsections: [
      {
        items: [
          { name: "Spinach Artichoke Dip", description: "Creamy parmesan, tortilla chips", price: "$9", badges: ["GF", "Veg"] },
          { name: "Meatballs & Sauce", description: "Housemade meatballs, nonna's red sauce", price: "$10" },
          { name: "Baked Pretzel", description: "Stone ground mustard", price: "$12", badges: ["Veg"] },
          { name: "Tomato Soup", description: "", price: "$6", badges: ["GF", "V"] },
        ],
      },
    ],
  },
  {
    id: "bowls-salads",
    label: "Bowls & Salads",
    subsections: [
      {
        title: "Grain Bowls",
        subtitle: "Served with quinoa",
        addOns: "Chicken $6 | Steak $9 | Shrimp $7 | Egg $5",
        items: [
          { name: "Mediterranean", description: "Tomato, cucumber, bell pepper, red onion, olive, hummus, feta, parsley", price: "$10", badges: ["GF", "Veg"] },
          { name: "Roasted Balsamic", description: "Roasted vegetables, balsamic glaze", price: "$10", badges: ["GF", "V"] },
          { name: "Baja", description: "Sweet potato, tomatoes, pepitas, pickled onion, baja dressing", price: "$10", badges: ["Veg"] },
        ],
      },
      {
        title: "Salads",
        addOns: "Chicken $6 | Steak $9 | Shrimp $7 | Meatballs $7",
        items: [
          { name: "Caesar", description: "Romaine, housemade croutons, pecorino", price: "$9" },
          { name: "Chopped", description: "Romaine, cucumber, celery, tomato, salami, artichoke, mozzarella, balsamic", price: "$10", badges: ["GF"] },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    subsections: [
      {
        subtitle: "Your choice of side — potatoes +$1, sweet potatoes +$2",
        items: [
          { name: "Good Days Burger", description: "Two patties, tomato, cheese, lettuce, pickles, pickled onions, house sauce", price: "$13" },
          { name: "Meatball Sandwich", description: "Housemade meatballs, nonna's red sauce, provolone", price: "$13" },
          { name: "Grilled Cheese", description: "Three types of cheese on grilled toast", price: "$11", badges: ["Veg"], note: "Add tomato soup +$4" },
          { name: "Club Sandwich", description: "Grilled chicken, prosciutto, avocado, arugula, tomato, dijonnaise", price: "$12" },
          { name: "Caprese Panini", description: "Mozzarella, tomato, balsamic, arugula", price: "$10", badges: ["Veg"], note: "Add chicken +$6 | steak +$9" },
          { name: "Roasted Veggie Panini", description: "Roasted veggies, provolone, tomato", price: "$10", badges: ["Veg"], note: "Add chicken +$6 | steak +$9" },
          { name: "Italian Panini", description: "Prosciutto, salami, mortadella, provolone", price: "$13", note: "Add chicken +$6 | steak +$9" },
          { name: "Steak Panini", description: "Steak, calabrian chilis, roasted red peppers, provolone", price: "$17" },
        ],
      },
    ],
  },
  {
    id: "pastas",
    label: "Pastas",
    subsections: [
      {
        subtitle: "All pastas served with rigatoni — GF noodle option available",
        addOns: "Chicken $6 | Steak $9 | Shrimp $7 | Meatballs $7",
        items: [
          { name: "Nonna's Red Sauce", description: "", price: "$12", badges: ["GF", "Veg"] },
          { name: "Bolognese", description: "", price: "$15", badges: ["GF"] },
          { name: "Vodka", description: "", price: "$14", badges: ["GF", "Veg"] },
          { name: "Carbonara", description: "With egg", price: "$14", badges: ["GF"] },
          { name: "Alfredo", description: "", price: "$13", badges: ["GF", "Veg"] },
          { name: "Roasted Vegetable", description: "", price: "$12", badges: ["GF", "Veg"] },
        ],
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    subsections: [
      {
        items: [
          { name: "House Salad", price: "$6" },
          { name: "Arugula Salad", price: "$6" },
          { name: "House Potato", price: "$6" },
          { name: "Sweet Potato", price: "$6" },
        ],
      },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies",
    subsections: [
      {
        subtitle: "All smoothies — 16oz",
        items: [
          { name: "Mixed Berry", description: "Oat milk, mixed berries, honey, lemon", price: "$8" },
          { name: "Espresso Cacao", description: "Oat milk, almond butter, banana, espresso, cacao powder, honey", price: "$10" },
          { name: "Matcha Pineapple", description: "Oat milk, matcha, pineapple, spinach, banana, honey", price: "$9" },
          { name: "Lemon Ginger Greens", description: "Coconut water, spinach, lemon, orange, pineapple, green apple, ginger, honey", price: "$9" },
          { name: "Peach Pie", description: "Oat milk, peach, banana, honey, oats, cinnamon", price: "$9" },
        ],
      },
    ],
  },
  {
    id: "coffee-tea",
    label: "Coffee & Tea",
    subsections: [
      {
        title: "Coffee & Tea",
        subtitle: "Alternative milk +$1 | Canned +$0.50",
        items: [
          { name: "Cappuccino", price: { "12oz": "$5", "16oz": "$6", "20oz": "$7" } },
          { name: "Latte", price: { "12oz": "$5", "16oz": "$6", "20oz": "$7" } },
          { name: "Matcha Latte", price: { "12oz": "$6", "16oz": "$7", "20oz": "$8" } },
          { name: "Chai", price: { "12oz": "$5", "16oz": "$6", "20oz": "$7" } },
          { name: "Americano", price: { "12oz": "$4", "16oz": "$5", "20oz": "$6" } },
          { name: "Espresso", price: "$4" },
          { name: "Assorted Teas", description: "Earl grey, green, lemon ginger", price: { "12oz": "$4", "16oz": "$5" } },
          { name: "Tiramisu Latte", description: "Tiramisu foam, cocoa powder", price: "$7" },
        ],
      },
      {
        title: "Specialty",
        subtitle: "Served iced in a signature can or hot — alternative milk +$1",
        items: [
          { name: "Morning Mojito", description: "Cold brew, brown sugar, mint, half & half", price: "$7" },
          { name: "Honey Lavender Latte", description: "Honey, lavender", price: "$7" },
          { name: "Caramel Banana Latte", description: "Caramel, banana, cinnamon", price: "$7" },
          { name: "Tiramisu Latte", description: "Tiramisu foam, cocoa powder", price: "$7" },
        ],
      },
      {
        title: "Matchas",
        subtitle: "Served iced in a signature can or hot — alternative milk +$1",
        items: [
          { name: "Banana Bread Matcha Latte", description: "Banana cold foam, banana", price: "$7" },
          { name: "Citrus Matcha Refresher", description: "Strawberry, lemon, soda", price: "$7" },
          { name: "Honey Lavender Matcha Latte", description: "Honey, lavender cold foam", price: "$7" },
          { name: "Strawberry Matcha Latte", description: "Matcha, strawberry cream", price: "$7" },
          { name: "Mango Matcha Latte", description: "Mango puree", price: "$7" },
        ],
      },
    ],
  },
  {
    id: "bevies",
    label: "Bevies",
    subsections: [
      {
        items: [
          { name: "Soju", description: "375ml bottle — flavors: apple, mango", price: "$25" },
          { name: "Sparkling Wine", description: "By the glass — regular or rosé", price: "$10" },
          { name: "White Wine", description: "By the glass — Chardonnay, Sauvignon Blanc, Pinot Grigio", price: "$11" },
          { name: "Red Wine", description: "By the glass — Pinot Noir, Cabernet Sauvignon", price: "$11" },
          { name: "Mimosa", description: "Orange juice", price: "$7" },
          { name: "Espresso Martini", description: "Saero, espresso, vanilla", price: "$9" },
          { name: "Matcha Martini", description: "Saero, matcha, vanilla", price: "$9" },
          { name: "Dirty Shirley", description: "Apple mango soju, 7up, cherry", price: "$9" },
        ],
      },
      {
        title: "Bottomless",
        items: [
          { name: "Bottomless Mimosas", description: "Available 9am–3pm", price: "$25" },
        ],
      },
    ],
  },
];

const BADGE_STYLES: Record<Badge, string> = {
  GF: "bg-charcoal/10 text-charcoal",
  V: "bg-olive/20 text-olive",
  Veg: "bg-olive/10 text-olive",
};

function isSizePrice(price: string | SizePrice): price is SizePrice {
  return typeof price === "object";
}

function MenuItemRow({ item }: { item: MenuItem }) {
  const sized = isSizePrice(item.price);
  return (
    <div className="py-5 border-b border-charcoal/10 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-heading text-base text-charcoal">{item.name}</span>
            {item.badges?.map((b) => (
              <span key={b} className={`font-heading text-[10px] px-1.5 py-0.5 rounded ${BADGE_STYLES[b]}`}>
                {b}
              </span>
            ))}
          </div>
          {item.description && (
            <p className="font-body text-sm text-charcoal">{item.description}</p>
          )}
          {item.note && (
            <p className="font-body text-xs text-charcoal italic">{item.note}</p>
          )}
        </div>
        {sized ? (
          <div className="flex gap-3 shrink-0 text-right">
            {Object.entries(item.price as SizePrice).map(([size, price]) => (
              <div key={size} className="flex flex-col items-center">
                <span className="font-heading text-[10px] text-charcoal">{size}</span>
                <span className="font-heading text-sm text-charcoal">{price}</span>
              </div>
            ))}
          </div>
        ) : (
          <span className="font-heading text-base text-olive shrink-0">{item.price as string}</span>
        )}
      </div>
    </div>
  );
}

export default function MenuTabs() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const section = SECTIONS.find((s) => s.id === active)!;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Blocky tab bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`font-heading text-xs px-4 py-2.5 rounded transition-colors ${
              active === s.id
                ? "bg-olive text-cream"
                : "bg-charcoal/10 text-charcoal hover:bg-charcoal/20"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Section content */}
      {section.subsections.map((sub, i) => (
        <div key={i} className={i > 0 ? "mt-12" : ""}>
          {sub.title && (
            <h3 className="font-display text-3xl text-olive mb-1">{sub.title}</h3>
          )}
          {sub.subtitle && (
            <p className="font-body text-sm text-charcoal mb-4">{sub.subtitle}</p>
          )}
          <div>
            {sub.items.map((item) => (
              <MenuItemRow key={item.name} item={item} />
            ))}
          </div>
          {sub.addOns && (
            <div className="mt-6 pt-4 border-t border-charcoal/10">
              <span className="font-heading text-xs text-olive mr-2">Add Ons</span>
              <span className="font-body text-sm text-charcoal">{sub.addOns}</span>
            </div>
          )}
        </div>
      ))}

      {/* Dietary key */}
      <div className="mt-16 pt-6 border-t border-charcoal/10 flex flex-wrap items-center gap-4">
        <span className="font-heading text-xs text-olive">Dietary</span>
        {(Object.keys(BADGE_STYLES) as Badge[]).map((b) => (
          <span key={b} className={`font-heading text-xs px-2 py-1 rounded ${BADGE_STYLES[b]}`}>
            {b} — {b === "GF" ? "Gluten Free" : b === "V" ? "Vegan" : "Vegetarian"}
          </span>
        ))}
        <p className="font-body text-xs text-charcoal w-full mt-1">
          Have dietary needs or allergies? Let our team know — we got you!
        </p>
      </div>
    </div>
  );
}
