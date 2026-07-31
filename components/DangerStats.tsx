"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberGrid from "@/components/CyberGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FACTS = [
  {
    value: "43%",
    label: "des cyberattaques ciblent les startups et PME",
  },
  {
    value: "4,5M$",
    label: "coût moyen d'une faille de sécurité non détectée",
  },
  {
    value: "60%",
    label: "des petites entreprises ferment dans les 6 mois après une attaque",
  },
];

function FactCard({
  fact,
  index,
}: {
  fact: (typeof FACTS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-4 rounded-2xl border border-pink-400/15 bg-white/[0.02] p-8 text-center"
    >
      <p className="bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
        {fact.value}
      </p>
      <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
        {fact.label}
      </p>
    </div>
  );
}

export default function DangerStats() {
  return (
    <section className="relative bg-[#0a0714] px-6 py-32">
      <CyberGrid />
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          La réalité
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Votre serveur est en danger
        </h2>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {FACTS.map((fact, index) => (
          <FactCard key={fact.value} fact={fact} index={index} />
        ))}
      </div>
      <p className="mx-auto mt-16 max-w-2xl text-center text-lg leading-relaxed text-zinc-300 sm:text-xl">
        Votre entreprise n&apos;est pas trop petite pour être une cible.
        <br className="hidden sm:block" /> Elle est exactement la bonne
        taille pour un attaquant.
      </p>
    </section>
  );
}
