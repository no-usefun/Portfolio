interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-blue-500/40 transition">
      <h4 className="font-semibold text-lg mb-2">{project.title}</h4>

      <p className="text-sm text-neutral-400 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-blue-600 border border-blue-600/40 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}