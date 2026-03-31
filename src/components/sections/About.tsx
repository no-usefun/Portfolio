import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import SkillCard from "../ui/SkillCard";

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiGithub,
} from "react-icons/si";

export const skills = [
  { icon: FaJava, name: "Java" },
  { icon: FaPython, name: "Python" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaHtml5, name: "HTML" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiSpringboot, name: "Spring Boot" },
  { icon: SiMysql, name: "MySQL" },
  { icon: FaGitAlt, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
];

// Triple-duplicate for seamless loop
const scrollingSkills = [...skills, ...skills, ...skills];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // each <p> staggers in 100ms apart
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function About() {
  return (
    <SectionContainer id="about" title="About">
      <div className="flex flex-col items-center gap-6 mt-6">
        {/* About Card — fixed y bug, added stagger container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} // ✅ was y:-50 before (bug)
          viewport={{ once: true, amount: 0.2 }} // ✅ fires once, not on every scroll
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-neutral-900 border border-blue-500/20 rounded-2xl p-10 max-w-4xl w-full
            shadow-[0_0_40px_rgba(59,130,246,0.12)]"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold text-white mb-6 text-center"
          >
            Software Engineer • Problem Solver • System Thinker
          </motion.h2>

          {/* ✅ stagger container — now paragraphs actually cascade */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 text-neutral-300 leading-relaxed text-justify"
          >
            <motion.p variants={item}>
              Computer Science undergraduate at VIT-AP (CGPA: 9.35), focused on
              building efficient and scalable software systems.
            </motion.p>

            <motion.p variants={item}>
              Strong foundation in{" "}
              <span className="text-blue-400">
                Data Structures & Algorithms
              </span>
              , Object-Oriented Programming, and backend system design.
            </motion.p>

            <motion.p variants={item}>
              Developed a DSA-based Data Structure Visualizer to demonstrate
              linked list operations and algorithmic workflows interactively.
            </motion.p>

            <motion.p variants={item}>
              Built an AI-based Plagiarism & Text Detection system using TF-IDF,
              cosine similarity, and BERT embeddings with full preprocessing and
              evaluation pipelines.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Skills marquee — responsive width fix */}
        <div className="w-full max-w-4xl overflow-hidden border border-neutral-800 rounded-full bg-neutral-950">
          <div
            className="flex gap-3 px-3 w-max"
            style={{
              animation: "marquee 28s linear infinite",
            }}
          >
            {scrollingSkills.map(({ icon: Icon, name }, i) => (
              <SkillCard key={i} icon={<Icon size={22} />} name={name} />
            ))}
          </div>
        </div>
      </div>

      {/* Scoped keyframe — no extra CSS file needed */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </SectionContainer>
  );
}

export default About;
