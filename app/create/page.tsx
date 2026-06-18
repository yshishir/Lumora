import Tiptap from "@/components/TipTap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { LuArrowLeft } from "react-icons/lu";

const page = () => {
  return (
    <article
      className="mx-auto w-full px-6 py-12 sm:px-8"
      style={{ maxWidth: "1000px" }}
    >
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-md font-medium text-black"
      >
        <LuArrowLeft className="size-4" />
        Back
      </Link>
      <div className="mb-9">
        <h2 className="text-4xl font-bold mb-2">Create New Post</h2>
        <p className="text-zinc-500">What&apos;s on your mind today?</p>
      </div>
      <div className="mb-4">
        <p className="font-medium text-xl mb-1">Title</p>
        <Input
          className="h-10 placeholder:text-lg placeholder:text-zinc-400 text-lg md:text-lg bg-transparent focus-visible:ring-0 focus-visible:border-input"
          placeholder="Enter a descriptive title"
          required
          type="text"
        />
      </div>
      <div className="mb-4">
        <p className="font-medium text-xl mb-1">Description</p>
        <Textarea
          className="resize-y placeholder:text-lg placeholder:text-zinc-400 text-lg md:text-lg bg-transparent focus-visible:ring-0 focus-visible:border-input"
          placeholder="Write a brief description"
        />
      </div>
      <div className="mb-4">
        <p className="font-medium text-xl mb-1">Cover Image</p>
        <Input
          className="h-10  placeholder:text-zinc-400 text-lg md:text-lg bg-transparent focus-visible:ring-0 focus-visible:border-input"
          required
          type="file"
        />
      </div>
      <div className="mb-5">
        <p className="font-medium text-xl mb-1">Content</p>
        <Tiptap />
      </div>
      <div className="flex  items-center justify-center">
        <Button
          variant="default"
          className="px-5 py-5 cursor-pointer font-medium text-2xl gap-4"
        >
          Post Blog
          <CiLocationArrow1 size={10} />
        </Button>
      </div>
    </article>
  );
};

export default page;
