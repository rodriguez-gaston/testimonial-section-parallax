"use client";

import { cn } from "@/lib/utils";
import { Testimonial } from "@/types/types";
import { motion, MotionValue } from "motion/react";
import { Card } from "./card";

interface ColumnProps {
  testimonials: Testimonial[];
  y: MotionValue<number>;
  className?: string;
}

export const Column = ({ testimonials, y, className }: ColumnProps) => {
  return (
    <motion.div
      className={cn(
        "relative h-full w-1/4 min-w-64 flex flex-col gap-4 column",
        className
      )}
      style={{ y }}
    >
      {testimonials.map((testimonial, i) => {
        return <Card key={testimonial.src} {...testimonial} />;
      })}
    </motion.div>
  );
};
