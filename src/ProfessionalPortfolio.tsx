import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Consistency from "./components/sections/Consistency";

function ProfessionalPortfolio() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Consistency />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default ProfessionalPortfolio;
