"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberGrid from "@/components/CyberGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    id: "01",
    title: "Reconnaissance",
    description: "Cartographier la cible, comprendre le terrain avant d'agir.",
  },
  {
    id: "02",
    title: "Analyse",
    description: "Identifier les failles, comprendre leur portée réelle.",
  },
  {
    id: "03",
    title: "Exploitation contrôlée",
    description: "Valider les risques sans jamais casser la production.",
  },
  {
    id: "04",
    title: "Rapport & priorisation",
    description: "Traduire la technique en décisions claires pour l'entreprise.",
  },
  {
    id: "05",
    title: "Remédiation & suivi",
    description: "Accompagner la correction jusqu'au bout, pas juste la signaler.",
  },
];

export default function Method() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-line]"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        el.querySelectorAll("[data-step]"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="methode" className="relative bg-[#0a0714] px-6 py-32">
      <CyberGrid />
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          Méthode
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Mon processus, à chaque mission
        </h2>
      </div>

      <div ref={sectionRef} className="mx-auto max-w-6xl">
        <div className="relative flex flex-col gap-14 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div
            data-line
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500 sm:block"
          />
          {STEPS.map((step) => (
            <div
              key={step.id}
              data-step
              className="relative flex flex-1 flex-col items-center text-center sm:items-start sm:text-left"
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-pink-400/40 bg-[#0a0714] font-mono text-sm text-pink-200">
                {step.id}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[200px] text-sm text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
