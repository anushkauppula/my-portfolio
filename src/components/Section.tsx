import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        {title && (
          <header>
            <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
            {subtitle && <p className="text-slate-600 mt-1">{subtitle}</p>}
          </header>
        )}
        <div>{children}</div>
      </motion.div>
    </section>
  );
}
