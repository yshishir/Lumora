import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-20 mt-5">
      <div>
        <Link href="/" className="font-semibold text-3xl cursor-pointer">
          Draftbit
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
        <Button className="px-7 py-4 text-md bg-[#2C3947] text-white font-light hover:bg-[#2C3947]/90 cursor-pointer">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
