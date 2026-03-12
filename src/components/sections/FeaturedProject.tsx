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
    title: "AI Plagiarism Checker & AI-Generated Text Detector",
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
    <SectionContainer id="featured-projects">
      <div className="w-full max-w-7xl h-full flex flex-col gap-10">
        {/* TITLE */}

        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-sm mt-1">
            Selected projects with technical case studies
          </p>
        </div>

        {/* MAIN LAYOUT */}

        <div className="grid md:grid-cols-[240px_240px_1fr] gap-8 items-start">
          {/* LEFT PROJECT LIST */}

          <div className="contents">
            {featuredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`h-[200px] border rounded-lg flex items-center justify-center text-center transition
    ${
      activeProject.id === project.id
        ? "border-blue-500 bg-neutral-900 text-white"
        : "border-neutral-800 text-neutral-400 hover:border-blue-400 hover:text-white"
    }`}
              >
                {project.id === "visualizer" ? "P1" : "P2"}
              </button>
            ))}
          </div>

          {/* RIGHT CASE STUDY PANEL */}

          <div className="border border-neutral-800 rounded-xl bg-neutral-900 p-6 h-[600px] flex flex-col overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                {/* IMAGE */}

                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="rounded-lg border border-neutral-800 w-full aspect-video object-cover"
                />

                {/* TITLE */}

                <h3 className="text-2xl font-semibold">
                  {activeProject.title}
                </h3>

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
        </div>
      </div>
    </SectionContainer>
  );
}
