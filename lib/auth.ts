import jwt from "jsonwebtoken";

type TokenPayLoad = {
  id: number;
  email: string;
  username: string;
};

export function getUserFromToken(req: Request) : TokenPayLoad | null {
  const authHeader = req.headers.get("authorization");

  if(!authHeader){
    return null;
  }

  const token = authHeader.split(" ")[1];

  if(!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayLoad;
    return decoded;
  } catch {
    return null;
  }
}
