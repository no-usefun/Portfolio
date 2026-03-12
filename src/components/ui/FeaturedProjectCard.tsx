import ProjectCarousel from "./ProjectCarousel";

import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  overview: string;
  problem: string;
  approach: string;
  features: string[];
  tech: string[];
  github: string;
  demo: string;
  image: string[];
}

export default function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-6"
    >
      {/* IMAGE */}

      <ProjectCarousel images={project.image} />

      {/* TITLE */}

      <h3 className="text-2xl font-semibold">{project.title}</h3>

      {/* OVERVIEW */}

      <div>
        <h4 className="text-sm font-semibold text-neutral-300 mb-1">
          Overview
        </h4>
        <p className="text-neutral-400 text-sm">{project.overview}</p>
      </div>

      {/* PROBLEM */}

      <div>
        <h4 className="text-sm font-semibold text-neutral-300 mb-1">Problem</h4>
        <p className="text-neutral-400 text-sm">{project.problem}</p>
      </div>

      {/* APPROACH */}

      <div>
        <h4 className="text-sm font-semibold text-neutral-300 mb-1">
          Approach
        </h4>
        <p className="text-neutral-400 text-sm">{project.approach}</p>
      </div>

      {/* FEATURES */}

      <div>
        <h4 className="text-sm font-semibold text-neutral-300 mb-2">
          Key Features
        </h4>

        <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* TECH STACK */}

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-blue-600 border border-blue-700/70 px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* LINKS */}

      <div className="flex gap-6 pt-2">
        <a
          href={project.github}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}
