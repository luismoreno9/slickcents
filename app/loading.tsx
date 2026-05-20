import { ArticleCardSkeleton, SidebarSkeleton } from "@/components/ArticleCardSkeleton";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero shimmer */}
      <div className="shimmer h-48 rounded-2xl mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
        <div>
          {/* Featured skeleton */}
          <div className="mb-10">
            <div className="shimmer h-7 w-48 rounded mb-5" />
            <div className="shimmer h-80 rounded-2xl" />
          </div>

          {/* Grid skeleton */}
          <div className="shimmer h-7 w-36 rounded mb-5" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <ArticleCardSkeleton key={i} />
            ))}
          </div>
        </div>
        <SidebarSkeleton />
      </div>
    </div>
  );
}
