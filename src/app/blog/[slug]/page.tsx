"use client";

import { blogPosts } from "@/data/blog-posts";
import ClientBlogPost from "./ClientBlogPost";
import DottedBackground from "@/components/DottedBackground";
import { use } from "react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
      </div>
    );
  }

  return (
    <>
      <DottedBackground />
      <div className="min-h-screen relative">
        <div className="relative z-10">
          <div className="dark:bg-gray-900/40 bg-gray-900/10">
            <ClientBlogPost post={post} />
          </div>
        </div>
      </div>
    </>
  );
}
