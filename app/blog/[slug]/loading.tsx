import { SidebarSkeleton } from "@/components/ArticleCardSkeleton";

export default function ArticleLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        <div>
          {/* Breadcrumb */}
          <div className="flex gap-2 mb-6">
            <div className="shimmer h-4 w-12 rounded" />
            <div className="shimmer h-4 w-20 rounded-full" />
          </div>

          {/* Title skeleton */}
          <div className="space-y-3 mb-6">
            <div className="shimmer h-10 w-full rounded" />
            <div className="shimmer h-10 w-4/5 rounded" />
          </div>

          {/* Meta */}
          <div className="flex gap-4 pb-5 border-b border-cream-200 mb-6">
            <div className="shimmer h-7 w-7 rounded-full" />
            <div className="shimmer h-5 w-24 rounded" />
            <div className="shimmer h-5 w-28 rounded" />
          </div>

          {/* Ad slot */}
          <div className="shimmer h-20 rounded-xl mb-8" />

          {/* Hero image */}
          <div className="shimmer h-80 rounded-2xl mb-10" />

          {/* Body paragraphs */}
          <div className="space-y-4 max-w-[680px]">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="shimmer h-4 w-full rounded" />
                <div className="shimmer h-4 w-11/12 rounded" />
                {i % 3 === 0 && <div className="shimmer h-4 w-3/4 rounded" />}
              </div>
            ))}
          </div>
        </div>
        <SidebarSkeleton />
      </div>
    </div>
  );
}
