import Card from "./Card";

const GameCardSkeleton = () => {
  return (
    <Card>
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-700 animate-pulse"></div>

      <div className="p-4 space-y-3">
        {/* Title Skeleton */}
        <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between">
          {/* Platform Icons Skeleton */}
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-gray-700 rounded-full animate-pulse"></div>
            <div className="w-5 h-5 bg-gray-700 rounded-full animate-pulse"></div>
            <div className="w-5 h-5 bg-gray-700 rounded-full animate-pulse"></div>
          </div>

          {/* Critic Score Skeleton */}
          <div className="w-10 h-6 bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </Card>
  );
};

export default GameCardSkeleton;
