import Link from "next/link";
import Image from "next/image";
import { Article, formatDate } from "@/lib/articles";
import CategoryBadge from "./CategoryBadge";

interface Props {
  article: Article;
  variant?: "default" | "horizontal" | "featured";
  index?: number;
}

export default function ArticleCard({ article, variant = "default", index = 0 }: Props) {
  const delay = Math.min(index * 100, 500);

  if (variant === "horizontal") {
    return (
      <article
        className="article-card flex gap-4 p-4 animate-fade-up opacity-0"
        style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
      >
        <Link href={`/blog/${article.slug}`} className="flex-shrink-0">
          <div className="relative w-24 h-24 rounded-xl overflow-hidden">
            <Image
              src={article.image || "/images/default-featured.jpg"}
              alt={article.title}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between py-0.5 min-w-0">
          <div>
            <CategoryBadge category={article.category} size="sm" />
            <Link href={`/blog/${article.slug}`}>
              <h3 className="font-display font-semibold text-bark-900 text-sm leading-snug mt-1.5 hover:text-forest-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
            </Link>
          </div>
          <p className="text-xs text-bark-400 mt-1">{formatDate(article.date)}</p>
        </div>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <article
        className="article-card overflow-hidden group animate-fade-up opacity-0"
        style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
      >
        <Link href={`/blog/${article.slug}`} className="block relative h-72 md:h-80 overflow-hidden">
          <Image
            src={article.image || "/images/default-featured.jpg"}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark-900/80 via-bark-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <CategoryBadge category={article.category} linked={false} />
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl mt-2 leading-tight line-clamp-3">
              {article.title}
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-cream-200 text-sm">{formatDate(article.date)}</span>
              <span className="text-cream-300 text-xs">·</span>
              <span className="text-cream-200 text-sm">{article.readTime}</span>
            </div>
          </div>
        </Link>
        <div className="p-5">
          <p className="text-bark-500 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-forest-600 font-semibold text-sm mt-4 hover:text-forest-800 transition-colors group/link"
          >
            Read article
            <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    );
  }

  // Default card
  return (
    <article
      className="article-card group animate-fade-up opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <Link href={`/blog/${article.slug}`} className="block relative h-52 overflow-hidden">
        <Image
          src={article.image || "/images/default-featured.jpg"}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge category={article.category} />
          <span className="text-bark-300 text-xs">·</span>
          <span className="text-bark-400 text-xs">{article.readTime}</span>
        </div>
        <Link href={`/blog/${article.slug}`}>
          <h3 className="font-display font-bold text-bark-900 text-lg leading-snug mb-2 hover:text-forest-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-bark-500 text-sm leading-relaxed line-clamp-2 mb-4">{article.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-cream-200">
          <span className="text-bark-400 text-xs">{formatDate(article.date)}</span>
          <Link
            href={`/blog/${article.slug}`}
            className="text-forest-600 text-xs font-semibold hover:text-forest-800 transition-colors flex items-center gap-1"
          >
            Read more
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
