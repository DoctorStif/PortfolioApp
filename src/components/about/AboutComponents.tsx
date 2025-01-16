interface StatsItemProps {
  icon: React.ReactNode;
  text: string;
}

export function StatsItem({ icon, text }: StatsItemProps) {
  return (
    <div className="flex items-center space-x-2 transition-colors duration-300">
      <div className="w-6 h-6 dark:text-primary-400 text-primary-600">
        {icon}
      </div>
      <span className="dark:text-gray-300 text-gray-700 transition-colors duration-300">
        {text}
      </span>
    </div>
  );
}

interface ActionButtonProps {
  href: string;
  variant: "primary" | "secondary";
  text: string;
  icon: React.ReactNode;
  external?: boolean;
}

export function ActionButton({
  href,
  variant,
  text,
  icon,
  external,
}: ActionButtonProps) {
  const baseClasses =
    "inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300";
  const variantClasses = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary:
      "border dark:border-gray-600 border-gray-300 dark:text-gray-300 text-gray-700 dark:hover:border-gray-500 hover:border-gray-400 transition-colors duration-300",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...(external && { target: "_blank" })}
    >
      {text}
      <div className="w-5 h-5 ml-2">{icon}</div>
    </a>
  );
}
