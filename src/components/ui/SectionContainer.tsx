interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({
  children,
  className = "",
  id,
}: Props) {
  return (
    <section
      id={id}
      className={`snap-start h-[100vh] flex items-center justify-center px-6 md:px-12 ${className}`}
    >
      {children}
    </section>
  );
}
