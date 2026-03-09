import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featuredProjects = [
  {
    id: "visualizer",
    title: "Full Stack Algorithm Visualizer",
    overview:
      "Interactive platform visualizing sorting algorithms step-by-step with execution tracing.",
    problem:
      "Students often struggle to understand algorithm execution flow from static code examples.",
    approach:
      "Built a full-stack visualization system where the backend emits algorithm execution steps and the frontend renders them in real time.",
    features: [
      "Step-by-step sorting visualization",
      "Code line highlighting",
      "Execution timeline",
      "Speed controls",
    ],
    tech: ["React", "TypeScript", "Spring Boot", "Tailwind"],
    github: "#",
    demo: "#",
    image: "/projects/visualizer.png",
  },
  {
    id: "compare",
    title: "Sorting Algorithm Comparison Tool",
    overview:
      "Compares multiple sorting algorithms simultaneously with visual performance feedback.",
    problem:
      "It is difficult to intuitively compare algorithm performance through theoretical complexity alone.",
    approach:
      "Implemented side-by-side algorithm execution with synchronized visual timelines.",
    features: [
      "Parallel algorithm execution",
      "Performance metrics",
      "Visual comparison graphs",
    ],
    tech: ["React", "TypeScript", "Java"],
    github: "#",
    demo: "#",
    image: "/projects/sorting.png",
  },
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(featuredProjects[0]);

  return (
    <section className="grid md:grid-cols-[250px_1fr] gap-12 items-start">
      {/* LEFT PROJECT LIST */}

      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col gap-4 w-full max-w-md">
          {featuredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`py-4 w-full text-center p-6 rounded-md border transition-all
        ${
          activeProject.id === project.id
            ? "border-blue-500 bg-neutral-900"
            : "border-neutral-800 hover:border-blue-400 hover:translate-x-1"
        }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT CASE STUDY PANEL */}

      <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900 h-[580px] w-[700px] overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            {/* IMAGE */}

            <img
              src={activeProject.image}
              className="rounded-lg border border-neutral-800 w-full"
            />

            {/* TITLE */}

            <h3 className="text-2xl font-semibold">{activeProject.title}</h3>

            {/* OVERVIEW */}

            <div>
              <h4 className="font-medium mb-1">Overview</h4>
              <p className="text-neutral-400 text-sm">
                {activeProject.overview}
              </p>
            </div>

            {/* PROBLEM */}

            <div>
              <h4 className="font-medium mb-1">Problem</h4>
              <p className="text-neutral-400 text-sm">
                {activeProject.problem}
              </p>
            </div>

            {/* APPROACH */}

            <div>
              <h4 className="font-medium mb-1">Approach</h4>
              <p className="text-neutral-400 text-sm">
                {activeProject.approach}
              </p>
            </div>

            {/* FEATURES */}

            <div>
              <h4 className="font-medium mb-2">Key Features</h4>

              <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                {activeProject.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            {/* TECH STACK */}

            <div className="flex flex-wrap gap-2">
              {activeProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-neutral-800 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINKS */}

            <div className="flex gap-6 pt-2">
              <a
                href={activeProject.github}
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>

              <a
                href={activeProject.demo}
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
