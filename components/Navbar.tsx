import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-6 sm:px-20 mt-5">
      <div>
        <Link
          href="/"
          className="font-semibold md:text-3xl text-2xl  cursor-pointer text-[#FFFFFF]"
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
          <Button className="hidden md:block h-10 px-5 text-sm font-medium text-[#2C3947] bg-transparent border-[#2C3947]/30 shadow-none hover:bg-[#2C3947]/5 hover:border-[#2C3947]/60 cursor-pointer">
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button className="h-10 px-6 text-sm font-medium bg-[#2C3947] text-white shadow-sm hover:bg-[#2C3947]/90 cursor-pointer">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
