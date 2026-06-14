import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

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
          <CardTitle className="text-[22px] font-semibold text-[#2C3947]">
            How to Find a Baddie: A Totally Serious Guide
          </CardTitle>
          <CardDescription className="font-light text-[15px]">
            A practical talk on component APIs, accessibility, and shipping
            faster. A practical talk on component APIs, accessibility, and
            shipping faster.
          </CardDescription>
        </CardHeader>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
