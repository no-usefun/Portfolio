import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import FeaturedProject from "./components/sections/FeaturedProject";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Contributions from "./components/sections/Contributions";
import Footer from "./components/layout/Footer";
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
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default ProfessionalPortfolio;
