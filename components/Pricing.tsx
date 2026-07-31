"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberGrid from "@/components/CyberGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PLANS = [
  {
    id: "decouverte",
    name: "Formule Découverte",
    title: "Premier audit",
    items: ["Scan de vulnérabilités", "Rapport PDF", "Debriefing 1h"],
    fit: "Startup early-stage, MVP, premier bilan sécurité",
    highlight: false,
  },
  {
    id: "essentielle",
    name: "Formule Essentielle",
    title: "Pentest complet",
    items: [
      "Pentest OWASP",
      "Rapport détaillé",
      "Plan de remédiation",
      "Suivi correction",
    ],
    fit: "Application web ou mobile en production",
    highlight: true,
  },
  {
    id: "complete",
    name: "Formule Complète",
    title: "Sécurité totale",
    items: [
      "Pentest + Durcissement serveur",
      "SOC",
      "Surveillance continue",
    ],
    fit: "Entreprise qui veut une infrastructure robuste et surveillée",
    highlight: false,
  },
];

function PlanCard({ plan, index }: { plan: (typeof PLANS)[number]; index: number }) {
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
      className={`flex flex-col gap-6 rounded-2xl border p-8 ${
        plan.highlight
          ? "border-pink-400/40 bg-gradient-to-b from-pink-500/[0.08] to-purple-500/[0.04] shadow-[0_8px_30px_rgba(217,70,239,0.15)]"
          : "border-pink-400/15 bg-white/[0.02]"
      }`}
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-pink-300">
          {plan.name}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{plan.title}</h3>
      </div>

      <ul className="flex flex-col gap-2 text-sm text-zinc-300">
        {plan.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
            {item}
          </li>
        ))}
      </ul>

      <p className="text-xs uppercase tracking-widest text-zinc-500">
        Pour : {plan.fit}
      </p>

      <a
        href={`mailto:koindalarissa@gmail.com?subject=Demande%20de%20devis%20-%20${encodeURIComponent(
          plan.title
        )}`}
        className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium uppercase tracking-widest transition-transform hover:scale-105 ${
          plan.highlight
            ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-white shadow-[0_8px_24px_rgba(217,70,239,0.35)]"
            : "border border-pink-300/40 text-pink-100 hover:border-pink-300 hover:bg-pink-500/10"
        }`}
      >
        Demander un devis
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="tarifs" className="relative bg-[#0a0714] px-6 py-32">
      <CyberGrid />
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          Nos tarifs
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Des tarifs pensés pour les startups et entreprises en croissance
        </h2>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
        {PLANS.map((plan, index) => (
          <PlanCard key={plan.id} plan={plan} index={index} />
        ))}
      </div>
      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-zinc-500">
        Première consultation 30 minutes offerte. Tarifs adaptés aux réalités
        des startups.
      </p>
    </section>
  );
}
