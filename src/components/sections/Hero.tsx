import Button from "../ui/Button";
import profile from "../../assets/profile.jpeg";

export default function Hero() {
  const openResume = () => window.open("/resume.pdf", "_blank");

  return (
    <section className="relative min-h-screen snap-start flex items-center bg-neutral-950 text-white overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl md:text-6xl font-bold tracking-tight">
            Harsh Agarwal
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl text-blue-400 font-semibold">
            Software Development Engineer
          </h2>

          <p className="mt-6 text-neutral-400 leading-relaxed max-w-xl">
            Focused on building scalable backend systems with strong foundations
            in Data Structures, Algorithms, and system design. Passionate about
            writing clean, efficient, and maintainable code.
          </p>

          <div className="mt-8 flex gap-4">
            <Button variant="outline" onClick={openResume}>
              View Resume
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full shadow-[0_0_80px_rgba(59,130,246,0.25)]"></div>
            <img
              src={profile}
              alt="Harsh"
              className="relative w-72 h-72 rounded-full border-4 border-neutral-800 object-cover brightness-90 object-[center_-10px]"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
