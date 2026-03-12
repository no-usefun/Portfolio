import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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

  return (
    <SectionContainer id="featured-projects" title="Featured Projects">
      <div className="w-full max-w-7xl mx-auto flex flex-col -mt-12">
        <div className="grid md:grid-cols-[260px_1fr] gap-12 items-start">
          {/* PROJECT SELECTOR */}

          <div className="flex flex-col gap-6 justify-center h-full">
            {featuredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`h-[140px] border rounded-lg flex items-center justify-center text-center font-large px-4 transition
                ${
                  activeProject.id === project.id
                    ? "border-blue-500 bg-blue-600 text-white"
                    : "border-neutral-800 text-neutral-400 hover:border-blue-400 hover:text-white"
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* CASE STUDY PANEL */}

          <div className="border border-neutral-800 rounded-xl bg-neutral-900 p-6 max-h-[500px] overflow-y-auto">
            <AnimatePresence mode="wait">
              <FeaturedProjectCard project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
