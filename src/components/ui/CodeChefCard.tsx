import { useEffect, useState } from "react";

type CodeChefData = {
  rating: number;
  stars: string;
  totalSolved: number;
  totalContest: number;
};

type ApiResponse = {
  platform: string;
  username: string;
  data: CodeChefData;
};

export default function CodeChefCard() {
  const [data, setData] = useState<CodeChefData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://cp-stats-api.onrender.com/api/codechef/no_usefun")
      .then((res) => res.json())
      .then((res: ApiResponse) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-neutral-400 h-full">
        Loading CodeChef stats...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-neutral-900 border border-red-800 rounded-2xl p-5 text-red-400 h-full">
        Failed to load CodeChef stats
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white text-sm font-medium tracking-wide">
          CodeChef{" "}
          <span className="text-orange-400 text-xs font-semibold">
            {data.stars}
          </span>
        </h3>

        <a
          href="https://www.codechef.com/users/no_usefun"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View →
        </a>
      </div>

      {/* MAIN */}
      <div className="flex items-center justify-between">
        {/* LEFT: Solved */}
        <div>
          <div className="text-neutral-400 text-xs">Solved</div>
          <div className="text-white text-2xl font-bold leading-tight">
            {data.totalSolved}
          </div>
        </div>

        {/* RIGHT: STATS */}
        <div className="flex flex-col gap-2 text-right">
          <MiniStat label="Rating" value={data.rating} />
          <MiniStat label="Contests" value={data.totalContest} />
        </div>
      </div>

      {/* PROGRESS BAR (visual upgrade) */}
      <div className="mt-4">
        <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-400 transition-all duration-500"
            style={{
              width: `${Math.min((data.totalSolved / 300) * 100, 100)}%`,
            }}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center text-xs mt-3">
        <span className="text-neutral-500">Competitive Programming</span>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-neutral-800 px-3 py-1 rounded-md">
      <div className="text-[10px] text-neutral-400">{label}</div>
      <div className="text-white text-sm font-medium">{value}</div>
    </div>
  );
}
