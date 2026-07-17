"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import profilePhoto from "@/public/images/larissa-photo-profil.jpg";

export default function FloatingProfile() {
  const [ready, setReady] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveal = () => setReady(true);
    window.addEventListener("intro:complete", reveal);
    return () => window.removeEventListener("intro:complete", reveal);
  }, []);

  useEffect(() => {
    if (!ready || !wrapperRef.current) return;
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.4)", delay: 0.3 }
    );
  }, [ready]);

  const closeBubble = () => {
    if (!bubbleRef.current) return;
    gsap.to(bubbleRef.current, {
      opacity: 0,
      y: 10,
      scale: 0.95,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => setBubbleOpen(false),
    });
  };

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 z-30 flex flex-col items-end gap-3 opacity-0 sm:right-6"
    >
      {bubbleOpen && (
        <div
          ref={bubbleRef}
          role="button"
          tabIndex={0}
          onClick={closeBubble}
          onKeyDown={(e) => e.key === "Enter" && closeBubble()}
          className="pointer-events-auto relative max-w-[240px] cursor-pointer rounded-2xl border border-pink-400/25 bg-[#150c26]/90 px-4 py-3 text-xs leading-relaxed text-zinc-200 shadow-[0_8px_30px_rgba(168,85,247,0.25)] backdrop-blur transition-transform hover:scale-[1.02] sm:max-w-[260px] sm:text-sm"
        >
          <button
            aria-label="Fermer"
            onClick={(e) => {
              e.stopPropagation();
              closeBubble();
            }}
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-pink-400/40 bg-[#0a0714] text-pink-200 hover:text-pink-100"
          >
            <FontAwesomeIcon icon={faXmark} className="h-2.5 w-2.5" />
          </button>
          Bienvenue dans mon univers 💜 Je suis Larissa Koinda — analyste en
          cybersécurité.
          <span
            aria-hidden="true"
            className="absolute -bottom-1.5 right-8 h-3 w-3 rotate-45 border-b border-r border-pink-400/25 bg-[#150c26]/90"
          />
        </div>
      )}

      <button
        onClick={closeBubble}
        aria-label="Photo de Larissa Koinda"
        className="pointer-events-auto relative h-16 w-16 shrink-0 animate-float-slow sm:h-20 sm:w-20"
      >
        <span className="absolute -inset-1 animate-halo-spin rounded-full bg-[conic-gradient(from_0deg,#f9a8d4,#c084fc,#f472b6,#a855f7,#f9a8d4)] blur-[1px]" />
        <span className="absolute inset-0 rounded-full bg-[#0a0714]" />
        <span className="absolute inset-[3px] overflow-hidden rounded-full">
          <Image
            src={profilePhoto}
            alt="Larissa Koinda"
            fill
            sizes="80px"
            className="object-cover"
            priority={false}
          />
        </span>
      </button>
    </div>
  );
}
