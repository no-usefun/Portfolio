import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: Props) {
  return <h2 className="text-3xl md:text-4xl font-bold mb-12">{children}</h2>;
}
