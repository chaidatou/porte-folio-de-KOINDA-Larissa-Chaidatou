"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FORMATION = [
  {
    title: "BTS Cybersécurité",
    place: "Sidi Bel Abbès, Algérie",
    date: "Depuis 2024",
  },
  {
    title: "Bac Scientifique",
    place: "Koudougou, Burkina Faso",
    date: "",
  },
];

const CERTIFICATIONS = [
  { title: "CCNA", status: "done" },
  { title: "CEH", status: "progress" },
  { title: "AWS Cloud Practitioner", status: "progress" },
  { title: "Hacking Éthique — Cisco", status: "done" },
  { title: "Hacking Éthique — Udemy", status: "done" },
  { title: "Introduction to Cybersecurity", status: "done" },
  { title: "Microsoft AI Skills", status: "done" },
  { title: "Bash · Python · HTML", status: "done" },
];

export default function Parcours() {
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
          stagger: 0.06,
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
    <section id="parcours" className="relative bg-[#0a0714] px-6 py-32">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
          Parcours
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Formation & certifications
        </h2>
      </div>

      <div
        ref={sectionRef}
        className="mx-auto grid max-w-5xl gap-16 sm:grid-cols-[280px_1fr] sm:gap-12"
      >
        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            Formation
          </h3>
          <div className="flex flex-col gap-8 border-l-2 border-pink-400/20 pl-6">
            {FORMATION.map((item) => (
              <div key={item.title} data-reveal>
                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-400">{item.place}</p>
                {item.date && (
                  <p className="mt-1 text-xs uppercase tracking-widest text-pink-300">
                    {item.date}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            Certifications
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => {
              const isDone = cert.status === "done";
              return (
                <div
                  key={cert.title}
                  data-reveal
                  className="flex items-center gap-3 rounded-xl border border-pink-400/15 bg-white/[0.02] px-4 py-3"
                >
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      isDone ? "bg-emerald-400" : "bg-pink-400/60"
                    }`}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm text-white">{cert.title}</span>
                    <span
                      className={`text-xs uppercase tracking-widest ${
                        isDone ? "text-emerald-400/80" : "text-pink-300/80"
                      }`}
                    >
                      {isDone ? "Validée" : "En préparation"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
