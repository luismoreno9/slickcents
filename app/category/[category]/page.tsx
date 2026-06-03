import { notFound } from "next/navigation";
import { getArticlesByCategory, CATEGORIES, CATEGORY_COLORS, CATEGORY_DESCRIPTIONS, categorySlug } from "@/lib/articles";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: categorySlug(cat) }));
}

function findCategory(slug: string) {
  return CATEGORIES.find((c) => categorySlug(c) === slug);
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const cat = findCategory(params.category);
  if (!cat) return {};
  return {
    title: `${cat} Articles`,
    description: `Browse all ${cat.toLowerCase()} articles on SlickCents.`,
    alternates: {
      canonical: `/category/${categorySlug(cat)}`,
    },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = findCategory(params.category);
  if (!cat) notFound();

  const articles = getArticlesByCategory(cat);
  const colors = CATEGORY_COLORS[cat] ?? { bg: "bg-bark-100", text: "text-bark-700", border: "border-bark-200" };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Category header */}
      <div className="mb-10">
        <nav className="flex items-center gap-2 text-xs text-bark-400 mb-5">
          <Link href="/" className="hover:text-forest-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-bark-600">Categories</span>
          <span>/</span>
          <span className="text-bark-900 font-medium">{cat}</span>
        </nav>

        <div className="flex items-start gap-5">
          <div className={`w-16 h-16 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
            <span className={`font-display font-bold text-2xl ${colors.text}`}>
              {cat.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="font-display font-bold text-3xl text-bark-900 mb-2">{cat}</h1>
            <p className="text-bark-500 text-sm">
              {articles.length} article{articles.length !== 1 ? "s" : ""} · {CATEGORY_DESCRIPTIONS[cat] || `Explore ${cat.toLowerCase()} content`}
            </p>
          </div>
        </div>

        {/* Category navigation */}
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-cream-200">
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              href={`/category/${categorySlug(c)}`}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                c === cat
                  ? "bg-forest-500 text-white border-forest-500"
                  : "bg-white text-bark-600 border-cream-200 hover:bg-forest-50 hover:text-forest-600 hover:border-forest-200"
              }`}
            >
              {c}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        <main>
          {articles.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 shadow-card text-center">
              <div className="text-4xl mb-3">📝</div>
              <h2 className="font-display font-bold text-xl text-bark-800 mb-2">No articles yet</h2>
              <p className="text-bark-500 text-sm">Check back soon — more {cat.toLowerCase()} content is coming.</p>
              <Link href="/" className="btn-primary mt-5 inline-flex">Browse all articles</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {articles.map((article, i) => (
                <ArticleCard key={article.slug} article={article} index={i} />
              ))}
            </div>
          )}
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
