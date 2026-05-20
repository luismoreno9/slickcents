import Link from "next/link";
import Image from "next/image";
import { allArticles, CATEGORIES } from "@/lib/articles";
import CategoryBadge from "./CategoryBadge";
import NewsletterForm from "./NewsletterForm";

export default function Sidebar() {
  const popularArticles = allArticles.slice(0, 4);

  return (
    <aside className="space-y-6">
      {/* Author widget */}
      <div className="bg-white rounded-2xl p-6 shadow-card border border-cream-200">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 shadow-sm">
            <Image
              src="/images/foto sara redonda.jpeg"
              alt="Sarah Chen"
              width={96}
              height={96}
              className="object-cover object-center w-full h-full scale-110"
            />
          </div>
          <h3 className="font-display font-bold text-bark-900 text-lg">Sarah Chen</h3>
          <p className="text-forest-600 text-xs font-semibold uppercase tracking-wide mt-0.5">Personal Finance Writer</p>
        </div>
        <p className="text-bark-500 text-sm leading-relaxed mt-4 text-center">
          Paid off $52k in debt, hit a 65% savings rate, and retired early at 41. I write about what actually worked — no fluff, no affiliate spam.
        </p>
        <Link href="/about" className="btn-outline w-full justify-center mt-4 text-xs">
          Read my story
        </Link>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-br from-forest-500 to-forest-700 rounded-2xl p-6 shadow-warm">
        <div className="text-center">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-display font-bold text-white text-lg mb-1">Weekly Money Tips</h3>
          <p className="text-forest-100 text-xs leading-relaxed">
            One practical tip every Sunday. No spam, no nonsense.
          </p>
        </div>
        <NewsletterForm variant="sidebar" />
        <p className="text-forest-200 text-xs text-center mt-2">Join 12,400+ readers</p>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 shadow-card border border-cream-200">
        <h3 className="section-heading text-lg mb-4">Browse Topics</h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <CategoryBadge key={cat} category={cat} size="md" />
          ))}
        </div>
      </div>

      {/* Popular posts */}
      <div className="bg-white rounded-2xl p-6 shadow-card border border-cream-200">
        <h3 className="section-heading text-lg mb-4">Popular Articles</h3>
        <div className="space-y-4">
          {popularArticles.map((article, i) => (
            <div key={article.slug} className="flex gap-3">
              <span className="font-display font-bold text-2xl text-cream-300 leading-none flex-shrink-0 w-6 text-center">
                {i + 1}
              </span>
              <div>
                <Link href={`/blog/${article.slug}`} className="font-semibold text-sm text-bark-800 hover:text-forest-600 transition-colors leading-snug line-clamp-2">
                  {article.title}
                </Link>
                <p className="text-xs text-bark-400 mt-0.5">{article.readTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-cream-100 rounded-xl p-4 border border-cream-200">
        <p className="text-xs text-bark-400 leading-relaxed">
          <strong className="text-bark-600">Disclosure:</strong> SlickCents may earn commissions from affiliate links at no extra cost to you. Content is for educational purposes and is not financial advice.
        </p>
      </div>
    </aside>
  );
}
