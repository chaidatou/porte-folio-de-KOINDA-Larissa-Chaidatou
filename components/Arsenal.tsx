"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberGrid from "@/components/CyberGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ARSENAL = [
  {
    id: "offensive",
    title: "Offensive",
    skills: ["Burp Suite", "Metasploit", "Kali Linux", "OWASP", "XSS", "SQLi", "CSRF", "JWT"],
  },
  {
    id: "soc",
    title: "SOC",
    skills: ["Suricata", "Snort", "Zeek", "Wireshark", "FAIL2BAN"],
  },
  {
    id: "systeme-reseau",
    title: "Système & Réseau",
    skills: [
      "Linux",
      "Windows Server",
      "Active Directory",
      "SSH",
      "DNS",
      "DHCP",
      "Apache",
      "Postfix",
      "VMware",
    ],
  },
  {
    id: "dev",
    title: "Dev",
    skills: ["Python", "Bash", "PowerShell", "HTML", "Git", "Flutter", "Dart"],
  },
  {
    id: "creation-ia",
    title: "Création IA",
    skills: ["Microsoft AI Skills"],
  },
];

function ArsenalCategory({
  category,
  index,
  span,
}: {
  category: (typeof ARSENAL)[number];
  index: number;
  span?: boolean;
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
      gsap.fromTo(
        el.querySelectorAll("[data-tag]"),
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.3,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-4 rounded-2xl border border-pink-400/15 bg-white/[0.02] p-8 ${
        span ? "sm:col-span-2" : ""
      }`}
    >
      <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            data-tag
            className="rounded-full border border-pink-400/25 px-3 py-1 text-xs text-pink-100 sm:text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Arsenal() {
  return (
    <section id="arsenal" className="relative bg-[#0a0714] px-6 py-32">
      <CyberGrid />
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          Arsenal
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Les outils que je maîtrise
        </h2>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {ARSENAL.map((category, index) => (
          <ArsenalCategory
            key={category.id}
            category={category}
            index={index}
            span={index === ARSENAL.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
