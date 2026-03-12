import SectionContainer from "../ui/SectionContainer";
import { GitHubCalendar } from "react-github-calendar";

export default function Contributions() {
  return (
    <SectionContainer id="Contributions" title="Contributions">

      <div className="flex flex-col gap-3 -mt-12">
        <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10">
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

        <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-6">
            Competitive Programming
          </h3>

          
        </div>
      </div>
    </SectionContainer>
  );
}
