interface SkillCardProps {
  skill: string;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="min-w-[160px] flex items-center justify-center">
      <span className="text-neutral-300 text-center text-md font-medium">
        {skill}
      </span>
    </div>
  );
}
