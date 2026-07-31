"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NetworkBackground from "@/components/NetworkBackground";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type GithubLink = { label: string; href: string };

type Project = {
  id: string;
  title: string;
  status: string;
  description: string;
  tools: string[];
  note?: string;
  link?: { label: string; href: string };
  github?: GithubLink[];
};

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Mini SOC automatisé",
    status: "Déployé",
    description:
      "Un centre de surveillance de sécurité que nous avons conçu et déployé nous-mêmes. Il collecte les logs en continu, détecte les activités anormales et déclenche des alertes automatisées en temps réel. Un système opérationnel, pas un exercice théorique.",
    tools: [
      "Collecte de logs",
      "Détection d'anomalies",
      "Corrélation d'alertes",
      "Automatisation",
    ],
  },
  {
    id: "02",
    title: "Plateforme d'apprentissage cybersécurité pour les filles africaines",
    status: "Projet de soutenance",
    description:
      "Une plateforme pensée pour démocratiser la cybersécurité auprès des jeunes filles africaines : formation technique, sensibilisation, accompagnement. Notre projet de cœur — armer celles qu'on n'attend jamais dans ce domaine.",
    tools: ["Formation", "Inclusion numérique", "Impact social"],
  },
  {
    id: "03",
    title: "Ce portfolio immersif",
    status: "En ligne",
    description:
      "Une expérience numérique conçue de la première idée au dernier pixel : écran d'accueil animé, narration par scènes, animations. La preuve vivante que nous portons une vision créative de bout en bout — cybersécurité ET design d'expérience.",
    tools: ["Next.js", "Animations", "Design immersif", "Création vidéo IA"],
    github: [
      {
        label: "Voir sur GitHub",
        href: "https://github.com/chaidatou/porte-folio-de-KOINDA-Larissa-Chaidatou",
      },
    ],
  },
  {
    id: "04",
    title: "Audits & labs de sécurité terrain",
    status: "Terrain",
    description:
      "Des audits menés sur des applications réelles en production, selon les standards OWASP : analyse, tests, rapports livrés, remédiation accompagnée. Des systèmes plus solides après notre passage.",
    tools: ["OWASP", "Tests d'intrusion", "Rapports", "Remédiation"],
    note: "Nous montrons notre méthode et ce que nous avons fait, jamais les failles trouvées chez nos clients.",
    link: { label: "Voir le détail des missions", href: "#missions" },
  },
  {
    id: "05",
    title: "Sécurisation & Durcissement d'un Serveur Ubuntu",
    status: "Laboratoire technique",
    description:
      "Projet complet de sécurisation d'un serveur Ubuntu — configuration SSH sécurisée (désactivation root, restriction utilisateurs, journalisation), déploiement d'Apache avec HTTPS, et protection automatique avec Fail2Ban contre les attaques bruteforce. Documentation complète disponible sur GitHub.",
    tools: ["Ubuntu Server", "SSH", "Apache", "HTTPS", "Fail2Ban", "Linux"],
    github: [
      {
        label: "SSH",
        href: "https://github.com/chaidatou/Installation-et-configuration-de-ssh",
      },
      {
        label: "Apache + Fail2Ban",
        href: "https://github.com/chaidatou/Installation-et-configuration-de-apache-et-fail2ban",
      },
      {
        label: "Linux SSH Security Lab",
        href: "https://github.com/chaidatou/linux-ssh-security-lab",
      },
      {
        label: "Ubuntu Server",
        href: "https://github.com/chaidatou/ubuntu-server-installation",
      },
    ],
  },
];

function ProjectItem({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
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
      className="relative flex flex-col gap-4 overflow-hidden border-l-2 border-pink-400/20 pl-6 sm:pl-10"
    >
      <NetworkBackground density={0.6} className="opacity-40" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 -top-8 select-none text-7xl font-bold text-white/[0.04] sm:-left-2 sm:text-8xl"
      >
        {project.id}
      </span>

      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
          {project.title}
        </h3>
        <span className="rounded-full border border-pink-400/25 px-3 py-1 text-xs uppercase tracking-widest text-pink-200">
          {project.status}
        </span>
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
        {project.description}
      </p>

      <p className="text-xs uppercase tracking-widest text-fuchsia-300 sm:text-sm">
        {project.tools.join("   ·   ")}
      </p>

      {project.note && (
        <p className="flex max-w-2xl items-start gap-2 text-xs text-zinc-500 sm:text-sm">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="mt-0.5 h-3 w-3 shrink-0 text-pink-300/70"
          />
          Confidentialité : {project.note}
        </p>
      )}

      {project.link && (
        <a
          href={project.link.href}
          className="inline-flex items-center gap-2 text-sm text-pink-300 underline-offset-4 hover:underline"
        >
          {project.link.label}
          <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
        </a>
      )}

      {project.github && project.github.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.github.map((g) => (
            <a
              key={g.href}
              href={g.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-pink-400/25 px-4 py-2 text-xs uppercase tracking-widest text-pink-200 transition-colors hover:border-pink-300 hover:bg-pink-500/10"
            >
              <FontAwesomeIcon icon={faGithub} className="h-3.5 w-3.5" />
              {g.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [firstHalf, secondHalf] = [PROJECTS.slice(0, 2), PROJECTS.slice(2)];

  return (
    <section id="projects" className="relative bg-[#0a0714] px-6 py-32">
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          Projets
        </p>
        <h2 className="mt-4 bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text font-serif text-3xl italic text-transparent sm:text-4xl">
          Nous ne disons pas ce que nous savons faire. Nous le construisons.
        </h2>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-24">
        {firstHalf.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}

        <p className="bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text text-center font-serif text-2xl text-transparent sm:text-3xl">
          Technicienne le jour, créatrice tout le temps.
        </p>

        {secondHalf.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index + 2} />
        ))}
      </div>
    </section>
  );
}
