export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Modern E-commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory, user authentication, and payment processing.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    imageUrl: "/images/projects/1.jpg",
    projectUrl: "https://ecommerce.nextdomain.com",
    githubUrl: "https://github.com/DoctorStif",
  },
  {
    title: "AI-Powered Chat Application",
    description:
      "Real-time chat application with AI-powered features like message translation and sentiment analysis.",
    technologies: ["React", "Node.js", "Socket.IO", "OpenAI API"],
    imageUrl: "/images/projects/2.jpg",
    projectUrl: "https://chat.nextdomain.com",
    githubUrl: "https://github.com/DoctorStif",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A collaborative task management platform with real-time updates and team collaboration features.",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    imageUrl: "/images/projects/3.jpg",
    projectUrl: "https://tasks.nextdomain.com",
    githubUrl: "https://github.com/DoctorStif",
  },
];
