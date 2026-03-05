interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="min-w-[240px] bg-neutral-950 border border-neutral-800 rounded-xl p-6">
      <h3 className="text-white font-semibold mb-4">{title}</h3>

      <ul className="space-y-2 text-neutral-400 text-sm">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
