interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({ children, className = "" }: Props) {
  return (
    <section className={`py-24 px-6 md:px-12 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
