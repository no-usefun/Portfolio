import SectionContainer from "../ui/SectionContainer";

const otherProjects = [
  {
    title: "GitHub Repo Analyzer",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    github: "#",
    demo: "#",
  },
  {
    title: "REST API Service",
    github: "#",
  },
];

export default function OtherProjects() {
  return (
    <SectionContainer id="OtherProjects" className="bg-neutral-900">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10">
        Other Projects
      </h2>
      <div className="space-y-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 hover:border-purple-500/40 transition"
            >
              <h4 className="font-medium mb-4">{project.title}</h4>

              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  className="text-purple-400 hover:underline"
                >
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    className="text-purple-400 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
