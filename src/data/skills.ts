export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  color: string;
  description: string;
}

export const skills: Skill[] = [
  {
    name: "Frontend Development",
    icon: "🎨",
    proficiency: 90,
    color: "#3B82F6", // Blue
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    proficiency: 85,
    color: "#10B981", // Green
    description: "Creating scalable server-side applications and RESTful APIs.",
  },
  {
    name: "Mobile Development",
    icon: "📱",
    proficiency: 80,
    color: "#8B5CF6", // Purple
    description:
      "Developing cross-platform mobile applications with React Native.",
  },
  {
    name: "UI/UX Design",
    icon: "✨",
    proficiency: 75,
    color: "#F59E0B", // Yellow
    description:
      "Designing intuitive and user-friendly interfaces with modern design principles.",
  },
  {
    name: "DevOps",
    icon: "🚀",
    proficiency: 70,
    color: "#EF4444", // Red
    description: "Managing deployment pipelines and cloud infrastructure.",
  },
  {
    name: "Database Management",
    icon: "🗄️",
    proficiency: 85,
    color: "#6366F1", // Indigo
    description: "Designing and optimizing database schemas and queries.",
  },
];
