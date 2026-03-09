import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import { GitHubCalendar } from "react-github-calendar";

export default function Consistency() {
  return (
    <SectionContainer id="consistency">
      <SectionHeading title="Contributions" />

      <div className="flex flex-col gap-3 mt-12">
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-6">GitHub Activity</h3>

          <div className="github-scroll w-full overflow-x-auto">
            <div className="min-w-max flex justify-center">
              <GitHubCalendar
                blockSize={14}
                blockMargin={4}
                fontSize={14}
                username="no-usefun"
                theme={{
                  dark: ["#080f1f", "#0a2540", "#1e3a8a", "#2563eb", "#60a5fa"],
                }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-6">
            Competitive Programming
          </h3>

          <ul className="space-y-6">
            <li>
              <a
                href="https://www.codechef.com/users/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                CodeChef
              </a>
              <p className="text-sm text-gray-400">
                100+ Problems • Multiple Rated Contests
              </p>
            </li>

            <li>
              <a
                href="https://codeforces.com/profile/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                Codeforces
              </a>
              <p className="text-sm text-gray-400">
                50+ Problems • Regular Contest Participation
              </p>
            </li>

            <li>
              <a
                href="https://www.hackerearth.com/@YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                HackerEarth
              </a>
              <p className="text-sm text-gray-400">
                Practice & Contest Participation
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
