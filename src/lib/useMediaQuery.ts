"use client";

import { useEffect, useState } from "react";

/** SSR-д аюулгүй media query hook */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** Хөндлөө горимыг зөвшөөрөх эсэх: өргөн дэлгэц + хөдөлгөөн хязгаарлаагүй */
export function useHorizontalMode() {
  const wide = useMediaQuery("(min-width: 1024px)");
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  return wide && !reduced;
}
