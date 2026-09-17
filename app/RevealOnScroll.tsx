"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  delay?: number;
};

export function RevealOnScroll({ children, delay = 0 }: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    setIsReady(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.14, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = ["project-reveal", isReady ? "is-ready" : "", isVisible ? "is-visible" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={elementRef}
      className={classes}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
