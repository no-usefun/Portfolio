export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="text-white font-semibold text-lg tracking-wide"
        >
          Harsh<span className="text-blue-500">.</span>
        </a>

        {/* Navigation (ONLY in professional mode) */}
        {
          <nav className="hidden md:flex gap-8 text-neutral-400 text-sm">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a
              href="#featured-projects"
              className="hover:text-white transition"
            >
              Projects
            </a>
            <a href="#contributions" className="hover:text-white transition">
              Contributions
            </a>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        }
      </div>
    </header>
  );
}
