import { motion } from "framer-motion";

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
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.25 }}
      className={`snap-start min-h-screen flex items-center justify-center px-6 md:px-12 ${className}`}
    >
      {children}
    </motion.section>
  );
}
