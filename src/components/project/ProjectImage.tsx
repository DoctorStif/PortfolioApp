"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectImageProps {
  imageUrl: string;
  title: string;
  projectUrl: string;
  githubUrl?: string;
  isHovered: boolean;
}

export default function ProjectImage({
  imageUrl,
  title,
  projectUrl,
  githubUrl,
  isHovered,
}: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative h-56 w-full bg-gray-200 dark:bg-gray-700">
      {!imageError ? (
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
          priority
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <svg
            className="w-12 h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-center h-full space-x-4">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Project
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
