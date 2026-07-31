"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberGrid from "@/components/CyberGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROOFS = [
  "6+ audits de sécurité réalisés sur des systèmes réels",
  "19+ vulnérabilités identifiées et documentées",
  "3 missions actives en ce moment",
  "Méthode OWASP — standards internationaux",
  "Rapports professionnels livrés à chaque mission",
];

export default function Trust() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-reveal]"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
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
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          Pourquoi nous faire confiance
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Pas des simulations. Des interventions réelles.
        </h2>
        <p className="mt-6 text-zinc-400">
          Nous avons sécurisé des plateformes en production. Voici nos
          preuves.
        </p>
      </div>

      <div ref={sectionRef} className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {PROOFS.map((proof) => (
          <div
            key={proof}
            data-reveal
            className="flex items-start gap-3 rounded-2xl border border-pink-400/15 bg-white/[0.02] p-6"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
            <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
              {proof}
            </p>
          </div>
        ))}
      </div>

      <p
        data-reveal
        className="mx-auto mt-16 max-w-2xl bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text text-center font-serif text-2xl italic text-transparent sm:text-3xl"
      >
        Nos clients ne nous font pas confiance parce que nous le demandons.
        Ils nous font confiance parce que nous livrons des résultats.
      </p>
    </section>
  );
}
