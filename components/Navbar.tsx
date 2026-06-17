import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

import Link from "next/link";

const font_Playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-6 sm:px-20 mt-5">
      <div>
        <Link href="/" className={`${font_Playfair.className} font-bold  text-2xl  cursor-pointer`}>
          Lumora
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <a
          href="https://github.com/wshishir/draftbit."
          className="cursor-pointer"
          target="_blank"
        >
          <FaGithub className=" size-6 text-foreground" />
        </a>
        <Link href="/register">
          <Button variant="secondary" className="hidden font-semibold md:block h-9 px-5 text-foreground text-sm bg-zinc-200  shadow-none hover:bg-zinc-300 cursor-pointer">
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button className="h-9 px-5 text-sm font-semibold  hover:bg-[#1A1C1E]/95 cursor-pointer border">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
