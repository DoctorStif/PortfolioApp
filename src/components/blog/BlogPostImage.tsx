"use client";

import Image from "next/image";

interface BlogPostImageProps {
  coverImage: string;
  title: string;
}

export default function BlogPostImage({
  coverImage,
  title,
}: BlogPostImageProps) {
  return (
    <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
      <Image
        src={coverImage}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </div>
  );
}
