const IssueDetailsLoader = () => {
  return (
    <div className="max-w-5xl space-y-6 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="h-6 w-48 bg-gray-200 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>
        <div className="flex gap-3">
          <div className="h-7 w-24 bg-gray-200 rounded-full" />
          <div className="h-7 w-24 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow p-6 space-y-8">
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
        </div>

        {/* Reporter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkeletonItem />
          <SkeletonItem />
        </div>

        {/* Description */}
        <div className="space-y-3">
          <div className="h-5 w-40 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>

        {/* Image */}
        <div className="h-60 bg-gray-200 rounded-lg" />

        
        <div className="flex justify-end gap-3">
          <div className="h-10 w-24 bg-gray-200 rounded" />
          <div className="h-10 w-32 bg-gray-200 rounded" />
          <div className="h-10 w-24 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

const SkeletonItem = () => (
  <div className="space-y-2">
    <div className="h-4 w-24 bg-gray-200 rounded" />
    <div className="h-5 w-full bg-gray-200 rounded" />
  </div>
);

export default IssueDetailsLoader;
