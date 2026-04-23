import { useEffect, useState } from "react";

type Difficulty = {
  solved: number;
  total: number;
};

type LeetCodeData = {
  total: {
    solved: number;
    total: number;
  };
  difficulty: {
    easy: Difficulty;
    medium: Difficulty;
    hard: Difficulty;
  };
  stats: {
    totalSubmissions: number;
    acceptedSubmissions: number;
    acceptanceRate: string;
  };
};

type ApiResponse = {
  platform: string;
  username: string;
  data: LeetCodeData;
};

export default function LeetCodeCard() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    fetch("https://cp-stats-api.onrender.com/api/leetcode/Harsh636_")
      .then((res) => res.json())
      .then((res: ApiResponse) => setData(res.data))
      .catch(() => setData(null));
  }, []);

  if (!data) {
    return (
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 h-full text-neutral-400">
        Loading...
      </div>
    );
  }

  const solved = data.total.solved;
  const total = data.total.total;
  const acceptance = Number(data.stats.acceptanceRate);

  const percent = hovered ? acceptance : (solved / total) * 100;

  // circle math
  const radius = 70;
  const stroke = 8;
  const normalized = radius - stroke / 2;
  const circumference = normalized * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div
      className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-5 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white text-sm font-medium">LeetCode</h3>

        <a
          href="https://leetcode.com/Harsh636_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-xs font-medium hover:text-blue-300 transition hover:translate-x-1"
        >
          View →
        </a>
      </div>

      {/* MAIN */}
      <div className="flex items-center justify-between">
        {/* LEFT: CIRCLE */}
        <div className="relative w-[140px] h-[140px] flex items-center justify-center">
          <svg height={radius * 2} width={radius * 2}>
            <defs>
              <linearGradient id="grad">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            {/* BACKGROUND LAYER */}
            <circle
              stroke="#0f172a"
              fill="transparent"
              strokeWidth={stroke + 4}
              r={normalized}
              cx={radius}
              cy={radius}
            />

            {/* BASE */}
            <circle
              stroke="#1f2937"
              fill="transparent"
              strokeWidth={stroke}
              r={normalized}
              cx={radius}
              cy={radius}
            />

            {/* PROGRESS */}
            <circle
              stroke="url(#grad)"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              r={normalized}
              cx={radius}
              cy={radius}
              transform={`rotate(-90 ${radius} ${radius})`}
              className="transition-all duration-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.4)]"
            />
          </svg>

          {/* CENTER TEXT */}
          <div className="absolute text-center">
            {!hovered ? (
              <>
                <div className="text-xl font-bold text-white">
                  {solved}
                  <span className="text-neutral-400 text-sm">/{total}</span>
                </div>
                <div className="text-green-400 text-xs">✓ Solved</div>
              </>
            ) : (
              <>
                <div className="text-xl font-bold text-white">
                  {acceptance}%
                </div>
                <div className="text-neutral-400 text-xs">Acceptance</div>
              </>
            )}

            {/* SUBTEXT */}
            <div className="text-[10px] text-neutral-500 mt-1">
              {data.stats.totalSubmissions} submissions
            </div>
          </div>
        </div>

        {/* RIGHT: DIFFICULTY BARS */}
        <div className="flex flex-col gap-2 w-[150px] text-2xl font-bold text-white">
          <DiffBar
            label="Easy"
            value={data.difficulty.easy}
            color="bg-green-400"
            text="text-green-400"
          />
          <DiffBar
            label="Med."
            value={data.difficulty.medium}
            color="bg-yellow-400"
            text="text-yellow-400"
          />
          <DiffBar
            label="Hard"
            value={data.difficulty.hard}
            color="bg-red-400"
            text="text-red-400"
          />
        </div>
      </div>
    </div>
  );
}

function DiffBar({
  label,
  value,
  color,
  text,
}: {
  label: string;
  value: Difficulty;
  color: string;
  text: string;
}) {
  const percent = (value.solved / value.total) * 100;

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm font-semibold">
        <span className={text}>{label}</span>
        <span className="text-neutral-300 text-sm">
          {value.solved} / {value.total}
        </span>
      </div>

      <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
