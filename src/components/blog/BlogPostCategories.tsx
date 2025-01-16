interface BlogPostCategoriesProps {
  categories: string[];
}

export default function BlogPostCategories({
  categories,
}: BlogPostCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {categories.map((category) => (
        <span
          key={category}
          className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
