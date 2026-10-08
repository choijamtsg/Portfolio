"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";

/**
 * Lenis — inertia-тай гөлгөр скролл (reduced-motion үед Lenis өөрөө болгоомжилно).
 * MotionConfig — системд reduced-motion асаалттай бол motion-ий
 * шилжих/томрох хөдөлгөөнийг унтрааж, зөвхөн opacity үлдээнэ.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          /* 0.09 нь дугуйг эргүүлсний дараа хэт удаан гүйцэж ирдэг байсан */
          lerp: 0.15,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.5,
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
