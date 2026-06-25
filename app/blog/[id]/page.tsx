import { connection } from "next/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CiCalendar } from "react-icons/ci";
import { LuArrowLeft, LuUser } from "react-icons/lu";
import { prisma } from "@/lib/prisma";
import ShareButton from "./ShareButton";
import DeleteBlogButton from "@/components/DeleteButton";

async function getBlog(id: string) {
  await connection();

  const blogId = Number(id);

  if (Number.isNaN(blogId)) {
    return null;
  }

  return prisma.blog.findUnique({
    where: {
      id: blogId,
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }


  return (
    <article
      className="mx-auto w-full px-6 py-12 sm:px-8"
      style={{ maxWidth: "1000px" }}
    >
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-md font-medium text-black"
      >
        <LuArrowLeft className="size-4" />
        Back
      </Link>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted ">
        <Image
          src={blog.thumbnail || "thumbnail.jpeg"}
          alt={blog.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
        />
      </div>

      <header className="mt-5">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {blog.title}
        </h1>

        <div className="mt-5 flex w-full flex-col text-sm text-zinc-500 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <p className="flex items-center gap-1">
              <LuUser className="size-4" />
              {blog.author.username}
            </p>
            <p className="flex items-center gap-1">
              <CiCalendar className="size-5" />
              {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <DeleteBlogButton blogId={blog.id} blogUserId={blog.userId} />

            <ShareButton />
          </div>
        </div>
      </header>

      <div className="mt-8 space-y-6 text-lg leading-8 text-[#3f3f46]">
        <p>{blog.description}</p>
        <div
          className="prose prose-zinc max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </article>
  );
}
