import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionContainer from "../ui/SectionContainer";
import { GitHubCalendar } from "react-github-calendar";
import CodeChefCard from "../ui/CodeChefCard";
import LeetCodeCard from "../ui/LeetCodeCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Contributions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionContainer title="Contributions" id="contributions">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="w-full max-w-4xl mx-auto space-y-8"
      >
        {/* 🔹 GITHUB ACTIVITY */}
        <motion.div
          variants={item}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">
              GitHub Activity
            </h3>

            <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium">
              Active
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="w-max mx-auto">
              <GitHubCalendar
                username="no-usefun"
                blockSize={10}
                blockMargin={5}
                fontSize={12}
                theme={{
                  dark: ["#0a0f1c", "#0a2540", "#1e3a8a", "#2563eb", "#60a5fa"],
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* 🔹 CODING PROFILES */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="h-[220px]">
            <LeetCodeCard />
          </div>
          <div className="h-[220px]">
            <CodeChefCard />
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
