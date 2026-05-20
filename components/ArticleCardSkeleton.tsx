export function ArticleCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card">
      <div className="shimmer h-52 w-full" />
      <div className="p-5 space-y-3">
        <div className="flex gap-2">
          <div className="shimmer h-5 w-20 rounded-full" />
          <div className="shimmer h-5 w-14 rounded-full" />
        </div>
        <div className="shimmer h-6 w-full rounded" />
        <div className="shimmer h-4 w-4/5 rounded" />
        <div className="shimmer h-4 w-3/5 rounded" />
        <div className="flex justify-between pt-4 border-t border-cream-200">
          <div className="shimmer h-3 w-24 rounded" />
          <div className="shimmer h-3 w-16 rounded" />
        </div>
      </div>
    </div>
  );
}

export function ArticleCardSkeletonHorizontal() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-card flex gap-4">
      <div className="shimmer w-24 h-24 rounded-xl flex-shrink-0" />
      <div className="flex flex-col justify-between py-0.5 flex-1 gap-2">
        <div className="shimmer h-4 w-16 rounded-full" />
        <div className="shimmer h-4 w-full rounded" />
        <div className="shimmer h-4 w-4/5 rounded" />
        <div className="shimmer h-3 w-20 rounded" />
      </div>
    </div>
  );
}

export function SidebarSkeleton() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-5 shadow-card">
        <div className="shimmer h-16 w-16 rounded-full mx-auto mb-3" />
        <div className="shimmer h-5 w-32 rounded mx-auto mb-2" />
        <div className="shimmer h-4 w-full rounded mb-1.5" />
        <div className="shimmer h-4 w-4/5 rounded" />
      </div>
      <div className="bg-white rounded-2xl p-5 shadow-card space-y-3">
        <div className="shimmer h-5 w-28 rounded" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="shimmer h-8 w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
}
