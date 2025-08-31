"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/personal";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between whitespace-nowrap">
        <Link href="/" className="flex items-center gap-2 text-gray-900 dark:text-white">
          <svg className="h-6 w-6 text-[var(--primary-600)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
          </svg>
          <h2 className="text-lg font-bold tracking-tight">{personalInfo.name}</h2>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--primary-600)] dark:hover:text-[var(--primary-400)] transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--primary-600)] dark:hover:text-[var(--primary-400)] transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/posts"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--primary-600)] dark:hover:text-[var(--primary-400)] transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg text-sm font-semibold h-8 px-4 py-1 bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] text-white hover:from-[var(--primary-600)] hover:to-[var(--primary-700)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-500)] transition-all duration-300 transform hover:scale-105 btn-glow"
          >
            Contact Me
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-md p-1.5 text-gray-600 dark:text-gray-300 hover:text-[var(--primary-600)] dark:hover:text-[var(--primary-400)] transition-colors duration-300"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-md p-1.5 text-gray-600 dark:text-gray-300 hover:text-[var(--primary-600)] dark:hover:text-[var(--primary-400)] transition-colors duration-300"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <div className="px-6 py-3 space-y-2">
            <Link
              href="/about"
              className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--primary-600)] dark:hover:text-[var(--primary-400)] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--primary-600)] dark:hover:text-[var(--primary-400)] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/posts"
              className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--primary-600)] dark:hover:text-[var(--primary-400)] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg text-sm font-semibold h-8 px-4 py-1 bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] text-white hover:from-[var(--primary-600)] hover:to-[var(--primary-700)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-500)] transition-all duration-300 transform hover:scale-105 btn-glow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
