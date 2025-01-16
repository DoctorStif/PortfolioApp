export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  coverImage: string;
  categories: string[];
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Learn how to create performant and scalable web applications using Next.js and React. We'll cover best practices, optimization techniques, and advanced features.",
    date: "2024-01-15",
    readTime: "8 min",
    slug: "building-scalable-web-applications-nextjs",
    coverImage: "/images/blog/1.jpg",
    categories: ["Next.js", "React", "Web Development"],
  },
  {
    title: "The Power of TypeScript in Modern Development",
    excerpt:
      "Discover how TypeScript can improve your development workflow, catch errors early, and make your code more maintainable.",
    date: "2024-01-10",
    readTime: "6 min",
    slug: "power-of-typescript",
    coverImage: "/images/blog/2.jpg",
    categories: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    title: "Mastering State Management in React",
    excerpt:
      "An in-depth guide to managing state in React applications. From useState and useContext to Redux and Zustand.",
    date: "2024-01-05",
    readTime: "10 min",
    slug: "mastering-state-management-react",
    coverImage: "/images/blog/3.jpg",
    categories: ["React", "State Management", "Frontend"],
  },
];
