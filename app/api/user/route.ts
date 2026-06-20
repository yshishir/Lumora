import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();
  const hashedPassword = await bcrypt.hash(body.password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      { id: user.id, email: user.email, username: user.username },
      process.env.JWT_SECRET!
    );

    return Response.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch {
    return Response.json({ message: "Email already exists" }, { status: 400 });
  }
}

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
    },
  });

  return Response.json(users);
}
