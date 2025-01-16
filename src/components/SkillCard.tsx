"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SkillCardProps {
  name: string;
  icon: string;
  proficiency: number;
  color: string;
  description: string;
}

export default function SkillCard({
  name,
  icon,
  proficiency,
  color,
  description,
}: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3" role="img" aria-label={name}>
          {icon}
        </span>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 min-h-[40px]">
        {description}
      </p>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${proficiency}%` }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Proficiency
        </span>
        <motion.span
          className="text-sm font-medium"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {proficiency}%
        </motion.span>
      </div>
    </div>
  );
}
