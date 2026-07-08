"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 10;

export default function CursorTrail() {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const positions = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }))
  );
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMove);

    let frame: number;
    const animate = () => {
      let x = mouse.current.x;
      let y = mouse.current.y;
      positions.current.forEach((pos, i) => {
        pos.x += (x - pos.x) * 0.35;
        pos.y += (y - pos.y) * 0.35;
        x = pos.x;
        y = pos.y;
        const el = dotsRef.current[i];
        if (el) el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] hidden sm:block">
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            dotsRef.current[i] = el;
          }}
          className="absolute left-0 top-0 rounded-full bg-pink-400"
          style={{
            width: `${10 - i * 0.7}px`,
            height: `${10 - i * 0.7}px`,
            marginLeft: `${-(10 - i * 0.7) / 2}px`,
            marginTop: `${-(10 - i * 0.7) / 2}px`,
            opacity: 1 - i / TRAIL_LENGTH,
            filter: "blur(1px)",
            boxShadow: "0 0 8px 2px rgba(244,114,182,0.6)",
          }}
        />
      ))}
    </div>
  );
}
