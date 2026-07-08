"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LOCK_PATH =
  "M32,52 L32,34 A18,18 0 0 1 68,34 L68,52 " +
  "M22,52 Q22,46 28,46 L72,46 Q78,46 78,52 L78,104 Q78,110 72,110 L28,110 Q22,110 22,104 Z " +
  "M56,72 A6,6 0 1 1 44,72 A6,6 0 1 1 56,72 " +
  "M47,76 L53,76 L54,90 L46,90 Z";

const PARTICLE_COUNT = 220;

function LockParticles({ active }: { active: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    setPoints(
      Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const p = pathRef.current!.getPointAtLength((i / PARTICLE_COUNT) * length);
        return { x: p.x, y: p.y };
      })
    );
  }, []);

  useEffect(() => {
    if (!active || points.length === 0 || !containerRef.current) return;
    const particles = containerRef.current.querySelectorAll<HTMLDivElement>("[data-particle]");

    gsap.set(particles, {
      x: () => gsap.utils.random(-420, 420),
      y: () => gsap.utils.random(-420, 420),
      opacity: 0,
      scale: 0,
    });

    gsap.to(particles, {
      x: (i) => (points[i].x - 50) * 4,
      y: (i) => (points[i].y - 60) * 4,
      opacity: 1,
      scale: 1,
      duration: 1.6,
      ease: "power3.out",
      stagger: { each: 0.004, from: "random" },
    });

    gsap.to(particles, {
      boxShadow: "0 0 12px 2px rgba(244,114,182,0.85)",
      repeat: -1,
      yoyo: true,
      duration: 1.8,
      ease: "sine.inOut",
      delay: 1.7,
      stagger: 0.01,
    });
  }, [active, points]);

  return (
    <div ref={containerRef} className="relative flex h-full w-full items-center justify-center">
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <path ref={pathRef} d={LOCK_PATH} />
      </svg>
      {points.map((_, i) => (
        <div
          key={i}
          data-particle
          className="absolute h-1.5 w-1.5 rounded-full bg-gradient-to-br from-pink-400 to-purple-500"
          style={{ left: "50%", top: "50%" }}
        />
      ))}
    </div>
  );
}

type Phase = "video" | "fallback" | "text";

export default function IntroScreen() {
  const [phase, setPhase] = useState<Phase>("video");
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase !== "fallback") return;
    const timer = setTimeout(() => setPhase("text"), 2600);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "text" || !textRef.current) return;
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1.1, ease: "power2.out", stagger: 0.35 }
    );
  }, [phase]);

  const handleEnter = () => {
    if (!overlayRef.current) return;
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.9,
      ease: "power2.inOut",
      onComplete: () => setVisible(false),
    });
  };

  if (!visible) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-50 overflow-hidden bg-[#0a0714]">
      {phase !== "fallback" && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/intro-larissa.mp4"
          autoPlay
          muted
          playsInline
          onEnded={() => setPhase("text")}
          onError={() => setPhase("fallback")}
        />
      )}

      {phase === "fallback" && <LockParticles active />}

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a0714] to-transparent transition-opacity duration-700"
        style={{ opacity: phase === "text" ? 1 : 0.35 }}
      />

      <div
        ref={textRef}
        className={`relative z-10 flex h-full flex-col items-center justify-center px-6 text-center ${
          phase === "text" ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <h1 className="max-w-2xl font-serif text-3xl leading-snug text-transparent opacity-0 sm:text-5xl bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text">
          Vos données viennent d&apos;entrer en zone sécurisée.
        </h1>
        <button
          onClick={handleEnter}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-pink-300/40 px-8 py-3 text-sm uppercase tracking-widest text-pink-100 opacity-0 transition-colors hover:border-pink-300 hover:bg-pink-500/10"
        >
          Entrer
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
