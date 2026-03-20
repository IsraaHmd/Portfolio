import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import React from "react";

interface CardGridProps {
  title: string;
  children: React.ReactNode;
}

const cardGridStyle: React.CSSProperties = {
  backgroundColor: "var(--color-bg)",
  padding: "0 clamp(24px, 8vw, 200px) var(--padding-buttom-section)",
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as const, // cubic bezier instead of string
      delay: i * 0.15,
    },
  }),
};

const titleVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
};
export default function CardGrid({ title, children }: CardGridProps) {
  const childArray = React.Children.toArray(children);

  return (
    <div style={cardGridStyle} className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariant}
      >
        <SectionHeader text={title} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {childArray.map((child, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
          >
            {child}
          </motion.div>
        ))}
      </div>
    </div>
  );
}