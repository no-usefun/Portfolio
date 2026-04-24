import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  showDivider?: boolean;
}

export default function SectionContainer({
  children,
  className = "",
  id,
  title,
  showDivider = true,
}: Props) {
  return (
    <section
      id={id}
      className={`h-[calc(100vh)] flex flex-col items-center justify-start scroll-mt-20 px-6 ${className}`}
    >
      {/* Title Block */}

      {title && (
        <div className="flex flex-col items-center gap-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-bold tracking-wide text-center"
          >
            {title}
          </motion.h2>

          {showDivider && (
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 400 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
              className="h-[3px] bg-blue-500"
            />
          )}
        </div>
      )}

      {/* Section Content */}

      <div className="w-full flex justify-center items-center">{children}</div>
    </section>
  );
}
