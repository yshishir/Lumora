import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-6 sm:px-20 mt-5">
      <div>
        <Link
          href="/"
          className="font-bold  text-2xl  cursor-pointer text-[#1A1C1E]"
        >
          Lumora
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <a
          href="https://github.com/wshishir/draftbit."
          className="cursor-pointer"
          target="_blank"
        >
          <FaGithub className=" size-7" />
        </a>
        <Link href="/register">
          <Button className="hidden font-semibold md:block h-9 px-5 text-sm text-[#1A1C1E] bg-transparent border-[#1a1c1e]/30 shadow-none hover:bg-white/95 cursor-pointer">
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button className="h-9 px-5 text-sm font-semibold bg-[#1A1C1E] text-white  hover:bg-[#1A1C1E]/95 cursor-pointer border">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
