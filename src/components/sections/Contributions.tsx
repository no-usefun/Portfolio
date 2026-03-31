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
const dayStreak = "15";
const contributions = "188";
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
    <SectionContainer title="Contributions" id="contributions">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl xl:max-w-[1400px]">
          <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 space-y-6 hover:translate-y-[-4px] transition">
            {/* 🔹 HEADER (only name + status) */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                Activity Graph & Stats
              </h3>
              <h3 className="text-sm text-green-400 font-medium">
                Active Contributor
              </h3>
            </div>

            {/* 🔹 CALENDAR */}
            <div className="w-full overflow-x-auto hide-scrollbar ">
              <div className="w-max mx-auto">
                <GitHubCalendar
                  username="no-usefun"
                  blockSize={12}
                  blockMargin={8}
                  fontSize={15}
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
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
                  className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-4 text-center hover:scale-[1.05] hover:border-blue-400 transition-all duration-300 "
                >
                  <p className="text-xl font-bold">{value}</p>
                  <p className="text-xs text-neutral-400">{label}</p>
                </div>
              ))}
            </div>

            {/* 🔹 PLATFORM LINKS (NEW) */}
            <div className="flex flex-wrap justify-center gap-8 pt-2">
              {platforms.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full hover:border-blue-400 hover:bg-blue-500/10 hover:scale-105 transition-all duration-200"
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
