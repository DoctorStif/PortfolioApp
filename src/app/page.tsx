"use client";

import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import SkillCard from "@/components/SkillCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogPostCard from "@/components/BlogPostCard";
import ParallaxSection from "@/components/ParallaxSection";
import AboutSection from "@/components/AboutSection";
import DottedBackground from "@/components/DottedBackground";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";

export default function Home() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <DottedBackground />
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900/30 to-black/60" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn from="bottom" delay={0.2}>
              <div className="text-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
                  Hi, I&apos;m <span className="text-primary-400">Furkan</span>
                </h1>
                <p className="mt-6 text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
                  A passionate full-stack developer crafting beautiful and
                  functional web experiences.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#projects"
                    className="px-8 py-4 border-2 border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors text-lg"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white/80 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Rest of the sections with more transparent overlays */}
        <div className="relative z-10">
          <div className="dark:bg-gray-900/40 bg-gray-900/10">
            <AboutSection />
          </div>

          <div className="dark:bg-black/40 bg-black/10">
            {/* Skills Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <AnimateIn from="bottom">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    My Skills
                  </h2>
                </AnimateIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill, index) => (
                    <AnimateIn key={skill.name} delay={index * 0.1}>
                      <SkillCard {...skill} />
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="dark:bg-gray-900/40 bg-gray-900/10">
            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <AnimateIn from="bottom">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    My Projects
                  </h2>
                </AnimateIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <AnimateIn key={project.title} delay={index * 0.1}>
                      <ProjectCard {...project} />
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="dark:bg-black/40 bg-black/10">
            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <AnimateIn from="bottom">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    What People Say
                  </h2>
                </AnimateIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <AnimateIn key={testimonial.author} delay={index * 0.1}>
                      <TestimonialCard {...testimonial} />
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="dark:bg-gray-900/40 bg-gray-900/10">
            {/* Blog Section */}
            <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <ParallaxSection>
                  <AnimateIn from="bottom">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4">
                        Latest Blog Posts
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-8">
                        Thoughts, tutorials, and insights about web development
                      </p>
                      <Link
                        href="/blog"
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        View all posts
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </AnimateIn>
                </ParallaxSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recentPosts.map((post, index) => (
                    <ParallaxSection key={post.slug} offset={30 + index * 10}>
                      <AnimateIn delay={index * 0.1}>
                        <BlogPostCard {...post} />
                      </AnimateIn>
                    </ParallaxSection>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="dark:bg-black/40 bg-black/10">
            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <AnimateIn from="bottom">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    Get in Touch
                  </h2>
                </AnimateIn>
                <AnimateIn from="bottom" delay={0.2}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8">
                    <ContactForm />
                  </div>
                  <Footer />
                </AnimateIn>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
