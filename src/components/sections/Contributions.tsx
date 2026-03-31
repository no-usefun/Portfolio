import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionContainer from "../ui/SectionContainer";
import { GitHubCalendar } from "react-github-calendar";
import {
  SiCodechef,
  SiHackerrank,
  SiCodeforces,
  SiLeetcode,
  SiGithub,
} from "react-icons/si";

const stats = [
  { value: "⚙️", label: "Currently Building", sub: "Freelance Product Site" },
  { value: "13+", label: "Repositories" },
  { value: "170+", label: "Problems Solved" },
  { value: "15", label: "Day Streak" },
];

const platforms = [
  {
    name: "GitHub",
    url: "https://www.github.com/no-usefun",
    icon: SiGithub,
    color: "text-gray-400",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/no_usefun",
    icon: SiCodechef,
    color: "text-orange-400",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/itsharsh636",
    icon: SiHackerrank,
    color: "text-green-400",
  },
  {
    name: "CodeForces",
    url: "https://codeforces.com/profile/no_useFun",
    icon: SiCodeforces,
    color: "text-blue-400",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Harsh636_/",
    icon: SiLeetcode,
    color: "text-yellow-400",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
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
        className="w-full max-w-5xl mx-auto"
      >
        <motion.div
          variants={item}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-6"
        >
          {/* HEADER */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">
              Activity Graph & Stats
            </h3>
            <span
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full
              bg-green-500/10 border border-green-500/20 text-green-400 font-medium"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              Active Contributor
            </span>
          </div>

          {/* CALENDAR */}
          <div className="w-full overflow-x-auto">
            <div className="w-max mx-auto">
              <GitHubCalendar
                username="no-usefun"
                blockSize={11}
                blockMargin={6}
                fontSize={15}
                theme={{
                  dark: ["#0a0f1c", "#0a2540", "#1e3a8a", "#2563eb", "#60a5fa"],
                }}
              />
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ value, label, sub }, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10
                  rounded-xl p-4 text-center hover:border-blue-400 transition-all duration-300"
              >
                <p className="text-xl font-bold text-white">{value}</p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
                  {label}
                </p>
                {sub && <p className="text-xs text-blue-400 mt-1">{sub}</p>}
              </div>
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* PLATFORM LINKS */}
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map(({ name, url, icon: Icon, color }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-white/5 border border-white/10
                  rounded-full hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-200"
              >
                <Icon size={14} className={color} />
                <span className="text-neutral-300">{name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
