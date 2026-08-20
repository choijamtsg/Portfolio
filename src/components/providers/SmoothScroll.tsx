"use client";

import { ReactLenis } from "lenis/react";

/** Lenis — inertia-тай гөлгөр скролл (reduced-motion үед Lenis өөрөө болгоомжилно) */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
