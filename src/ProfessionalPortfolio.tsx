import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import FeaturedProject from "./components/sections/FeaturedProject";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Contributions from "./components/sections/Contributions";
import OtherProjects from "./components/sections/OtherProjects";

function ProfessionalPortfolio() {
  return (
    <div className="bg-neutral-950 text-white snap-y snap-mandatory h-screen overflow-y-scroll hide-scrollbar">
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <OtherProjects />
        <Contributions />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default ProfessionalPortfolio;
