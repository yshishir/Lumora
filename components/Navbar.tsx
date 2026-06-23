"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";
import { getUser, logout } from "@/lib/client-auth";
import { useRouter } from "next/navigation";
import { TbBallpen } from "react-icons/tb";
import Link from "next/link";

const font_Playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const Navbar = () => {
  const router = useRouter();

  const [user, setUser] = useState<ReturnType<typeof getUser> | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loggedInUser = getUser();
    setUser(loggedInUser);
    setMounted(true);
  }, []);

  function handleLogout() {
    logout();
    setUser(null);
    router.push("/login");
  }

  return (
    <div className="flex w-full items-center justify-between px-6 sm:px-20 mt-5">
      <div>
        <Link
          href="/"
          className={`${font_Playfair.className} font-bold text-2xl cursor-pointer`}
        >
          Lumora
        </Link>
      </div>

      <div className="flex items-center gap-10">
        <a
          href="https://github.com/wshishir/Lumora"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="size-6 text-foreground" />
        </a>

        {!mounted ? null : user ? (
          <>
            <Link href="/create">
              <Button
                variant="secondary"
                className="font-semibold flex items-center gap-1.5 h-9 px-5 text-foreground text-sm bg-zinc-200 shadow-none hover:bg-zinc-300 cursor-pointer"
              >
                <TbBallpen className="size-4" aria-hidden="true" />
                Write
              </Button>
            </Link>

            <Button
              onClick={handleLogout}
              className="hidden md:block h-9 px-5 text-sm font-semibold bg-red-200 text-red-500 hover:bg-red-100 cursor-pointer border"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/register">
              <Button
                variant="secondary"
                className="hidden font-semibold md:block h-9 px-5 text-foreground text-sm bg-zinc-200 shadow-none hover:bg-zinc-300 cursor-pointer"
              >
                Register
              </Button>
            </Link>

            <Link href="/login">
              <Button className="h-9 px-5 text-sm font-semibold hover:bg-[#1A1C1E]/95 cursor-pointer border">
                Login
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
