"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";

export default function DeleteBlogButton({
  blogId,
  blogUserId,
}: {
  blogId: number;
  blogUserId: number;
}) {
  const router = useRouter();
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const checkOwner = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      const res = await fetch("/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) return;

      const data = await res.json();

      setIsOwner(data.user.id === blogUserId);
    };

    checkOwner();
  }, [blogUserId]);

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this blog?");

    if (!confirmed) return;

    const token = localStorage.getItem("token");

    const res = await fetch(`/api/blogs/${blogId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const data = await res.json();
      alert(data.message);
      return;
    }

    router.push("/");
    router.refresh();
  };

  if (!isOwner) return null;

  return (
    <button
      onClick={handleDelete}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-red-400 hover:text-red-500"
      aria-label="Delete blog"
    >
      <FaTrashAlt size={16} />
    </button>
  );
}
