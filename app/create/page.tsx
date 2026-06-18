"use client";
import Tiptap from "@/components/TipTap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaFileImage, FaLocationArrow } from "react-icons/fa";
import { LuArrowLeft, LuX } from "react-icons/lu";

const handleSubmit = () => {
  toast.success("Posted Successfully");
};

const Page = () => {
  const [coverImage, setCoverImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setPreviewImage(URL.createObjectURL(file));
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
    );

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Image upload failed");
      }

      setCoverImage(data.secure_url);
      toast.success("Cover image uploaded");
    } catch (error) {
      setPreviewImage("");
      setCoverImage("");
      toast.error(
        error instanceof Error ? error.message : "Image upload failed"
      );
    } finally {
      setIsUploading(false);
    }
  };

  const removeCoverImage = () => {
    setPreviewImage("");
    setCoverImage("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
        <label className="text-zinc-500 border-dashed border-2 w-full h-72 rounded-xl border-zinc-300 mb-2 tracking-normal items-center justify-center flex flex-col gap-2 text-sm cursor-pointer relative overflow-hidden">
          {previewImage ? (
            <>
              <img
                src={previewImage}
                alt="Cover preview"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                className="absolute cursor-pointer bg-red-300 rounded-full p-4 shadow hidden hover:block"
                onClick={(event) => {
                  event.preventDefault();
                  removeCoverImage();
                }}
              >
                <LuX className="size-6 text-white" />
              </button>
              {isUploading && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-medium">
                  Uploading...
                </span>
              )}
            </>
          ) : (
            <>
              <FaFileImage size={30} className="text-zinc-400" />
              <span className="font-medium">No cover image selected</span>
            </>
          )}
          <Input
            ref={fileInputRef}
            className="hidden"
            required
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <input type="hidden" name="coverImage" value={coverImage} />
      </div>
      <div className="mb-5">
        <p className="font-medium text-xl mb-1">Content</p>
        <Tiptap />
      </div>
      <div className="flex  items-center justify-center">
        <Button
          variant="default"
          className="h-11 px-6 cursor-pointer gap-2 bg-foreground text-base font-semibold shadow-sm hover:bg-foreground/90"
          onClick={handleSubmit}
        >
          Post Blog
          <FaLocationArrow size={4} />
        </Button>
      </div>
    </article>
  );
};

export default Page;
