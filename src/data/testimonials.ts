export interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    content:
      "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp",
    image: "/images/testimonials/1.jpg",
  },
  {
    content:
      "Working with them was a great experience. They have a deep understanding of modern web technologies and always find elegant solutions.",
    author: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    image: "/images/testimonials/2.jpg",
  },
  {
    content:
      "Their expertise in full-stack development helped us launch our product ahead of schedule. A true professional who goes above and beyond.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "StartupX",
    image: "/images/testimonials/3.jpg",
  },
];
