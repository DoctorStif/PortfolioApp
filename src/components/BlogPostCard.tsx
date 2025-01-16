"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogPostImage from "./blog/BlogPostImage";
import BlogPostCategories from "./blog/BlogPostCategories";
import BlogPostMeta from "./blog/BlogPostMeta";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  coverImage: string;
  categories: string[];
}

export default function BlogPostCard({
  title,
  excerpt,
  date,
  readTime,
  slug,
  coverImage,
  categories,
}: BlogPostCardProps) {
  return (
    <motion.div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:[transform:perspective(1000px)_rotateX(-2deg)_translateY(-10px)] origin-bottom will-change-transform">
      <Link href={`/blog/${slug}`} className="block h-full">
        <BlogPostImage coverImage={coverImage} title={title} />
        <div className="p-6 flex flex-col">
          <BlogPostCategories categories={categories} />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
            {excerpt}
          </p>
          <BlogPostMeta date={date} readTime={readTime} />
        </div>
      </Link>
    </motion.div>
  );
}
