import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-between gap-3 px-6 py-5 text-sm sm:flex-row sm:px-20">
      <p className="flex items-center gap-1.5">
        Made with <FaHeart className="size-4 text-foreground" /> by{" "}
        <span className="underline-offset-2 underline">
          <a href="https://x.com/yeshishir" target="_blank">
            {" "}
            Shishir
          </a>
        </span>
      </p>
      <p>© {year} Lumora. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
