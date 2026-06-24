import BlogCardSkeleton from "@/components/BlogCardSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8">
      <div className="mb-8">
        <div className="h-10 w-64 animate-pulse rounded bg-zinc-200" />
        <div className="mt-3 h-4 w-full max-w-2xl animate-pulse rounded bg-zinc-200" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    </main>
  );
}