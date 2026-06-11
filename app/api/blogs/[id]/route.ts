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
  });

  return Response.json(blog);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  await prisma.blog.delete({
    where: {
      id: Number(id),
    },
  });

  return Response.json({
    message: "Blog Deleted",
  });
}
