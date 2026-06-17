import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CiCalendar } from "react-icons/ci";
import { LuArrowLeft, LuShare2, LuUser } from "react-icons/lu";

const dummyBlogs = [
  {
    id: "1",
    title: "How to Find a Baddie: A Totally Serious Guide",
    description:
      "A practical talk on component APIs, accessibility, and shipping faster without making the interface feel rushed.",
    author: "Rahul Pandey",
    date: "June 15, 2026",
    time: "2:30 PM",
    imageSrc: "/blog7.jpg",
  },
  {
    id: "2",
    title: "Designing Calm Interfaces for Busy Readers",
    description:
      "Small layout choices that make articles easier to scan, read, and remember across desktop and mobile screens.",
    author: "Ananya Rao",
    date: "June 12, 2026",
    time: "10:15 AM",
    imageSrc: "/blog2.jpg",
  },
  {
    id: "3",
    title: "What Makes a Blog Homepage Feel Finished",
    description:
      "A simple checklist for spacing, cards, typography, empty states, and the visual rhythm of repeated content.",
    author: "Shishir",
    date: "June 10, 2026",
    time: "5:45 PM",
    imageSrc: "/blog3.png",
  },
  {
    id: "4",
    title: "Writing Better Drafts Before You Hit Publish",
    description:
      "How to shape raw thoughts into useful posts with clearer structure, stronger openings, and fewer distractions.",
    author: "Meera Joshi",
    date: "June 8, 2026",
    time: "11:00 AM",
    imageSrc: "/blog4.jpg",
  },
  {
    id: "5",
    title: "A Beginner Friendly Guide to Product Thinking",
    description:
      "Learn how to connect user needs, design decisions, and engineering tradeoffs before building features.",
    author: "Karan Malhotra",
    date: "June 6, 2026",
    time: "1:20 PM",
    imageSrc: "/blog5.jpg",
  },
  {
    id: "6",
    title: "Why Consistent Spacing Improves Every UI",
    description:
      "Spacing is one of the fastest ways to make a screen feel cleaner, more organized, and easier to trust.",
    author: "Nisha Verma",
    date: "June 3, 2026",
    time: "9:40 AM",
    imageSrc: "/blog6.jpg",
  },
  {
    id: "7",
    title: "Building a Blog Layout That Can Grow",
    description:
      "Start with dummy data, keep the data shape close to your backend, and let components stay reusable.",
    author: "Shishir",
    date: "June 1, 2026",
    time: "4:05 PM",
    imageSrc: "/blog.jpg",
  },
];

export function generateStaticParams() {
  return dummyBlogs.map((blog) => ({ id: blog.id }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = dummyBlogs.find((item) => item.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <article className="mx-auto w-full px-6 py-12 sm:px-8" style={{ maxWidth: "1120px" }}>
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-md font-medium text-black"
      >
        <LuArrowLeft className="size-4" />
        Back
      </Link>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted ">
        <Image
          src={blog.imageSrc}
          alt={blog.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />
      </div>

      <header className="mt-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {blog.title}
        </h1>

        <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <p className="flex items-center gap-2">
              <LuUser className="size-4" />
              {blog.author}
            </p>
            <p className="flex items-center gap-2">
              <CiCalendar className="size-5" />
              {blog.date}
            </p>
            <p>{blog.time}</p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-zinc-500"
          >
            <LuShare2 className="size-4" />
            Share
          </button>
        </div>
      </header>

      <div className="mt-10 space-y-6 text-lg leading-8 text-[#3f3f46]">
        <p>{blog.description}</p>
        <p>
          A good blog page starts by letting the reader understand the story at
          a glance. The thumbnail sets the mood, the title makes the promise,
          and the author details give the post enough context before the main
          content begins.
        </p>

        <h2 className="pt-4 text-3xl font-semibold tracking-tight text-foreground">
          Start With a Clear Structure
        </h2>
        <p>
          Keep the layout predictable: image first, title next, then useful meta
          details and the article content. This makes the page easy to scan on
          large screens and still readable on phones.
        </p>

        <h3 className="pt-2 text-2xl font-semibold text-foreground">
          What the Reader Should See
        </h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>A back button that returns to the list of posts.</li>
          <li>A large 16:9 thumbnail that visually anchors the page.</li>
          <li>Author, date, time, and a share action in one clean row.</li>
          <li>Paragraphs, headings, lists, and quotes for flexible writing.</li>
        </ul>

        <blockquote className="border-l-4 border-zinc-300 pl-5 text-xl italic text-zinc-600">
          A simple article layout works best when every section has a clear job.
        </blockquote>

        <h2 className="pt-4 text-3xl font-semibold tracking-tight text-foreground">
          Keep the Content Flexible
        </h2>
        <p>
          This setup is still basic, but it gives you room to add real blog data
          later. You can replace the dummy array with a database query, a CMS
          response, or markdown content without changing the visual structure.
        </p>
      </div>
    </article>
  );
}
