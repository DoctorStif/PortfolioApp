"use client";

import AnimateIn from "@/components/AnimateIn";
import { StatsItem, ActionButton } from "./about/AboutComponents";
import {
  BriefcaseIcon,
  ProjectIcon,
  ClientsIcon,
  ArrowRightIcon,
  DownloadIcon,
} from "./about/AboutIcons";
import ProfileImage from "./about/ProfileImage";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <AnimateIn from="bottom">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white text-gray-900 transition-colors duration-300">
            About Me
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateIn from="left" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg dark:text-gray-300 text-gray-700 transition-colors duration-300">
                I&apos;m a full-stack developer with a passion for building
                modern web applications. With expertise in React, Next.js,
                Node.js, and other cutting-edge technologies, I create efficient
                and scalable solutions for complex problems.
              </p>
              <p className="text-lg dark:text-gray-300 text-gray-700 transition-colors duration-300">
                My journey in web development started with a curiosity for
                creating interactive experiences. Today, I specialize in
                building performant applications that deliver exceptional user
                experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <StatsItem
                  icon={<BriefcaseIcon />}
                  text="5+ Years Experience"
                />
                <StatsItem
                  icon={<ProjectIcon />}
                  text="50+ Projects Completed"
                />
                <StatsItem icon={<ClientsIcon />} text="20+ Happy Clients" />
              </div>
              <div className="flex gap-4 pt-6">
                <ActionButton
                  href="#contact"
                  variant="primary"
                  text="Get in Touch"
                  icon={<ArrowRightIcon />}
                />
                <ActionButton
                  href="/resume.pdf"
                  variant="secondary"
                  text="Download CV"
                  icon={<DownloadIcon />}
                  external
                />
              </div>
            </div>
          </AnimateIn>
          <AnimateIn from="right" delay={0.4}>
            <ProfileImage />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
