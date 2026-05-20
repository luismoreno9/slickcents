export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  body: string;
}

export const CATEGORIES = [
  "Budgeting",
  "Investing",
  "Side Hustles",
  "Saving Money",
  "FIRE",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Budgeting: { bg: "bg-forest-100", text: "text-forest-700", border: "border-forest-200" },
  Investing: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200" },
  "Side Hustles": { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
  "Saving Money": { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200" },
  FIRE: { bg: "bg-red-100", text: "text-red-700", border: "border-red-200" },
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Budgeting: "Money management strategies and practical budgeting methods",
  Investing: "Building wealth through smart investment decisions",
  "Side Hustles": "Extra income opportunities and side business ideas",
  "Saving Money": "Practical tips to save more and spend less",
  FIRE: "Financial Independence and early retirement — the real stories behind the numbers",
};

const IMAGE_POOL: Record<string, string[]> = {
  Budgeting: [
    "/images/articles/budget-planner.jpg",
    "/images/articles/calculator-paper.jpg",
    "/images/articles/notebook-hand.jpg",
    "/images/articles/desk-notebook.jpg",
    "/images/articles/budget-calculator.jpg",
    "/images/articles/freedom-path.jpg",
    "/images/articles/wallet-control.jpg",
    "/images/articles/tea-notebook.jpg",
    "/images/articles/minimal-home.jpg",
    "/images/articles/laptop-notes.jpg",
  ],
  Investing: [
    "/images/articles/stock-chart.jpg",
    "/images/articles/laptop-stocks.jpg",
    "/images/articles/market-charts.jpg",
    "/images/articles/market-down.jpg",
    "/images/articles/portfolio-charts.jpg",
    "/images/articles/bank-laptop.jpg",
    "/images/articles/coin-jar.jpg",
    "/images/articles/pound-coins.jpg",
  ],
  "Side Hustles": [
    "/images/articles/laptop-work.jpg",
    "/images/articles/laptop-coffee.jpg",
    "/images/articles/laptop-typing.jpg",
    "/images/articles/workspace.jpg",
    "/images/articles/testing-desk.jpg",
    "/images/articles/bookkeeping-laptop.jpg",
    "/images/articles/amazon-boxes.jpg",
    "/images/articles/laptop-screen.jpg",
  ],
  "Saving Money": [
    "/images/articles/savings-jar.jpg",
    "/images/articles/coins-stack.jpg",
    "/images/articles/coin-jar.jpg",
    "/images/articles/supermarket-trolley.jpg",
    "/images/articles/coffee-cup.jpg",
    "/images/articles/cash-banknotes.jpg",
    "/images/articles/delivery-boxes.jpg",
    "/images/articles/phone-negotiation.jpg",
    "/images/articles/pound-coins.jpg",
    "/images/articles/cash-bills.jpg",
    "/images/articles/lifestyle-coffee.jpg",
    "/images/articles/lifestyle-warm.jpg",
  ],
  FIRE: [
    "/images/articles/mountain-1.jpg",
    "/images/articles/mountain-2.jpg",
    "/images/articles/mountain-3.jpg",
    "/images/articles/mountain-sunrise.jpg",
    "/images/articles/forest-freedom.jpg",
    "/images/articles/reflection-path.jpg",
  ],
};

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

export function getInlineImages(slug: string, category: string, heroImage: string, count = 2): string[] {
  const pool = (IMAGE_POOL[category] || []).filter((img) => img !== heroImage);
  if (pool.length === 0) return [];
  const seed = hashString(slug);
  const picks: string[] = [];
  for (let i = 0; i < count; i++) {
    const idx = (seed + i * 7) % pool.length;
    const img = pool[idx];
    if (!picks.includes(img)) picks.push(img);
  }
  return picks;
}

import article1 from "@/content/articles/paid-off-28k-debt-teachers-salary";
import article2 from "@/content/articles/beginner-guide-index-funds";
import article3 from "@/content/articles/5-side-hustles-1500-month";
import article4 from "@/content/articles/52-week-money-challenge";
import article5 from "@/content/articles/fire-at-42-financial-independence";
import article6 from "@/content/articles/envelope-budgeting-method";
import article7 from "@/content/articles/zero-based-budget-finally-worked";
import article8 from "@/content/articles/stopped-tracking-every-penny";
import article9 from "@/content/articles/50-30-20-rule-almost-bankrupted-me";
import article10 from "@/content/articles/investing-50-a-week-from-zero";
import article11 from "@/content/articles/roth-ira-mistake-cost-14000";
import article12 from "@/content/articles/etsy-printables-1200-month";
import article13 from "@/content/articles/side-hustle-mistakes-cost-year-income";
import article14 from "@/content/articles/no-coffee-90-days-experiment";
import article15 from "@/content/articles/grocery-trick-cut-240-monthly";
import article16 from "@/content/articles/walked-away-145k-job-for-fire";
import article17 from "@/content/articles/emergency-fund-from-scratch-broke";
import article18 from "@/content/articles/freelance-writing-side-hustle-real-numbers";
import article19 from "@/content/articles/why-no-spend-months-dont-work";
import article20 from "@/content/articles/where-my-money-actually-goes";
import article21 from "@/content/articles/budgeting-on-variable-income";
import article22 from "@/content/articles/why-i-dont-pick-stocks-anymore";
import article23 from "@/content/articles/three-fund-portfolio-explained";
import article24 from "@/content/articles/roth-vs-traditional-401k-how-i-decided";
import article25 from "@/content/articles/what-market-crash-feels-like";
import article26 from "@/content/articles/virtual-bookkeeping-side-hustle";
import article27 from "@/content/articles/tested-four-side-hustles";
import article28 from "@/content/articles/amazon-fba-honest-truth-2025";
import article29 from "@/content/articles/negotiation-script-cut-cable-bill";
import article30 from "@/content/articles/things-i-refuse-to-buy-used";
import article31 from "@/content/articles/got-off-amazon-habit";
import article32 from "@/content/articles/dental-insurance-trap";
import article33 from "@/content/articles/fire-number-isnt-what-you-think";
import article34 from "@/content/articles/coast-lean-fat-fire-honest-take";
import article35 from "@/content/articles/wish-id-known-about-fire";

export const allArticles: Article[] = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  article8,
  article9,
  article10,
  article11,
  article12,
  article13,
  article14,
  article15,
  article16,
  article17,
  article18,
  article19,
  article20,
  article21,
  article22,
  article23,
  article24,
  article25,
  article26,
  article27,
  article28,
  article29,
  article30,
  article31,
  article32,
  article33,
  article34,
  article35,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return allArticles.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return allArticles.slice(0, count);
  const sameCategory = allArticles.filter(
    (a) => a.slug !== slug && a.category === article.category
  );
  const otherArticles = allArticles.filter(
    (a) => a.slug !== slug && a.category !== article.category
  );
  return [...sameCategory, ...otherArticles].slice(0, count);
}

export function getFeaturedArticle(): Article {
  return allArticles[0];
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}
