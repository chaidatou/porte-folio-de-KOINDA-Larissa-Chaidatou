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
    title: "Nous écoutons",
    tag: "Gratuit",
    description:
      "30 minutes pour comprendre votre infrastructure, vos risques et vos priorités.",
  },
  {
    id: "02",
    title: "Nous intervenons",
    tag: "",
    description:
      "Audit, tests d'intrusion, sécurisation — selon vos besoins. Documentation complète à chaque étape.",
  },
  {
    id: "03",
    title: "Votre infrastructure est protégée",
    tag: "",
    description:
      "Rapport livré, vulnérabilités corrigées, équipe accompagnée. Nous ne disparaissons pas après le rapport.",
  },
];

export default function Approach() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
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
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-[#0a0714] px-6 py-32">
      <CyberGrid />
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          Notre méthode
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Simple. Rigoureux. Transparent.
        </h2>
      </div>

      <div ref={sectionRef} className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div
            key={step.id}
            data-step
            className="flex flex-col items-center gap-3 rounded-2xl border border-pink-400/15 bg-white/[0.02] p-8 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-400/40 font-mono text-sm text-pink-200">
              {step.id}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {step.title}
              {step.tag && (
                <span className="ml-2 rounded-full border border-emerald-400/40 px-2 py-0.5 align-middle text-xs font-normal uppercase tracking-widest text-emerald-400">
                  {step.tag}
                </span>
              )}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
