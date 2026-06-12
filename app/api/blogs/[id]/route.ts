import { getUserFromToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });

  return Response.json(blog);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getUserFromToken(req);

  if (!user) {
    return Response.json({ message: "Unauthorized" }, { status: 404 });
  }
  const { id } = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!blog) {
    return Response.json({ message: "blog not found" }, { status: 404 });
  }

  if (blog.userId !== user.id) {
    return Response.json(
      { message: "Forbidden: You can delete only your own blog" },
      { status: 403 },
    );
  }

  await prisma.blog.delete({
    where: {
      id: Number(id),
    },
  });

  return Response.json({
    message: "Blog Deleted",
  });
}
