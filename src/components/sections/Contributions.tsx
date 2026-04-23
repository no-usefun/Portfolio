import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionContainer from "../ui/SectionContainer";
import { GitHubCalendar } from "react-github-calendar";
import { SiCodechef, SiLeetcode } from "react-icons/si";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ✅ FALLBACK DATA (important)
const FALLBACK_LEETCODE = {
  totalSolved: 85,
  easySolved: 23,
  mediumSolved: 54,
  hardSolved: 8,
};

const FALLBACK_CODECHEF = {
  rating: "--",
  stars: "--",
};

export default function Contributions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [leetcode, setLeetcode] = useState<any>(null);
  const [codechef, setCodechef] = useState<any>(null);

  useEffect(() => {
    // 🔹 LeetCode (alfa API)
    fetch("https://alfa-leetcode-api.onrender.com/Harsh636_/solved")
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.solvedProblem) throw new Error();

        const normalized = {
          totalSolved: data.solvedProblem,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
        };

        setLeetcode(normalized);
      })
      .catch(() => {
        console.warn("LeetCode API failed → using fallback");
        setLeetcode(FALLBACK_LEETCODE);
      });

    // 🔹 CodeChef (competitive API)
    fetch("https://competeapi.vercel.app/user/codechef/no_usefun/")
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.rating) throw new Error();
        setCodechef(data);
      })
      .catch(() => {
        console.warn("CodeChef API failed → using fallback");
        setCodechef(FALLBACK_CODECHEF);
      });
  }, []);

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
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              Active Contributor
            </span>
          </div>

          {/* GITHUB CALENDAR */}
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

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CODECHEF */}
            <a
              href="https://www.codechef.com/users/no_usefun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <SiCodechef className="text-orange-400" />
                <span className="text-white font-medium">CodeChef</span>
              </div>

              {codechef ? (
                <div className="space-y-1 text-sm text-neutral-300">
                  <p>
                    Rating:{" "}
                    <span className="text-white font-semibold">
                      {codechef.rating}
                    </span>
                  </p>
                  <p>
                    Stars:{" "}
                    <span className="text-white font-semibold">
                      {codechef.stars}
                    </span>
                  </p>
                </div>
              ) : (
                <p className="text-neutral-500 text-sm">Loading...</p>
              )}
            </a>

            {/* LEETCODE */}
            <a
              href="https://leetcode.com/u/Harsh636_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <SiLeetcode className="text-yellow-400" />
                <span className="text-white font-medium">LeetCode</span>
              </div>

              {leetcode ? (
                <div className="space-y-1 text-sm text-neutral-300">
                  <p>
                    Solved:{" "}
                    <span className="text-white font-semibold">
                      {leetcode.totalSolved}
                    </span>
                  </p>
                  <p>
                    Easy:{" "}
                    <span className="text-green-400 font-semibold">
                      {leetcode.easySolved}
                    </span>
                  </p>
                  <p>
                    Medium:{" "}
                    <span className="text-yellow-400 font-semibold">
                      {leetcode.mediumSolved}
                    </span>
                  </p>
                  <p>
                    Hard:{" "}
                    <span className="text-red-400 font-semibold">
                      {leetcode.hardSolved}
                    </span>
                  </p>
                </div>
              ) : (
                <p className="text-neutral-500 text-sm">Loading...</p>
              )}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
