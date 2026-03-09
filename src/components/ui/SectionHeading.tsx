interface Props {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: Props) {
  return (
    <div className={`w-full text-center ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h2>
      )}

      {subtitle && <p className="text-lg text-neutral-400 mt-4">{subtitle}</p>}
    </div>
  );
}
