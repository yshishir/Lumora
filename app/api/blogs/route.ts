import { prisma } from "@/lib/prisma";
import { getUserFromToken } from "@/lib/auth";

export async function POST(req: Request) {
  const user = getUserFromToken(req);

  if (!user) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  if (!body.thumbnail) {
    return Response.json({ message: "Thumbnail is required" }, { status: 400 });
  }

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      description: body.description,
      content: body.content,
      userId: user.id,
      thumbnail: body.thumbnail,
    },
  });
  return Response.json(blog);
}

export async function GET() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
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

  return Response.json(blogs);
}
