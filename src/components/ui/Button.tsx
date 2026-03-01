import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "px-8 py-3 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white transition",
    outline:
      "border border-neutral-700 hover:bg-blue-500 text-white transition",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
