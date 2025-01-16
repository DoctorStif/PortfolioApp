"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import NavLinks from "./navbar/NavLinks";
import ThemeToggle from "./navbar/ThemeToggle";
import MobileMenu, { MobileMenuButton } from "./navbar/MobileMenu";
import { Logo } from "./navbar/NavIcons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") {
        setActiveSection("");
        return;
      }

      const sections = ["about", "projects", "contact"];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }

      let maxVisibleSection = "";
      let maxVisibleArea = 0;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

          if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight;
            maxVisibleSection = section;
          }
        }
      }

      setActiveSection(maxVisibleSection || "home");
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavigation = async (sectionId: string) => {
    if (pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        if (sectionId !== "/") {
          const element = document.getElementById(sectionId.substring(1));
          element?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      if (sectionId !== "/") {
        const element = document.getElementById(sectionId.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const getLinkClasses = (section: string) => {
    const baseClasses = "transition-colors relative";
    const textClasses =
      "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white";

    let isActive = false;
    if (section === "/") {
      isActive = activeSection === "home";
    } else {
      isActive = activeSection === section.substring(1);
    }

    return `${baseClasses} ${textClasses} ${
      isActive
        ? "text-primary-600 dark:text-primary-400 font-medium after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary-600 dark:after:bg-primary-400"
        : ""
    }`;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks
              activeSection={activeSection}
              handleNavigation={handleNavigation}
              getLinkClasses={getLinkClasses}
            />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <MobileMenuButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
        handleNavigation={handleNavigation}
        getLinkClasses={getLinkClasses}
      />
    </nav>
  );
}
