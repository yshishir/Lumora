import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { IoPersonOutline } from "react-icons/io5";

import { CiCalendar } from "react-icons/ci";

const BlogCard = () => {
  return (
    <div>
      <Card className="group relative mx-auto w-full max-w-md pt-0 cursor-pointer">
        <div className="aspect-video overflow-hidden">
          <Image
            src="/blog.jpg"
            width={400}
            height={400}
            alt="Blog Image"
            className="h-full w-full object-fill transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-[22px] font-semibold  text-[#111827] tracking-tighter">
            How to Find a Baddie: A Totally Serious Guide
          </CardTitle>
          <CardDescription className="font-light text-[15px] text-[#2C3947] tracking-tight">
            A practical talk on component APIs, accessibility, and shipping
            faster. A practical talk on component APIs, accessibility, and
            shipping faster.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex grid-cols-2 gap-2  items-center justify-center text-xs">
            <div className="flex items-center justify-center gap-1.5">
              <IoPersonOutline size={12} />
              <p>Shishir</p>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CiCalendar  size={12}/>
              <p>June 15, 2026</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
