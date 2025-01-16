import { motion } from "framer-motion";

interface HeadingItemProps {
  id: string;
  text: string;
  level: number;
  activeId: string;
  isPending: boolean;
  onClick: (id: string) => void;
}

export default function HeadingItem({
  id,
  text,
  level,
  activeId,
  isPending,
  onClick,
}: HeadingItemProps) {
  return (
    <motion.li
      className={`cursor-pointer transition-colors ${
        level === 2 ? "ml-0" : level === 3 ? "ml-4" : "ml-8"
      } ${isPending ? "opacity-50" : ""}`}
      whileHover={{ x: 4 }}
    >
      <button
        onClick={() => onClick(id)}
        className={`text-left w-full py-1 ${
          activeId === id
            ? "text-primary-600 dark:text-primary-400 font-medium"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
        }`}
      >
        {text}
      </button>
    </motion.li>
  );
}
