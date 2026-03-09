import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectsSection from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Consistency from "./components/sections/Consistency";
import Footer from "./components/layout/Footer";

function ProfessionalPortfolio() {
  return (
    <div className="bg-neutral-950 text-white snap-y snap-mandatory h-screen overflow-y-scroll">
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Consistency />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default ProfessionalPortfolio;
