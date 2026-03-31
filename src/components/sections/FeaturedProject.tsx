import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import FeaturedProjectCard from "../ui/FeaturedProjectCard";

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
    demo: "https://data-visualizer-dbn173il3-harshs-projects-1dc69899.vercel.app/",
    image: [
      "../../src/assets/projects/v1.png",
      "../../src/assets/projects/v2.png",
      "../../src/assets/projects/v3.png",
      "../../src/assets/projects/v4.png",
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
      "../../src/assets/projects/p2.png",
      "../../src/assets/projects/p1.png",
      "../../src/assets/projects/p3.png",
      "../../src/assets/projects/p4.png",
    ],
  },
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(featuredProjects[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SectionContainer id="featured-projects" title="Featured Projects">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <AnimatePresence mode="wait">
          {/* -------- INITIAL STATE -------- */}
          {!isExpanded && (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[420px] px-6"
            >
              <div className="flex flex-col gap-8 w-full max-w-4xl">
                {featuredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    layoutId={`card-${project.id}`}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    onClick={() => {
                      setActiveProject(project);
                      setIsExpanded(true);
                    }}
                    className="cursor-pointer rounded-xl border border-neutral-800 
                    bg-gradient-to-r from-neutral-900 to-neutral-800 
                    p-6 md:p-8 shadow-lg shadow-black/30
                    hover:border-blue-400 hover:shadow-blue-500/10 
                    transition-all"
                  >
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm mb-4">
                      {project.overview}
                    </p>

                    {/* Tech */}
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

                    {/* CTA */}
                    <div className="text-blue-400 text-sm font-medium">
                      Click to expand →
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* -------- EXPANDED STATE -------- */}
          {isExpanded && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-[240px_1fr] gap-12 items-start"
            >
              {/* LEFT SELECTOR */}
              <div className="flex flex-col gap-4">
                {featuredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    layoutId={`card-${project.id}`}
                    onClick={() => setActiveProject(project)}
                    className={`cursor-pointer h-[80px] rounded-lg flex items-center px-4 text-sm transition
                    ${
                      activeProject.id === project.id
                        ? "bg-blue-600 text-white"
                        : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                    }`}
                  >
                    {/* optional indicator */}
                    {activeProject.id === project.id && (
                      <div className="w-1 h-6 bg-white rounded mr-3" />
                    )}

                    {project.title}
                  </motion.div>
                ))}
              </div>

              {/* RIGHT PANEL */}
              <div className="border border-neutral-800 rounded-xl bg-neutral-900 p-6 max-h-[500px] overflow-y-auto hide-scrollbar">
                <AnimatePresence mode="wait">
                  <FeaturedProjectCard project={activeProject} />
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
}
