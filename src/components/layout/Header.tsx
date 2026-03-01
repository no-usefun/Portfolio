import Button from "../ui/Button";

type HeaderProps = {
  mode: "professional" | "game";
  setMode: React.Dispatch<React.SetStateAction<"professional" | "game">>;
};

export default function Header({ mode, setMode }: HeaderProps) {
  const isProfessional = mode === "professional";

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="text-white font-semibold text-lg tracking-wide">
          Harsh<span className="text-blue-500">.</span>
        </div>

        {/* Nav (hide in game mode if needed later) */}
        {isProfessional && (
          <nav className="hidden md:flex gap-8 text-neutral-400 text-sm">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#education" className="hover:text-white transition">
              Education
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        )}

        {/* Toggle Button */}
        <Button
          variant="outline"
          onClick={() => setMode(isProfessional ? "game" : "professional")}
        >
          {isProfessional ? "Game Mode" : "Professional Mode"}
        </Button>
      </div>
    </header>
  );
}
