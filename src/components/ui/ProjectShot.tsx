"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/*
 * RevealGroup-ийн "hidden" / "show"-ийг өвлөнө. SSR-тэй зөрөхгүйн тулд
 * эхлэл нь үргэлж ижил; reduced-motion үед зөвхөн хугацаа нь 0 болно.
 */
function frame(reduced: boolean): Variants {
  return {
    hidden: { clipPath: "inset(8% 8% 8% 8% round 40px)" },
    show: {
      clipPath: "inset(0% 0% 0% 0% round 24px)",
      transition: reduced
        ? { duration: 0 }
        : { duration: 1.1, ease: EASE },
    },
  };
}
function zoom(reduced: boolean): Variants {
  return {
    hidden: { scale: 1.15 },
    show: {
      scale: 1,
      transition: reduced
        ? { duration: 0 }
        : { duration: 1.3, ease: EASE },
    },
  };
}

/**
 * Төслийн дэлгэцийн зураг — хүрээнээсээ тэлж нээгдээд,
 * скроллоор зөөлөн parallax хийнэ.
 */
export default function ProjectShot({
  src,
  alt,
  toneClass,
  children,
}: {
  src: string | null;
  alt: string;
  toneClass: string;
  /** Зураггүй үед харагдах дэвсгэр */
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["5%", "-5%"]
  );

  return (
    <motion.div
      ref={ref}
      variants={frame(reduced)}
      className={`relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] ${toneClass}`}
    >
      {src ? (
        // Parallax-д зай гаргахын тулд дээш доош 7% илүү
        <motion.div
          className="absolute inset-x-0 -inset-y-[7%]"
          style={{ y }}
        >
          <motion.div
            className="absolute inset-0"
            variants={zoom(reduced)}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}
