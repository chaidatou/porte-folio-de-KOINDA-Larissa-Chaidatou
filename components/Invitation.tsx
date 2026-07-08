"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CONTACTS = [
  {
    label: "Email",
    value: "koindalarissa@gmail.com",
    href: "mailto:koindalarissa@gmail.com",
  },
  {
    label: "Téléphone",
    value: "+213 670 43 68 07",
    href: "tel:+213670436807",
  },
  {
    label: "LinkedIn",
    value: "koinda-larissa-chaidatou",
    href: "https://www.linkedin.com/in/koinda-larissa-chaidatou/",
  },
];

export default function Invitation() {
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
          duration: 0.8,
          stagger: 0.1,
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
    <section
      id="invitation"
      className="relative bg-[#0a0714] px-6 py-32 text-center"
    >
      <div ref={sectionRef} className="mx-auto flex max-w-2xl flex-col items-center gap-14">
        <div data-reveal>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-pink-300">
            L&apos;invitation
          </p>
          <h2 className="mt-4 bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Parlons de vos systèmes.
          </h2>
        </div>

        <div data-reveal className="flex flex-col gap-6">
          {CONTACTS.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "LinkedIn" ? "_blank" : undefined}
              rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                {contact.label}
              </span>
              <span className="mt-1 text-lg text-zinc-200 transition-colors group-hover:text-pink-300 sm:text-xl">
                {contact.value}
              </span>
            </a>
          ))}
        </div>

        <a
          data-reveal
          href="/CV-Larissa-Koinda.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-pink-300/40 px-8 py-3 text-sm uppercase tracking-widest text-pink-100 transition-colors hover:border-pink-300 hover:bg-pink-500/10"
        >
          Télécharger mon CV
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
