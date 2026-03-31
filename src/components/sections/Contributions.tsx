import SectionContainer from "../ui/SectionContainer";
import { GitHubCalendar } from "react-github-calendar";
import {
  SiCodechef,
  SiHackerrank,
  SiCodeforces,
  SiLeetcode,
  SiGithub,
} from "react-icons/si";

const problemsSolved = "170+";
const dayStreak = "25";
const contributions = "183";
const repositories = "10+";

const platforms = [
  {
    name: "GitHub",
    url: "https://www.github.com/no-usefun",
    icon: <SiGithub className="text-gray-400" />,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/no_usefun",
    icon: <SiCodechef className="text-orange-400" />,
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/itsharsh636",
    icon: <SiHackerrank className="text-green-400" />,
  },
  {
    name: "CodeForces",
    url: "https://codeforces.com/profile/no_useFun",
    icon: <SiCodeforces className="text-blue-400" />,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Harsh636_/",
    icon: <SiLeetcode className="text-yellow-400" />,
  },
];

export default function Contributions() {
  return (
    <SectionContainer title="Contributions" id="contributions" className="py-8">
      <div className="mt-5 flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 space-y-6 hover:translate-y-[-4px] transition">
            {/* 🔹 HEADER (only name + status) */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">no-usefun</h3>

              <span className="text-green-400 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Active
              </span>
            </div>

            {/* 🔹 CALENDAR */}
            <div className="flex justify-center">
              <div className="scale-[0.85] md:scale-100 origin-top">
                <GitHubCalendar
                  username="no-usefun"
                  blockSize={10}
                  blockMargin={4}
                  fontSize={12}
                  theme={{
                    dark: [
                      "#0a0f1c",
                      "#0a2540",
                      "#1e3a8a",
                      "#2563eb",
                      "#60a5fa",
                    ],
                  }}
                />
              </div>
            </div>

            {/* 🔹 UPDATED STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                [contributions, "CONTRIBUTIONS"],
                [repositories, "REPOSITORIES"],
                [problemsSolved, "PROBLEMS SOLVED"],
                [dayStreak, "DAY STREAK"],
              ].map(([value, label], i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <p className="text-xl font-bold">{value}</p>
                  <p className="text-xs text-neutral-400">{label}</p>
                </div>
              ))}
            </div>

            {/* 🔹 PLATFORM LINKS (NEW) */}
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {platforms.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full hover:border-blue-500/40 hover:bg-blue-500/10 transition"
                >
                  {p.icon}
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
