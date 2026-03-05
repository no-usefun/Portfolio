import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className }: Props) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${className || ""}`}>
      {children}
    </h2>
  );
}
