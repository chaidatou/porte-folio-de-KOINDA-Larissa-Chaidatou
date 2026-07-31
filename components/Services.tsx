"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faServer,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";
import CyberGrid from "@/components/CyberGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    icon: faBug,
    title: "Audit & Pentest Web/Mobile/API",
    description:
      "Nous testons vos applications et API comme un attaquant réel le ferait — avant qu'un vrai attaquant ne le fasse. SQLi, XSS, CSRF, JWT, CORS, authentification...",
    benefit:
      "Vous recevez un rapport complet avec chaque vulnérabilité, son niveau de criticité et un plan de remédiation priorisé.",
  },
  {
    icon: faServer,
    title: "Sécurisation & Durcissement de Serveurs",
    description:
      "Nous durcissons votre infrastructure Linux/Windows de A à Z : SSH, Fail2Ban, UFW, Nginx, HTTPS, 2FA, gestion des secrets, configuration sécurisée.",
    benefit:
      "Votre serveur devient une forteresse. Nous ne partons pas avant que chaque faille soit corrigée.",
  },
  {
    icon: faSatelliteDish,
    title: "Monitoring SOC & Surveillance Continue",
    description:
      "Nous mettons en place une surveillance temps réel de vos systèmes : collecte de logs, détection d'anomalies, corrélation d'alertes, réponse aux incidents.",
    benefit: "Vous développez votre produit. Nous veillons sur votre infrastructure.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
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
      className="flex flex-col gap-5 rounded-2xl border border-pink-400/15 bg-white/[0.02] p-8"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-400/30 bg-pink-500/10 text-pink-200">
        <FontAwesomeIcon icon={service.icon} className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">
        {service.description}
      </p>
      <p className="border-t border-pink-400/10 pt-4 text-sm leading-relaxed text-pink-200/90">
        {service.benefit}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0a0714] px-6 py-32">
      <CyberGrid />
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          Nos services
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Ce que nous faisons pour votre entreprise
        </h2>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
