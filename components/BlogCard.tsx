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

type BlogCardProps = {
  title: string;
  description: string;
  author: string;
  date: string;
  imageSrc: string;
};

const BlogCard = ({
  title,
  description,
  author,
  date,
  imageSrc,
}: BlogCardProps) => {
  return (
    <div className="w-full">
      <Card className="group relative mx-auto min-h-full w-full max-w-md cursor-pointer gap-3 pt-0">
        <div className="aspect-video overflow-hidden bg-muted">
          <Image
            src={imageSrc}
            width={400}
            height={400}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <CardHeader className="gap-2">
          <CardTitle className="line-clamp-2 text-xl font-semibold leading-tight text-foreground">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-[15px] leading-5 tracking-normal text-[#52525b]">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto text-[#71717a]">
          <div className="flex w-full items-center justify-between gap-3 text-[12px]">
            <div className="flex items-center gap-1.5">
              <IoPersonOutline size={14} />
              <p>{author}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <CiCalendar size={14} />
              <p>{date}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
