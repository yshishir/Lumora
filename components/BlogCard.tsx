import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const BlogCard = () => {
  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0 cursor-pointer">
        <div className="absolute inset-0 z-30 aspect-video " />
        <Image
          src="/blog.jpg"
          width={400}
          height={400}
          alt="Blog Image"
          className="relative z-20 aspect-video w-full object-fill  "
        />
        <CardHeader>
          <CardTitle className="text-[22px] font-semibold">How to Find a Baddie: A Totally Serious Guide</CardTitle>
          <CardDescription className="font-medium text-[15px]">
            A practical talk on component APIs, accessibility, and shipping
            faster. A practical talk on component APIs, accessibility, and shipping
            faster.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
