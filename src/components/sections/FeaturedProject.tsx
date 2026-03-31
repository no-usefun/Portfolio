import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import FeaturedProjectCard from "../ui/FeaturedProjectCard";

const base = import.meta.env.BASE_URL;

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
    github: "https://github.com/no-usefun/DATA-VISUALIZER",
    demo: "https://data-visualizer-kappa.vercel.app/",
    image: [
      `${base}projects/v1.png`,
      `${base}projects/v2.png`,
      `${base}projects/v3.png`,
      `${base}projects/v4.png`,
    ],
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
    github: "https://github.com/no-usefun/AI_plagarism_Checker",
    demo: "https://ai-plagarism-checker-3jzr.onrender.com/",
    image: [
      `${base}projects/p2.png`,
      `${base}projects/p1.png`,
      `${base}projects/p3.png`,
      `${base}projects/p4.png`,
    ],
  },
];

type Project = {
  id: string;
  title: string;
  overview: string;
  problem: string;
  approach: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  image: string[];
};

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const isExpanded = !!activeProject;

  return (
    <SectionContainer id="featured-projects" title="Featured Projects">
      <div className="w-full max-w-7xl mx-auto items-center">
        <motion.div
          layout
          className={`grid ${isExpanded ? "md:grid-cols-[auto_1fr]" : "grid-cols-1"} gap-10 items-start`}
        >
          {/* LEFT SIDE */}
          <div className="w-fit max-w-4xl mx-auto">
            <motion.div
              layout
              className={`flex flex-col gap-8 ${isExpanded ? "items-start" : "items-center"}`}
            >
              {featuredProjects.map((project) => {
                const isActive = activeProject?.id === project.id;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    onClick={() => setActiveProject(project)}
                    transition={{ type: "spring", stiffness: 220, damping: 26 }}
                    animate={{
                      maxWidth: isExpanded ? 350 : 800,
                      minWidth: isExpanded ? 350 : "100%",
                    }}
                    className={`cursor-pointer rounded-xl border border-neutral-800 
                  bg-gradient-to-r from-neutral-900 to-neutral-800 
                  p-6 shadow-lg shadow-black/30 overflow-hidden 
                  ${
                    isActive
                      ? "border-blue-400 text-white"
                      : "hover:border-blue-400 hover:shadow-blue-500/10 opacity-80"
                  }`}
                  >
                    <h3 className="text-xl font-semibold mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                      {project.title}
                    </h3>

                    <p className="text-neutral-400 text-sm mb-4">
                      {project.overview}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-md bg-blue-600/90 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-blue-400 text-sm font-medium">
                      Click to expand →
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            layout
            animate={{ opacity: isExpanded ? 1 : 0 }}
            className="border border-neutral-800 rounded-xl bg-neutral-900 p-6 max-h-[500px] overflow-y-auto hide-scrollbar"
          >
            <AnimatePresence mode="wait">
              {activeProject && (
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                >
                  <FeaturedProjectCard project={activeProject} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
