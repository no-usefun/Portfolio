interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

export default function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div className="group relative w-[80px] h-[70px] flex flex-col items-center justify-center overflow-hidden cursor-pointer">
      {/* Icon */}
      <div className="transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-3">
        {icon}
      </div>

      {/* Name */}
      <div
        className="absolute bottom-0 translate-y-full opacity-0vtext-[10px] text-neutral-300 transition-all duration-300
        group-hover:translate-y-[-8px] group-hover:opacity-100 text-center whitespace-nowrap"
      >
        {name}
      </div>
    </div>
  );
}
