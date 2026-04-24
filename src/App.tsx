import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import FeaturedProject from "./components/sections/FeaturedProject";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Contributions from "./components/sections/Contributions";
import OtherProjects from "./components/sections/OtherProjects";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="bg-neutral-950 text-white h-screen overflow-y-scroll hide-scrollbar">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <OtherProjects />
        <Contributions />
        <Experience />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
