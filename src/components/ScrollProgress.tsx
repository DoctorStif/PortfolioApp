"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useOptimistic } from "react";

export default function ScrollProgress() {
  const { progress, isVisible } = useScrollProgress();
  const [optimisticProgress] = useOptimistic(progress);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 flex items-center justify-center z-50"
        >
          <svg className="w-12 h-12 transform -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              className="stroke-gray-200 dark:stroke-gray-700"
              strokeWidth="2"
              fill="none"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              className="stroke-primary-500"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: optimisticProgress / 100 }}
              transition={{ duration: 0.1, ease: "linear" }}
              style={{
                strokeDasharray: "126",
                strokeDashoffset: "126",
              }}
            />
          </svg>
          <motion.span
            className="absolute text-sm font-medium text-primary-600 dark:text-primary-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {Math.round(optimisticProgress)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
