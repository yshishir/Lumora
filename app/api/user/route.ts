import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const user = await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: body.password,
    },
  });

  return Response.json(user);
}
