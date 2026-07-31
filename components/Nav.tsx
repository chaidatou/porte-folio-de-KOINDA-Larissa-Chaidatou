"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#missions", label: "Missions" },
  { href: "#projects", label: "Projets" },
  { href: "#methode", label: "Méthode" },
  { href: "#arsenal", label: "Arsenal" },
  { href: "#engagement", label: "Engagement" },
  { href: "#parcours", label: "Parcours" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#invitation", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-pink-400/10 bg-[#0a0714]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text font-serif text-lg text-transparent"
        >
          Larissa Koinda
        </a>

        <nav className="hidden items-center gap-5 text-sm text-zinc-300 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-pink-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-pink-400/25 text-pink-200 lg:hidden"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-4 w-4" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-pink-400/10 bg-[#0a0714] px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-zinc-200 transition-colors hover:bg-pink-400/10 hover:text-pink-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
