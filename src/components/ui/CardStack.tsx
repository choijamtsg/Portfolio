"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useMediaQuery } from "@/lib/useMediaQuery";

/** TopBar-ын доор наалдах зай ба карт бүрийн шатлал (px) */
const STICK_TOP = 96;
const STEP = 14;

function StackItem({
  index,
  last,
  stacking,
  children,
}: {
  index: number;
  last: boolean;
  stacking: boolean;
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [top, setTop] = useState(STICK_TOP + index * STEP);

  /*
   * Карт дэлгэцээс өндөр бол доод хэсэг нь харагдахаас өмнө дараагийн
   * карт дарчихна. Тиймээс картын ёроол дэлгэцэнд багтахаар top-ыг тооцно.
   */
  useEffect(() => {
    const el = cardRef.current;
    if (!el || !stacking) return;
    const measure = () =>
      setTop(
        Math.min(
          STICK_TOP + index * STEP,
          window.innerHeight - el.offsetHeight - 24
        )
      );
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [index, stacking]);

  /*
   * Энэ картын араас ирэх карт хаана байгааг хэмжинэ. Sticky элемент
   * байрлалаа "худлаа" хэлдэг тул урсгалд байгаа 0 өндөртэй тэмдгийг ашиглана.
   */
  const { scrollYProgress } = useScroll({
    target: afterRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0.2, 0.9], [1, 0.94]);
  const animate = stacking && !last && !reduced;

  return (
    <>
      <div
        ref={cardRef}
        className={`lg:sticky ${last ? "" : "mb-4"}`}
        style={stacking ? { top } : undefined}
      >
        <motion.div
          className="origin-top"
          style={animate ? { scale } : undefined}
        >
          {children}
        </motion.div>
      </div>
      <div ref={afterRef} aria-hidden />
    </>
  );
}

/**
 * Өргөн дэлгэц дээр картууд скроллоор бие бие дээрээ давхарлагдаж,
 * доор нь үлдсэн карт бага зэрэг жижгэрнэ. Утсан дээр энгийн жагсаалт.
 */
export default function CardStack({ items }: { items: React.ReactNode[] }) {
  const stacking = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
      {items.map((item, i) => (
        <StackItem
          key={i}
          index={i}
          last={i === items.length - 1}
          stacking={stacking}
        >
          {item}
        </StackItem>
      ))}
    </div>
  );
}
