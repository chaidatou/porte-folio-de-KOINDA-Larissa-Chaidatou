"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const STATS = [
  { value: 6, suffix: "+", label: "audits réels" },
  { value: 9, suffix: "", label: "certifications" },
  { value: 3, suffix: "", label: "missions actives" },
  { value: 20, suffix: "+", label: "outils maîtrisés" },
];

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || !numberRef.current) return;
    const counter = { n: 0 };
    gsap.to(counter, {
      n: value,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.round(counter.n).toString();
        }
      },
    });
  }, [started, value]);

  return (
    <div ref={wrapperRef} className="flex flex-col items-center gap-1">
      <p className="bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
        <span ref={numberRef}>0</span>
        {suffix}
      </p>
      <p className="text-center text-xs uppercase tracking-widest text-zinc-400 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-16 bg-[#0a0714] px-6 py-24 text-center">
      <div className="flex flex-col items-center gap-8">
        <div>
          <h1 className="bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Larissa Chaidatou Koinda
          </h1>
          <p className="mt-4 text-lg text-zinc-300 sm:text-xl">
            Analyste en Cybersécurité · CCNA · Future CEH
          </p>
        </div>
        <a
          href="/CV-Larissa-Koinda.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-pink-300/40 px-6 py-2.5 text-sm uppercase tracking-widest text-pink-100 transition-colors hover:border-pink-300 hover:bg-pink-500/10"
        >
          Télécharger mon CV
          <FontAwesomeIcon icon={faDownload} className="h-3.5 w-3.5" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4 sm:gap-x-16">
        {STATS.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
