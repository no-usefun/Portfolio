import SectionContainer from "../ui/SectionContainer";
import { GitHubCalendar } from "react-github-calendar";
import { SiCodechef, SiHackerearth } from "react-icons/si";

const cpPlatforms = [
  {
    name: "CodeChef",
    handle: "no_usefun",
    problems: "120+",
    contests: "4",
    url: "https://www.codechef.com/users/no_usefun",
    icon: <SiCodechef className="text-orange-400 text-lg" />,
  },
  {
    name: "HackerEarth",
    handle: "harsh.23bce8891",
    problems: "50+",
    contests: "—",
    url: "https://www.hackerearth.com/@harsh.23bce8891",
    icon: <SiHackerearth className="text-green-400 text-lg" />,
  },
];

export default function Contributions() {
  return (
    <SectionContainer id="contributions" title="Contributions">
      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        {/* GITHUB ACTIVITY */}

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col gap-6">
          <h3 className="text-xl font-semibold">GitHub Activity</h3>

          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="no-usefun"
              blockSize={8}
              blockMargin={4}
              fontSize={12}
              theme={{
                dark: ["#080f1f", "#0a2540", "#1e3a8a", "#2563eb", "#60a5fa"],
              }}
            />
          </div>

          {/* METRICS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-center">
              <p className="text-lg font-semibold">121</p>
              <p className="text-xs text-neutral-400">Contributions</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-center">
              <p className="text-lg font-semibold">15+</p>
              <p className="text-xs text-neutral-400">Repositories</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-center">
              <p className="text-lg font-semibold">TypeScript</p>
              <p className="text-xs text-neutral-400">Primary Language</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-center">
              <p className="text-lg font-semibold">Python</p>
              <p className="text-xs text-neutral-400">ML Projects</p>
            </div>
          </div>

          <a
            href="https://github.com/no-usefun"
            target="_blank"
            className="text-blue-400 text-sm hover:underline"
          >
            View GitHub →
          </a>
        </div>

        {/* COMPETITIVE PROGRAMMING */}

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col gap-6">
          <h3 className="text-xl font-semibold">Competitive Programming</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {cpPlatforms.map((platform, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg hover:border-blue-500/40 transition"
              >
                <h4 className="flex items-center gap-2 font-semibold mb-2">
                  {platform.icon}
                  {platform.name}
                </h4>

                <p className="text-sm text-neutral-400">
                  Handle: {platform.handle}
                </p>

                <p className="text-sm text-neutral-400">
                  Problems: {platform.problems}
                </p>

                <p className="text-sm text-neutral-400 mb-2">
                  Contests: {platform.contests}
                </p>

                <a
                  href={platform.url}
                  target="_blank"
                  className="text-blue-400 text-sm hover:underline"
                >
                  Profile →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
