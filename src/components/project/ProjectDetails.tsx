interface ProjectDetailsProps {
  title: string;
  description: string;
  technologies: string[];
}

export default function ProjectDetails({
  title,
  description,
  technologies,
}: ProjectDetailsProps) {
  return (
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
