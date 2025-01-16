"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import { motion } from "framer-motion";
import HeadingItem from "./toc/HeadingItem";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const updateHeadings = useCallback(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
      .filter((element) => element.textContent)
      .map((element, index) => {
        const text = element.textContent || "";
        if (!element.id) {
          element.id = `heading-${index}-${text
            .toLowerCase()
            .replace(/\s+/g, "-")}`;
        }
        return {
          id: element.id,
          text: text,
          level: parseInt(element.tagName[1]),
        };
      });

    startTransition(() => {
      setHeadings(elements);
    });
  }, []);

  useEffect(() => {
    updateHeadings();
    window.addEventListener("resize", updateHeadings);
    return () => window.removeEventListener("resize", updateHeadings);
  }, [updateHeadings]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTransition(() => {
              setActiveId(entry.target.id);
            });
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  if (headings.length === 0) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden xl:block fixed right-8 top-32 w-64 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
    >
      <h4 className="text-lg font-semibold mb-4">Table of Contents</h4>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <HeadingItem
            key={heading.id}
            {...heading}
            activeId={activeId}
            isPending={isPending}
            onClick={scrollToHeading}
          />
        ))}
      </ul>
    </motion.nav>
  );
}
