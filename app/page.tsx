import type { Metadata } from "next";
import { allArticles, getFeaturedArticle, CATEGORIES, categorySlug } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import NewsletterForm from "@/components/NewsletterForm";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Personal finance advice that's honest, practical, and actually useful — budgeting, investing, side hustles, saving money, and FIRE.",
};

export default function HomePage() {
  const featured = getFeaturedArticle();
  const latestArticles = allArticles.slice(1); // exclude featured

  return (
    <div className="min-h-screen">
      <JsonLd data={websiteJsonLd} />
      {/* Hero / Intro Banner */}
      <section className="bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-300 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-white/20">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              New articles every week
            </span>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Money talk that{" "}
              <span className="text-amber-300">actually</span>{" "}
              makes sense.
            </h1>
            <p className="text-forest-100 text-lg leading-relaxed mb-8 max-w-xl">
              Budgeting, investing, and building real wealth — written by someone who paid off $52k in debt and hit financial independence at 41. No fluff, no BS.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="inline-flex items-center gap-2 bg-white text-forest-700 font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-cream-50 transition-colors shadow-sm">
                Read my story
              </Link>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.slice(0, 3).map((cat) => (
                  <Link
                    key={cat}
                    href={`/category/${categorySlug(cat)}`}
                    className="inline-flex items-center text-xs font-medium text-forest-100 bg-white/10 border border-white/20 hover:bg-white/20 px-3 py-2 rounded-full transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
          {/* Main content */}
          <div>
            {/* Featured Article */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-heading mb-0">Featured Article</h2>
                <Link href={`/blog/${featured.slug}`} className="text-forest-600 text-sm font-medium hover:text-forest-800 transition-colors flex items-center gap-1">
                  Read it
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <ArticleCard article={featured} variant="featured" />
            </section>

            {/* Latest Articles Grid */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-heading mb-0">Latest Articles</h2>
                <span className="text-bark-400 text-sm">{latestArticles.length} articles</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {latestArticles.map((article, i) => (
                  <ArticleCard key={article.slug} article={article} index={i + 1} />
                ))}
              </div>
            </section>

            {/* Category Browse Strip */}
            <section className="mt-12 bg-white rounded-2xl p-6 shadow-card border border-cream-200">
              <h2 className="section-heading mb-4">Browse by Category</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    href={`/category/${categorySlug(cat)}`}
                    className="flex items-center justify-between bg-cream-50 hover:bg-forest-50 border border-cream-200 hover:border-forest-200 rounded-xl px-4 py-3 transition-all group"
                  >
                    <span className="font-medium text-bark-700 group-hover:text-forest-700 text-sm transition-colors">{cat}</span>
                    <svg className="w-4 h-4 text-bark-300 group-hover:text-forest-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </section>

            {/* Newsletter CTA (inline) */}
            <section className="mt-8 bg-[#1a4731] rounded-2xl p-7 text-white">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl mb-1.5">Get the weekly money brief</h3>
                  <p className="text-forest-100 text-sm">One money insight, delivered every Sunday. 12,400+ readers. No spam ever.</p>
                </div>
                <NewsletterForm variant="inline" />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
