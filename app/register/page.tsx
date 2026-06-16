import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex flex-1 items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-xl">Create an account</CardTitle>
            <CardDescription>
              Enter your email below to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label>Username</Label>
                  <Input
                  id="name"
                  type="name"
                  placeholder="John Pork"
                  required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email-spacing">Email</Label>
                  <Input
                    id="email-spacing"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password-spacing">Password</Label>
                  </div>
                  <Input id="password-spacing" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full py-5 cursor-pointer text-lg bg-foreground">
             Register
            </Button>
            <p className="text-center text-sm">
            Already have an account?{" "}
              <Link href="/login" className="font-medium underline-offset-2 hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default Register;
