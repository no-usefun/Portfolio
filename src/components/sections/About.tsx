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

const scrollingSkills = [...skills, ...skills];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function About() {
  return (
    <SectionContainer id="about" title="About">
      <div className="flex flex-col gap-6 mt-12">
        {/* About Card */}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-neutral-900 border flex flex-col items-center border-blue-500/20 rounded-2xl p-10 max-w-4xl mx-auto shadow-[0_0_40px_rgba(59,130,246,0.15)]"
        >
          <motion.h2
            variants={item}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-semibold text-white mb-6 text-center"
          >
            Software Engineer • Problem Solver • System Thinker
          </motion.h2>

          <div className="space-y-4 text-neutral-300 leading-relaxed text-justify">
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
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="w-full flex justify-center -mt-10">
          <div className="w-[calc(100vw-500px)] overflow-hidden border border-neutral-800 rounded-full bg-neutral-950">
            <div className="skills-scroll flex gap-3 w-max px-3">
              {scrollingSkills.map(({ icon: Icon, name }, i) => (
                <SkillCard key={i} icon={<Icon size={22} />} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default About;
