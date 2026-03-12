import SectionContainer from "../ui/SectionContainer";
import ProjectCard from "../ui/ProjectCard";

const otherProjects = [
  {
    title: "Invoice / Bill Auto Filler",
    description:
      "Automates invoice data extraction and fills structured forms using OCR and rule-based parsing.",
    tech: ["Python", "OCR", "Automation"],
    github: "https://github.com/no-usefun/bill-filler",
    demo: ""
  },
  {
    title: "Crop Recommendation System",
    description:
      "Machine learning model recommending crops based on soil nutrients, temperature and rainfall data.",
    tech: ["Python", "ML", "Scikit-learn"],
    github: "https://github.com/no-usefun/Crop-Recommendation-System",
    demo: ""
  },
  {
    title: "Todo List App",
    description:
      "Simple task management app built with React demonstrating component-based architecture.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/no-usefun/todoListApp",
    demo: "https://todolistapp-67a4.onrender.com"
  },
  {
    title: "Python Mini Games",
    description:
      "Small desktop games built with Tkinter including Tic-Tac-Toe and a word guessing game.",
    tech: ["Python", "Tkinter"],
    github: "https://github.com/no-usefun/small-projects",
  },
  {
  title: "Portfolio Website",
  description:
    "Personal portfolio built with React and Tailwind featuring animated sections and project showcases.",
  tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
  github: "https://github.com/no-usefun/Portfolio",
  demo: ""
  },
];

export default function OtherProjects() {
  return (
    <SectionContainer id="other-projects" title="Additional Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-6">
        {otherProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}