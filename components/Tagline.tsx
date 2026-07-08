"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Tagline({ children }: { children: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-[#0a0714] px-6 py-24">
      <p
        ref={ref}
        className="max-w-3xl text-center font-serif text-3xl leading-relaxed text-transparent opacity-0 bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text sm:text-5xl"
      >
        {children}
      </p>
    </section>
  );
}
