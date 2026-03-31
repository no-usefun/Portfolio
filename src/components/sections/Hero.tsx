import Button from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";
import profile from "../../assets/profile.png";

export default function Hero() {
  const openResume = () => window.open("/resume.pdf", "_blank");
  const openGitHub = () =>
    window.open("https://github.com/no-usefun", "_blank");
  const openLinkedIn = () =>
    window.open("https://www.linkedin.com/in/no-usefun", "_blank");

  return (
    <SectionContainer id="Hero" className="bg-neutral-950 text-white pt-20">
      <div className="relative mt-12 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center px-6">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Harsh Agarwal
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-blue-400 font-semibold">
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
            <Button variant="outline" onClick={openGitHub}>
              GitHub
            </Button>
            <Button variant="outline" onClick={openLinkedIn}>
              LinkdIn
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center">
          <div className="relative w-[440px] h-[440px]">
            <div
              className="absolute w-[450px] h-[450px] rounded-full 
                    bg-gradient-to-r from-cyan-400 to-blue-600 
                    blur-xl opacity-70"
            ></div>
            {/* circle background */}
            <div className="absolute inset-0 rounded-full bg-neutral-950 border-4 border-white overflow-hidden flex items-center justify-center">
              <img
                src={profile}
                alt="Harsh"
                draggable="false"
                className="w-[400px] -translate-y-7 object-cover"
              />
            </div>

            {/* head overlay */}
            <div className="absolute top-[-277px] right-[18px] flex items-start justify-center overflow-hidden">
              <img
                src={profile}
                alt="Harsh"
                draggable="false"
                className="w-[403px] translate-y-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
