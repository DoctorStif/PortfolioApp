"use client";

import { BlogPost } from "@/data/blog-posts";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useOptimistic, useCallback, useState, useTransition } from "react";

interface RelatedPostsProps {
  currentPost: BlogPost;
  posts: BlogPost[];
}

export default function RelatedPosts({
  currentPost,
  posts,
}: RelatedPostsProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isPending, startTransition] = useTransition();
  const [optimisticLoadedImages, addLoadedImage] = useOptimistic<
    Set<string>,
    string
  >(loadedImages, (state, newImage) => new Set([...state, newImage]));

  const handleImageLoad = useCallback(
    (imageUrl: string) => {
      startTransition(() => {
        setLoadedImages((prev) => new Set([...prev, imageUrl]));
        addLoadedImage(imageUrl);
      });
    },
    [addLoadedImage]
  );

  const relatedPosts = posts
    .filter((post) => post.slug !== currentPost.slug)
    .filter((post) =>
      post.categories.some((category) =>
        currentPost.categories.includes(category)
      )
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-2xl font-bold mb-8">Related Posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`} className="block group">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className={`object-cover transition-all duration-300 ${
                    optimisticLoadedImages.has(post.coverImage)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  } group-hover:scale-105 ${isPending ? "opacity-50" : ""}`}
                  onLoad={() => handleImageLoad(post.coverImage)}
                />
                {!optimisticLoadedImages.has(post.coverImage) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime} read</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
