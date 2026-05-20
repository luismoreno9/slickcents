import Link from "next/link";
import { allArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export default function NotFound() {
  const suggestions = allArticles.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-cream-100 rounded-3xl mb-6 border border-cream-200">
        <span className="text-4xl">🤔</span>
      </div>
      <h1 className="font-display font-bold text-5xl text-bark-900 mb-3">404</h1>
      <p className="font-display text-xl text-bark-600 mb-2">This page wandered off.</p>
      <p className="text-bark-500 text-sm mb-8 max-w-md mx-auto">
        It might have been moved, deleted, or never existed in the first place. Let&apos;s find you something useful instead.
      </p>
      <div className="flex gap-3 justify-center mb-16">
        <Link href="/" className="btn-primary">Back to homepage</Link>
        <Link href="/contact" className="btn-outline">Report an issue</Link>
      </div>

      {suggestions.length > 0 && (
        <div>
          <p className="font-display font-semibold text-bark-700 mb-6">Popular articles you might like</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {suggestions.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
