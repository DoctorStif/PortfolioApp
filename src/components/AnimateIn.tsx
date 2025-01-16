"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  from?: "bottom" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 20,
    x: 0,
  },
  hiddenLeft: {
    opacity: 0,
    x: -50,
    y: 0,
  },
  hiddenRight: {
    opacity: 0,
    x: 50,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

export default function AnimateIn({
  children,
  className = "",
  from = "bottom",
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={
        from === "bottom"
          ? "hidden"
          : from === "left"
          ? "hiddenLeft"
          : "hiddenRight"
      }
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
