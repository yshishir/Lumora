import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-between gap-3 px-6 py-5 text-sm sm:flex-row sm:px-20">
      <p className="flex items-center gap-1.5">
        Made with <FaHeart className="size-4 text-red-500" /> by Shishir
      </p>
      <p>©2026 Draftbit. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
