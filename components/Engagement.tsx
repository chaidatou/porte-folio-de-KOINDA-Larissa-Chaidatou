"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberGrid from "@/components/CyberGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HIGHLIGHTS = [
  {
    title: "Récupération de comptes & données",
    description:
      "J'accompagne celles et ceux qui ont perdu l'accès à leurs comptes ou souhaitent supprimer des données indésirables.",
  },
  {
    title: "Prévention anti-arnaques",
    description:
      "J'apprends aux participants à repérer les pièges avant qu'ils ne fassent des dégâts.",
  },
  {
    title: "Formations gratuites & certifiées",
    description:
      "Accessibles à toutes et tous, avec une certification remise à chaque participant.",
  },
];

function HighlightCard({
  highlight,
  index,
}: {
  highlight: (typeof HIGHLIGHTS)[number];
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
      className="flex flex-col gap-3 rounded-2xl border border-pink-400/15 bg-white/[0.02] p-8"
    >
      <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">
        {highlight.description}
      </p>
    </div>
  );
}

export default function Engagement() {
  return (
    <section id="engagement" className="relative bg-[#0a0714] px-6 py-32">
      <CyberGrid />
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          Engagement
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Rendre la cybersécurité accessible à tous
        </h2>
        <p className="mt-6 text-zinc-400">
          Formatrice en protection des données et anti-arnaques, j&apos;aide
          celles et ceux qu&apos;on oublie souvent à reprendre le contrôle de
          leurs informations personnelles.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {HIGHLIGHTS.map((highlight, index) => (
          <HighlightCard key={highlight.title} highlight={highlight} index={index} />
        ))}
      </div>
    </section>
  );
}
