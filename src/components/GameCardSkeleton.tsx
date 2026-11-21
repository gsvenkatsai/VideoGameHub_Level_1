import Card from "./Card";

const GameCardSkeleton = () => {
  return (
    <Card>
      {/* Image Skeleton */}
      <div className="w-full h-44 bg-zinc-200 dark:bg-[#1f1f1f] animate-pulse"></div>

      <div className="px-4 pb-4 pt-3 space-y-3">
        {/* Platform + score row */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-zinc-200 dark:bg-[#303030] rounded animate-pulse"></div>
            <div className="w-4 h-4 bg-zinc-200 dark:bg-[#303030] rounded animate-pulse"></div>
          </div>
          <div className="w-8 h-5 bg-zinc-200 dark:bg-[#303030] rounded animate-pulse"></div>
        </div>
        {/* Title Skeleton */}
        <div className="h-3.5 bg-zinc-200 dark:bg-[#303030] rounded w-3/4 animate-pulse"></div>
        <div className="h-3 bg-zinc-200 dark:bg-[#1f1f1f] rounded w-1/2 animate-pulse"></div>
      </div>
    </Card>
  );
};

export default GameCardSkeleton;
