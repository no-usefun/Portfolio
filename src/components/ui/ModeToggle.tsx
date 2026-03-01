type Mode = "professional" | "interactive";

type ModeToggleProps = {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

export default function ModeToggle({ mode, setMode }: ModeToggleProps) {
  const isProfessional = mode === "professional";

  return (
    <div className="relative flex bg-neutral-800 rounded-full p-1 w-64">
      {/* Sliding Indicator */}
      <div
        className={`absolute top-0 left-0 h-7 w-[calc(50%)] rounded-full bg-blue-600 transition-transform duration-300 ${
          !isProfessional ? "translate-x-full" : ""
        }`}
      />

      {/* Professional Button */}
      <button
        onClick={() => setMode("professional")}
        className={`relative z-10 flex-1 text-sm font-medium transition-colors ${
          isProfessional ? "text-white" : "text-neutral-400"
        }`}
      >
        Professional
      </button>

      {/* Interactive Button */}
      <button
        onClick={() => setMode("interactive")}
        className={`relative z-10 right-0 flex-1 text-sm font-medium transition-colors ${
          !isProfessional ? "text-white" : "text-neutral-400"
        }`}
      >
        Interactive
      </button>
    </div>
  );
}
