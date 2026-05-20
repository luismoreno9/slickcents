import { Article } from "@/lib/articles";
import ArticleCard from "./ArticleCard";

interface Props {
  articles: Article[];
}

export default function RelatedArticles({ articles }: Props) {
  if (!articles.length) return null;

  return (
    <section className="mt-16 pt-12 border-t border-cream-200">
      <h2 className="font-display font-bold text-2xl text-bark-900 mb-8">
        You Might Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
