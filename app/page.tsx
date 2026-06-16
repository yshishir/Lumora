import BlogCard from "@/components/BlogCard";

const dummyBlogs = [
  {
    id: 1,
    title: "How to Find a Baddie: A Totally Serious Guide",
    description:
      "A practical talk on component APIs, accessibility, and shipping faster without making the interface feel rushed.",
    author: "Rahul Pandey",
    date: "June 15, 2026",
    imageSrc: "/blog.jpg",
  },
  {
    id: 2,
    title: "Designing Calm Interfaces for Busy Readers",
    description:
      "Small layout choices that make articles easier to scan, read, and remember across desktop and mobile screens.",
    author: "Ananya Rao",
    date: "June 12, 2026",
    imageSrc: "/blog2.jpg",
  },
  {
    id: 3,
    title: "What Makes a Blog Homepage Feel Finished",
    description:
      "A simple checklist for spacing, cards, typography, empty states, and the visual rhythm of repeated content.",
    author: "Shishir",
    date: "June 10, 2026",
    imageSrc: "/blog3.png",
  },
  {
    id: 4,
    title: "Writing Better Drafts Before You Hit Publish",
    description:
      "How to shape raw thoughts into useful posts with clearer structure, stronger openings, and fewer distractions.",
    author: "Meera Joshi",
    date: "June 8, 2026",
    imageSrc: "/blog4.jpg",
  },
  {
    id: 5,
    title: "A Beginner Friendly Guide to Product Thinking",
    description:
      "Learn how to connect user needs, design decisions, and engineering tradeoffs before building features.",
    author: "Karan Malhotra",
    date: "June 6, 2026",
    imageSrc: "/blog5.jpg",
  },
  {
    id: 6,
    title: "Why Consistent Spacing Improves Every UI",
    description:
      "Spacing is one of the fastest ways to make a screen feel cleaner, more organized, and easier to trust.",
    author: "Nisha Verma",
    date: "June 3, 2026",
    imageSrc: "/blog6.jpg",
  },
  {
    id: 7,
    title: "Building a Blog Layout That Can Grow",
    description:
      "Start with dummy data, keep the data shape close to your backend, and let components stay reusable.",
    author: "Shishir",
    date: "June 1, 2026",
    imageSrc: "/blog.jpg",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Latest stories
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#52525b]">
          Fresh writing, practical ideas, and notes from people building better
          products.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            author={blog.author}
            date={blog.date}
            imageSrc={blog.imageSrc}
          />
        ))}
      </div>
    </main>
  );
}
