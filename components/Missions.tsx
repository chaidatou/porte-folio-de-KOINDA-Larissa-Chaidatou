"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CyberGrid from "@/components/CyberGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MISSIONS = [
  {
    id: "01",
    client: "ScanEvent",
    location: "Alger, Algérie",
    title: "Audit sécurité application web & mobile",
    status: "En cours",
    method: [
      "Cartographie des API et des flux d'authentification",
      "Vérification des contrôles d'accès et de la gestion des sessions",
      "Tests structurés selon la méthodologie OWASP",
    ],
    tools: ["API", "Contrôles d'accès", "Auth", "OWASP"],
  },
  {
    id: "02",
    client: "TIIM",
    location: "Burkina Faso",
    title: "Audit de vulnérabilités web",
    status: "Terminée",
    method: [
      "Analyse des en-têtes de sécurité HTTP",
      "Étude de la gestion des sessions utilisateurs",
      "Tests d'intrusion et rédaction de rapports détaillés",
    ],
    tools: ["Headers", "Sessions", "Tests", "Rapports"],
  },
  {
    id: "03",
    client: "Next-Git",
    location: "À distance",
    title: "SOC automatisé — détection & corrélation",
    status: "En cours",
    method: [
      "Déploiement de sondes de détection Suricata, Snort et Zeek",
      "Mise en place de FAIL2BAN pour le blocage automatique",
      "Corrélation d'alertes pour réduire les faux positifs",
    ],
    tools: ["Suricata", "Snort", "Zeek", "FAIL2BAN"],
  },
  {
    id: "04",
    client: "Lab personnel",
    location: "Alger, Algérie",
    title: "Serveur Ubuntu durci de bout en bout",
    status: "Terminée",
    method: [
      "Configuration sécurisée DNS et SSH (clés, durcissement)",
      "Déploiement Apache avec HTTPS et certificats SSL/TLS",
      "Mise en place d'un serveur mail Postfix sécurisé",
    ],
    tools: ["DNS", "SSH", "Apache", "Postfix", "SSL/TLS"],
  },
  {
    id: "05",
    client: "Soft-Consulting",
    location: "Ouagadougou, Burkina Faso",
    title: "Stage — administration systèmes & réseaux",
    status: "Terminée",
    method: [
      "Gestion quotidienne de l'infrastructure systèmes et réseau",
      "Support et maintenance des environnements de production",
      "Application des bonnes pratiques de sécurité opérationnelle",
    ],
    tools: ["Administration", "Réseau", "Support"],
  },
];

function MissionCard({
  mission,
  index,
}: {
  mission: (typeof MISSIONS)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60, x: index % 2 === 0 ? -40 : 40 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        el.querySelectorAll("[data-tag]"),
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.4,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col gap-5 rounded-2xl border border-pink-400/15 bg-white/[0.02] p-8 sm:max-w-2xl sm:p-10 ${
        index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-zinc-500">
        <span className="text-pink-300">Dossier N°{mission.id}</span>
        <span className="h-1 w-1 rounded-full bg-zinc-600" />
        <span>{mission.location}</span>
        <span
          className={`ml-auto flex items-center gap-2 ${
            mission.status === "Terminée" ? "text-emerald-400" : "text-amber-400"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              mission.status === "Terminée" ? "bg-emerald-400" : "bg-amber-400"
            }`}
          />
          {mission.status}
        </span>
      </div>

      <div>
        <p className="font-mono text-sm text-fuchsia-300">{mission.client}</p>
        <h3 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
          {mission.title}
        </h3>
      </div>

      <ul className="flex flex-col gap-2 text-sm text-zinc-300 sm:text-base">
        {mission.method.map((step) => (
          <li key={step} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
            {step}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {mission.tools.map((tool) => (
          <span
            key={tool}
            data-tag
            className="rounded-full border border-pink-400/25 px-3 py-1 text-xs text-pink-200"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Missions() {
  return (
    <section id="missions" className="relative bg-[#0a0714] px-6 py-32">
      <CyberGrid />
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          Missions terrain
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Ce que nous avons fait, sur le terrain
        </h2>
        <p className="mt-4 text-zinc-400">
          Par confidentialité, nous ne partageons jamais les failles trouvées
          chez nos clients — seulement notre méthode et notre rôle.
        </p>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        {MISSIONS.map((mission, index) => (
          <MissionCard key={mission.id} mission={mission} index={index} />
        ))}
      </div>
    </section>
  );
}
