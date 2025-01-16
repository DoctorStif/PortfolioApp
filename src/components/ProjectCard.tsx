"use client";

import { useState } from "react";
import ProjectImage from "./project/ProjectImage";
import ProjectDetails from "./project/ProjectDetails";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 h-[32rem] flex flex-col transform hover:[transform:perspective(1000px)_rotateX(-2deg)_translateY(-10px)] origin-bottom will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProjectImage
        imageUrl={imageUrl}
        title={title}
        projectUrl={projectUrl}
        githubUrl={githubUrl}
        isHovered={isHovered}
      />
      <ProjectDetails
        title={title}
        description={description}
        technologies={technologies}
      />
    </div>
  );
}
