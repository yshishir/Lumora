import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return Response.json({ message: "Invalid email or password" }, { status: 401 });
  }

  const isPasswordCorrect = await bcrypt.compare(body.password, user.password);

  if (!isPasswordCorrect) {
    return Response.json({ message: "Invalid email or password" }, { status: 401 });
  }

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
}
