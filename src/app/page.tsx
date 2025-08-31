import Link from "next/link";
import { projects } from "@/data/projects";
import { personalInfo } from "@/data/personal";
import { siteConfig } from "@/data/site";
import { blogPosts } from "@/data/posts";
import { ProjectCard } from "@/components/project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured);
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 flex flex-col gap-4 text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-gray-900 dark:text-white">
                {siteConfig.hero.title}
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                {siteConfig.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-lg text-sm font-semibold h-10 px-6 py-2 bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] text-white hover:from-[var(--primary-600)] hover:to-[var(--primary-700)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-500)] transition-all duration-300 transform hover:scale-105 btn-glow"
                >
                  View Projects
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center justify-center rounded-lg text-sm font-semibold h-10 px-6 py-2 border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                >
                  View Resume
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-400)] to-[var(--primary-600)] rounded-full blur-2xl opacity-20 dark:opacity-30"></div>
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl transform md:-rotate-3">
                <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${siteConfig.hero.image}")` }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-900/70">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white tracking-tight">{siteConfig.sections.projects.title}</h2>
          
          <div className="relative max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {featuredProjects.map((project) => (
                  <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <ProjectCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg text-sm font-semibold h-10 px-6 py-2 bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] text-white hover:from-[var(--primary-600)] hover:to-[var(--primary-700)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-500)] transition-all duration-300 transform hover:scale-105 btn-glow"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">{siteConfig.sections.about.title}</h2>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {personalInfo.bio.long[0]}
          </p>
          <Link className="mt-6 inline-block font-semibold text-[var(--primary-600)] dark:text-[var(--primary-400)] hover:underline group" href="/about">
            Read More <span className="ml-1 transition-transform duration-300 inline-block group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white dark:bg-gray-900/70">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white tracking-tight">{siteConfig.sections.blog.title}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredPosts.map((post) => (
              <Link key={post.id} className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 card-hover" href={`/posts/${post.slug}`}>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{post.date}</p>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{siteConfig.sections.contact.title}</h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{siteConfig.sections.contact.subtitle}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg text-sm font-semibold h-12 px-8 py-3 bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] text-white hover:from-[var(--primary-600)] hover:to-[var(--primary-700)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-500)] transition-all duration-300 transform hover:scale-105 btn-glow"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
