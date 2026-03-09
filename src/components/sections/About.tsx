import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function About() {
  return (
    <SectionContainer id="about" className="bg-neutral-900">
      <div className="flex items-center gap-16">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-wide"
          >
            ABOUT
          </motion.h2>

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 300 }}
            transition={{ duration: 0.6 }}
            className="w-[3px] bg-blue-500/40"
          />
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900 border border-blue-500/20 rounded-2xl p-10 max-w-4xl shadow-[0_0_40px_rgba(59,130,246,0.15)]"
        >
          <motion.h2
            variants={item}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-semibold text-white mb-6 text-center"
          >
            Software Engineer • Problem Solver • System Thinker
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
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
              cosine similarity, and BERT embeddings with complete preprocessing
              and model evaluation pipelines.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export default About;
