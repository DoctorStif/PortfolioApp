"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export default function TestimonialCard({
  content,
  author,
  role,
  company,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={image} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {author}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {role} at {company}
          </p>
        </div>
      </div>
      <div className="relative">
        <svg
          className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200 dark:text-gray-700"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative text-gray-600 dark:text-gray-300 mt-4 pl-8">
          {content}
        </p>
      </div>
    </motion.div>
  );
}
