import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import { Target, Search, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Sarah Chen",
  description: "The story behind SlickCents — a personal finance blog built on real-life experience, not theory.",
};

export default function AboutPage() {
  const featuredArticles = allArticles.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <span className="text-xs font-semibold text-forest-600 uppercase tracking-wider">About the Author</span>
          <h1 className="font-display font-bold text-5xl text-bark-900 mt-3 mb-6 leading-tight">
            Hi, I&apos;m Sarah — I went from broke, anxious and $52k in debt to financial independence.
          </h1>
          <p className="text-bark-600 text-lg leading-relaxed mb-4">
            At 29, I had $52,000 in debt, a negative net worth, and a vague hope that things would somehow work out. Spoiler: hope is not a financial strategy.
          </p>
          <p className="text-bark-600 leading-relaxed mb-4">
            Over the next decade, I learned — slowly, painfully, then confidently — how money actually works. I paid off the debt. I built an emergency fund. I maxed out retirement accounts. I bought a home. And at 41, I reached financial independence and left my corporate job on my own terms.
          </p>
          <p className="text-bark-600 leading-relaxed mb-6">
            I started SlickCents because the advice I needed didn&apos;t exist when I was struggling. Most personal finance content is either too basic, too preachy, or written by people who grew up wealthy and don&apos;t understand what it&apos;s actually like to start from zero.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="btn-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in touch
            </Link>
            <Link href="/" className="btn-outline">Read the blog</Link>
          </div>
        </div>

        {/* Author photo */}
        <div className="relative">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/sara.jpeg"
              alt="Sarah Chen"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          {/* Stats cards */}
          <div className="absolute -bottom-5 -left-3 bg-white rounded-xl p-3 shadow-lg border border-cream-200 backdrop-blur-sm">
            <p className="font-display font-bold text-2xl text-forest-600">$52k</p>
            <p className="text-xs text-bark-600 font-medium">Debt paid off</p>
          </div>
          <div className="absolute -bottom-5 -right-3 bg-white rounded-xl p-3 shadow-lg border border-cream-200 backdrop-blur-sm">
            <p className="font-display font-bold text-2xl text-forest-600">41</p>
            <p className="text-xs text-bark-600 font-medium">Age at FI</p>
          </div>
        </div>
      </div>

      {/* My philosophy */}
      <section className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-cream-200 mb-12">
        <h2 className="font-display font-bold text-3xl text-bark-900 mb-8">What SlickCents stands for</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "No fluff",
              desc: "Every article has one goal: give you something you can actually use. No 10,000-word posts that say nothing. No vague inspiration.",
            },
            {
              icon: Search,
              title: "Real numbers",
              desc: "I share my actual financial numbers — income, savings rate, investment returns. Because vague advice doesn't help anyone.",
            },
            {
              icon: Heart,
              title: "Judgment-free",
              desc: "I've made every money mistake in the book. There's no shame in being here. We're all figuring this out.",
            },
          ].map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.title} className="bg-cream-50 rounded-xl p-6 border border-cream-200 hover:shadow-sm transition-shadow">
                <IconComponent className="w-6 h-6 text-forest-600 mb-4" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-bark-900 text-lg mb-2">{item.title}</h3>
                <p className="text-bark-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* My journey timeline */}
      <section className="mb-12">
        <h2 className="font-display font-bold text-2xl text-bark-900 mb-7">The timeline</h2>
        <div className="space-y-0">
          {[
            { year: "2011", event: "Graduated with $38k in student loans and no financial education whatsoever." },
            { year: "2013", event: "Added $14k in credit card debt after a layoff. Hit rock bottom, net worth of -$52,000." },
            { year: "2014", event: "Found personal finance blogs, discovered the debt avalanche, created my first real budget." },
            { year: "2017", event: "Paid off all consumer debt. Started maxing Roth IRA for the first time." },
            { year: "2019", event: "Hit $100k net worth. Started investing in index funds aggressively." },
            { year: "2021", event: "Discovered the FIRE movement. Calculated my FI number: $1.1M." },
            { year: "2023", event: "Launched SlickCents to share everything I'd learned the hard way." },
            { year: "2024", event: "Hit financial independence at 41. Left corporate job. Still writing, still learning." },
          ].map((item, i) => (
            <div key={item.year} className="flex gap-5 pb-6 relative">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-forest-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{item.year.slice(2)}</span>
                </div>
                {i < 7 && <div className="w-0.5 flex-1 bg-forest-100 mt-1" />}
              </div>
              <div className="pb-0 pt-2">
                <span className="text-xs font-semibold text-forest-600 uppercase tracking-wide">{item.year}</span>
                <p className="text-bark-700 text-sm leading-relaxed mt-0.5">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent articles */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-heading mb-0">Some of my best work</h2>
          <Link href="/" className="text-forest-600 text-sm font-medium hover:text-forest-800 transition-colors">
            See all articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
