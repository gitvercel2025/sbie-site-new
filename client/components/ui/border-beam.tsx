"use client";

import { cn } from "@/lib/utils";
import { motion, MotionStyle, Transition } from "framer-motion";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent overflow-hidden"
      style={{
        border: `${borderWidth}px solid transparent`,
        background: `linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, ${colorFrom}, ${colorTo}) border-box`,
        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
      }}
    >
      <motion.div
        className={cn(
          "absolute aspect-square",
          "bg-gradient-to-l opacity-75",
          className,
        )}
        style={{
          width: size,
          height: size,
          background: `conic-gradient(from 0deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
          borderRadius: '50%',
          filter: 'blur(2px)',
          ...style,
        } as MotionStyle}
        initial={{ 
          rotate: 0,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          rotate: reverse ? -360 : 360,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
};