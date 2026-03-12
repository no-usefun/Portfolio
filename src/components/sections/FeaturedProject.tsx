import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";

const featuredProjects = [
  {
    id: "visualizer",
    title: "Full Stack Algorithm Visualizer",
    overview:
      "An interactive platform that visualizes sorting algorithms step-by-step while synchronizing code execution with real-time visual feedback.",
    problem:
      "Students often struggle to understand algorithm execution flow when learning from static code examples or theoretical complexity analysis.",
    approach:
      "Developed a full-stack system where a Spring Boot backend executes algorithms and emits structured execution steps through REST APIs, while a React frontend renders array transformations and highlights corresponding code lines in real time.",
    features: [
      "Step-by-step sorting visualization",
      "Code line highlighting synchronized with execution",
      "Execution timeline and playback controls",
      "Speed adjustment for animations",
      "Support for multiple sorting algorithms",
    ],
    tech: ["React", "TypeScript", "Spring Boot", "Java", "Tailwind CSS"],
    github: "#",
    demo: "#",
    image: "/projects/visualizer.png",
  },
  {
    id: "plagiarism-checker",
    title: "AI Plagiarism Checker & AI Text Detector",
    overview:
      "A machine learning web application that analyzes documents to detect plagiarism and AI-generated text using similarity analysis and classification models.",
    problem:
      "Traditional plagiarism tools often struggle to detect paraphrased or AI-written content, making originality verification difficult.",
    approach:
      "Developed a Flask-based backend that processes uploaded documents, converts text into vector representations, and applies machine learning models to evaluate similarity and detect AI-generated content.",
    features: [
      "Plagiarism detection with similarity scoring",
      "AI-generated text classification",
      "PDF and DOCX document support",
      "Highlighted matched sections",
      "Web-based text analysis interface",
    ],
    tech: ["Python", "Flask", "LightGBM", "HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    image: "/projects/plagiarism.png",
  },
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(featuredProjects[0]);

  return (
    <SectionContainer id="featured-projects" title="Featured Projects">
      <div className="w-full max-w-7xl mx-auto flex flex-col -mt-10">
        <div className="grid md:grid-cols-[260px_1fr] gap-15 items-start">
          {/* PROJECT SELECTOR */}

          <div className="flex flex-col gap-18">
            {featuredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`h-[160px] border rounded-lg flex items-center justify-center text-center text-sm font-medium px-4 transition
                ${
                  activeProject.id === project.id
                    ? "border-blue-500 bg-neutral-900 text-white"
                    : "border-neutral-800 text-neutral-400 hover:border-blue-400 hover:text-white"
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* CASE STUDY PANEL */}

          <div className="border border-neutral-800 rounded-xl bg-neutral-900 p-6 h-[500px] overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-6"
              >
                {/* IMAGE */}

                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="rounded-lg border border-neutral-800 w-full aspect-video object-cover hover:scale-[1.02] transition"
                />

                {/* TITLE */}

                <h3 className="text-2xl font-semibold">
                  {activeProject.title}
                </h3>

                {/* OVERVIEW */}

                <div>
                  <h4 className="text-sm font-semibold text-neutral-300 mb-1">
                    Overview
                  </h4>
                  <p className="text-neutral-400 text-sm">
                    {activeProject.overview}
                  </p>
                </div>

                {/* PROBLEM */}

                <div>
                  <h4 className="text-sm font-semibold text-neutral-300 mb-1">
                    Problem
                  </h4>
                  <p className="text-neutral-400 text-sm">
                    {activeProject.problem}
                  </p>
                </div>

                {/* APPROACH */}

                <div>
                  <h4 className="text-sm font-semibold text-neutral-300 mb-1">
                    Approach
                  </h4>
                  <p className="text-neutral-400 text-sm">
                    {activeProject.approach}
                  </p>
                </div>

                {/* FEATURES */}

                <div>
                  <h4 className="text-sm font-semibold text-neutral-300 mb-2">
                    Key Features
                  </h4>

                  <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                    {activeProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* TECH STACK */}

                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-neutral-800/80 border border-neutral-700 px-2 py-1 rounded-md"
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
        </div>
      </div>
    </SectionContainer>
  );
}
