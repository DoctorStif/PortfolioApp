interface BlogPostMetaProps {
  date: string;
  readTime: string;
}

export default function BlogPostMeta({ date, readTime }: BlogPostMetaProps) {
  return (
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
      <span>{date}</span>
      <span className="mx-2">•</span>
      <span>{readTime} read</span>
    </div>
  );
}
