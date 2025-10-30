"use client";

import { useRef, useState, useEffect } from "react";
import { useTransform, useScroll, motion, MotionValue } from "motion/react";
import Lenis from "lenis";
import { MOCK_TESTIMONIALS } from "@/constants/testimonials";
import { Column } from "./column";

export const Testimonials = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, (height * 1) / 4]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, (height * 3.3) / 5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, (height * 1.25) / 4]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, (height * 3) / 6]);

  console.log(y);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      lenis.destroy();
    };
  }, []);

  return (
    <section>
      <div className="h-10"></div>
      <div
        ref={gallery}
        className="relative flex justify-center gap-4 p-4 overflow-hidden h-96 bg-muted"
      >
        <Column
          testimonials={[
            MOCK_TESTIMONIALS[0],
            MOCK_TESTIMONIALS[1],
            MOCK_TESTIMONIALS[2],
          ]}
          y={y}
          className="-top-[45%]"
        />
        <Column
          testimonials={[
            MOCK_TESTIMONIALS[3],
            MOCK_TESTIMONIALS[4],
            MOCK_TESTIMONIALS[5],
          ]}
          y={y2}
          className="-top-[95%]"
        />
        <Column
          testimonials={[
            MOCK_TESTIMONIALS[6],
            MOCK_TESTIMONIALS[7],
            MOCK_TESTIMONIALS[8],
          ]}
          y={y3}
          className="-top-[45%]"
        />
        <Column
          testimonials={[
            MOCK_TESTIMONIALS[9],
            MOCK_TESTIMONIALS[10],
            MOCK_TESTIMONIALS[11],
          ]}
          y={y4}
          className="-top-[75%]"
        />
      </div>
      <div className="h-10"></div>
    </section>
  );
};
