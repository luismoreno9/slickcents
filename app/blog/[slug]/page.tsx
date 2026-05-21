import { notFound } from "next/navigation";
import Image from "next/image";
import { allArticles, getArticleBySlug, getRelatedArticles, formatDate, getInlineImages } from "@/lib/articles";
import type { Metadata } from "next";
import CategoryBadge from "@/components/CategoryBadge";
import AuthorBio from "@/components/AuthorBio";
import RelatedArticles from "@/components/RelatedArticles";
import Sidebar from "@/components/Sidebar";

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      images: [{ url: article.image }],
    },
  };
}

function renderBody(body: string, inlineImages: string[] = [], inlineAlts: string[] = []) {
  const paragraphs = body.split("\n\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let listType: "ul" | "ol" = "ul";
  let paragraphIndex = 0;
  const insertions = inlineImages.length === 2 ? [5, 11] : inlineImages.length === 1 ? [6] : [];
  let imagesInserted = 0;


  const flushList = () => {
    if (listItems.length) {
      const Tag = listType;
      elements.push(
        <Tag key={`list-${elements.length}`} className={listType === "ul" ? "list-disc pl-6 space-y-1.5" : "list-decimal pl-6 space-y-1.5"}>
          {listItems.map((li, i) => (
            <li key={i} className="text-bark-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(li) }} />
          ))}
        </Tag>
      );
      listItems = [];
    }
  };

  for (const block of paragraphs) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={elements.length} className="font-display font-bold text-2xl text-bark-900 mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={elements.length} className="font-display font-bold text-xl text-bark-900 mt-7 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("---")) {
      flushList();
      elements.push(<hr key={elements.length} className="border-cream-200 my-8" />);
    } else if (trimmed.startsWith("> ")) {
      flushList();
      const quote = trimmed.slice(2);
      elements.push(
        <blockquote key={elements.length} className="border-l-4 border-forest-300 bg-forest-50 px-5 py-4 rounded-r-xl my-6 italic text-bark-700 text-lg">
          {quote}
        </blockquote>
      );
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      listType = "ul";
      const lines = trimmed.split("\n").filter((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "));
      listItems.push(...lines.map((l) => l.trim().slice(2)));
      continue;
    } else if (/^\d+\./.test(trimmed)) {
      listType = "ol";
      const lines = trimmed.split("\n").filter((l) => /^\d+\./.test(l.trim()));
      listItems.push(...lines.map((l) => l.trim().replace(/^\d+\.\s*/, "")));
      continue;
    } else if (trimmed.startsWith("| ")) {
      flushList();
      // Simple table
      const rows = trimmed.split("\n").filter((l) => l.trim().startsWith("|"));
      elements.push(
        <div key={elements.length} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            {rows.map((row, ri) => {
              const cells = row.split("|").filter((c, i) => i > 0 && i < row.split("|").length - 1);
              if (cells.every((c) => c.trim().match(/^[-:]+$/))) return null;
              const CellTag = ri === 0 ? "th" : "td";
              return (
                <tr key={ri} className={ri === 0 ? "bg-forest-50" : ri % 2 === 0 ? "bg-cream-50" : "bg-white"}>
                  {cells.map((cell, ci) => (
                    <CellTag key={ci} className={`border border-cream-200 px-4 py-2.5 text-left ${ri === 0 ? "font-semibold text-bark-700" : "text-bark-600"}`}>
                      {cell.trim()}
                    </CellTag>
                  ))}
                </tr>
              );
            })}
          </table>
        </div>
      );
    } else {
      flushList();
      const multiLine = trimmed.replace(/\n/g, " ");
      elements.push(
        <p key={elements.length} className="text-bark-700 leading-[1.9] text-[1.05rem] mb-0" dangerouslySetInnerHTML={{ __html: formatInline(multiLine) }} />
      );
      paragraphIndex++;
      if (insertions.includes(paragraphIndex) && imagesInserted < inlineImages.length) {
        const src = inlineImages[imagesInserted];
        const alt = inlineAlts[imagesInserted] || "";
        elements.push(
          <figure key={`inline-img-${imagesInserted}`} className="my-10 -mx-4 sm:mx-0">
            <div className="relative h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-card">
              <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 680px" />
            </div>
          </figure>
        );
        imagesInserted++;
      }
    }
  }

  flushList();
  return elements;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong class='font-semibold text-bark-900'>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class='bg-cream-200 text-bark-800 px-1.5 py-0.5 rounded text-sm font-mono'>$1</code>");
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(params.slug, 3);
  const inlineImages = getInlineImages(article.slug, article.category, article.image, 2);
  const inlineAlts = inlineImages.map(() => article.title);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Article */}
          <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-bark-400 mb-6">
              <a href="/" className="hover:text-forest-600 transition-colors">Home</a>
              <span>/</span>
              <CategoryBadge category={article.category} size="sm" />
              <span>/</span>
              <span className="text-bark-600 truncate max-w-[200px]">{article.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-bark-900 leading-tight mb-5">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-bark-400 pb-6 border-b border-cream-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-forest-300 to-forest-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">S</span>
                  </div>
                  <span className="font-medium text-bark-700">Sarah Chen</span>
                </div>
                <span>·</span>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
            </header>

            {/* Hero image */}
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-card">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Article body */}
            <div className="max-w-[680px] space-y-5">
              {renderBody(article.body, inlineImages, inlineAlts)}
            </div>

            {/* Author bio */}
            <AuthorBio />

            {/* Related articles */}
            <RelatedArticles articles={related} />
          </article>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>

    </>
  );
}
