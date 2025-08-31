import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover h-full">
      <div className="w-full h-56 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${project.image}")` }}></div>
      <div className="p-8 flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-5 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs font-semibold bg-[var(--primary-100)] text-[var(--primary-800)] dark:bg-[var(--primary-900)]/70 dark:text-[var(--primary-300)] px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          className="font-semibold text-[var(--primary-600)] dark:text-[var(--primary-400)] hover:underline group inline-flex items-center mt-auto"
          href={project.link}
        >
          View Project <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
