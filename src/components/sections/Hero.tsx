import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral-950 text-white overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
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
            <Button variant="primary">Explore Projects</Button>
            <Button variant="outline">View Resume</Button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
            <img
              src="/your-image.png"
              alt="Harsh"
              className="relative w-72 h-72 object-cover rounded-full border-4 border-neutral-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
