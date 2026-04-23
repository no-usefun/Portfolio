import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionContainer from "../ui/SectionContainer";

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      id: "walmart",
      role: "Advanced Software Engineering",
      company: "Walmart USA (Forage)",
      type: "Virtual Experience Program",
      duration: "April 2026",
      points: [
        "Completed advanced software engineering tasks focused on data structures and system design",
        "Implemented a custom heap data structure in Java and optimized its performance",
        "Applied concepts of software architecture, UML modeling, and database design",
        "Worked on problem-solving scenarios involving process optimization and scalable systems",
        "Strengthened understanding of real-world engineering workflows and technical decision-making",
      ],
      tech: ["Java", "Data Structures", "SQL", "System Design", "UML"],
    },
    {
      id: "forage",
      role: "Technology Virtual Experience",
      company: "Deloitte Australia (Forage)",
      type: "Virtual Experience Program",
      duration: "June 2025",
      points: [
        "Completed a technology-focused job simulation involving development and coding tasks",
        "Designed and proposed a dashboard solution based on client requirements",
        "Translated problem statements into structured technical approaches",
        "Applied data analysis and modeling concepts in solution design",
        "Presented solutions in a professional, client-oriented format",
      ],
      tech: ["Python", "Data Analysis", "Data Modeling", "Dashboard Design"],
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <SectionContainer
      id="experience"
      className="bg-neutral-950"
      title="Experience"
    >
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="w-full max-w-6xl mx-auto mt-6 grid md:grid-cols-2 gap-6 items-stretch"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={cardVariant}
            className={`h-full rounded-xl border p-6 flex flex-col gap-4 transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
              ${"border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 hover:shadow-blue-500/10 hover:border-neutral-700"}`}
          >
            {/* HEADER */}
            <div>
              <h3 className="text-lg font-semibold text-white leading-snug">
                {exp.role}
              </h3>

              <p className="text-xs text-neutral-500 mt-1">
                {exp.company} • {exp.duration}
              </p>

              <div className="mt-2 flex gap-2 flex-wrap items-center">
                <span className="text-xs px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="h-px bg-neutral-800" />

            {/* POINTS */}
            <ul className="space-y-2.5 text-sm text-neutral-400 flex-1">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* TECH TAGS */}
            {exp.tech && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-0.5 rounded-md bg-blue-600/15 text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

export default Experience;
