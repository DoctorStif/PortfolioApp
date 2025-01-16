"use client";

import BlogPostCard from "@/components/BlogPostCard";
import BlogSearch from "@/components/BlogSearch";
import DottedBackground from "@/components/DottedBackground";
import { blogPosts } from "@/data/blog-posts";
import { useState } from "react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get unique categories
  const categories = Array.from(
    new Set(blogPosts.flatMap((post) => post.categories))
  );

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen">
      <DottedBackground />
      <div className="absolute inset-0 dark:bg-gray-900/40 bg-gray-900/10" />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-12 dark:text-white text-gray-900">
            Blog Posts
          </h1>
          <BlogSearch
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg dark:text-gray-400 text-gray-600">
                No blog posts found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
