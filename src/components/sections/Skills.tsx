import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";

const skillsData = [
  {
    title: "Core Engineering",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
    ],
  },
  {
    title: "Programming",
    skills: ["Java", "Python", "SQL", "Spring Boot"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Tailwind CSS", "Framer Motion", "Spring Boot"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "PyCharm"],
  },
];

const duplicatedSkills = [...skillsData, ...skillsData];

export default function Skills() {
  return (
    <SectionContainer id="skills">
      <div className="max-w-6xl w-full space-y-10">
        {/* Heading */}
        <SectionHeading title="Skills" />

        {/* Skills Container */}
        <div className="relative bg-neutral-900 border border-blue-500/20 rounded-2xl p-10 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.08)]">
          {/* Edge Fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-900 to-transparent z-10" />

          {/* Scroll Wrapper */}
          <div className="overflow-hidden">
            {/* Auto Scrolling Row */}
            <div className="skills-scroll flex gap-6 w-max">
              {duplicatedSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  title={skill.title}
                  skills={skill.skills}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
