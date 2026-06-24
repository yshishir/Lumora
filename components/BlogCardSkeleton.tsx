const BlogCardSkeleton = () => {
    return (
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <div className="h-52 w-full animate-pulse bg-zinc-200" />
  
        <div className="p-5">
          <div className="h-4 w-32 animate-pulse rounded bg-zinc-200" />
  
          <div className="mt-4 h-6 w-full animate-pulse rounded bg-zinc-200" />
          <div className="mt-2 h-6 w-3/4 animate-pulse rounded bg-zinc-200" />
  
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-zinc-200" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-200" />
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogCardSkeleton;