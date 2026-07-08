# 🚀 Prompt de démarrage pour Claude Code — Portfolio "La Salle des Signaux"

> **Comment l'utiliser** : ouvre Claude Code dans un dossier vide, puis colle le bloc ci-dessous.
> Construis **scène par scène** — ne demande jamais tout d'un coup. Valide chaque étape avant la suivante.

---

## 📋 PROMPT À COLLER (étape 1 — mise en place + écran d'accueil)

```
Je construis un portfolio immersif de cybersécurité — une expérience, pas un CV classique.
Je m'appelle Larissa Chaidatou Koinda, analyste en cybersécurité (Alger).

STACK souhaitée :
- Next.js (App Router) + TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger pour les animations
- Lenis pour le scroll fluide
- (plus tard : Three.js pour les scènes avancées)

PALETTE (à respecter partout) :
- Fond : #0a0714 (noir violacé profond)
- Rose principal : #FF2E88
- Violet : #7c3aed
- Magenta transition : #c026d3
- Blanc cassé : #f3ecff
- Gris texte : #8a7fa8
- Les accents utilisent un dégradé rose→magenta→violet.

TYPOGRAPHIE :
- Titres/âme : "Instrument Serif" (avec italique)
- Interface/données : "Space Mono"
- Corps : "Inter" ou "Space Grotesk"

PHILOSOPHIE : luxe, silence, espace, mystère, élégance. Style Apple × Interstellar × Nothing.
Chaque scène révèle progressivement qui je suis. Beaucoup de vide, de respiration, de lumière.

CE QUE JE VEUX CONSTRUIRE EN PREMIER — L'ÉCRAN D'ACCUEIL :
J'ai un fichier vidéo "intro-larissa.mp4" (généré avec Google Flow) : mon visage tourne,
mes cheveux se transforment en caractères de cybersécurité qui forment un cadenas.
- Au chargement du site, cette vidéo joue en plein écran, centrée, fond #0a0714.
- Elle joue UNE fois (pas de boucle), avec un poster "intro-poster.png" avant chargement.
- Pendant/après la vidéo, une phrase d'accueil apparaît en douceur, en dégradé rose→violet,
  police Instrument Serif : « Vos données viennent d'entrer en zone sécurisée. »
  (alternatives que je pourrai choisir : « Certains ferment des portes. Moi, je les verrouille. » /
   « Vous êtes maintenant sous protection. »)
- Puis une invitation « Entrer » avec une flèche animée vers le bas.
- Au clic / scroll / touche, transition en fondu vers le portfolio principal.
- IMPORTANT : prévois une alternative si la vidéo ne se charge pas (afficher intro-poster.png
  + un effet de particules roses formant un cadenas en fallback).
- Respecte "prefers-reduced-motion" (accessibilité) : saute la vidéo si activé.

Commençons UNIQUEMENT par ça : la structure du projet Next.js + cet écran d'accueil.
On construira les autres scènes ensuite, une par une.
```

---

## 🗺️ LES ÉTAPES SUIVANTES (à demander une par une, après validation de chaque scène)

**Étape 2 — Scène "L'Écoute" / Hero**
Demande : le hero qui suit l'intro — ton nom en grand (dégradé), le sous-titre "Cybersecurity Analyst · CCNA · Future CEH", tes 4 stats animées (6+ audits, 9 certifs, 3 missions, 20+ outils), curseur-lumière rose.

**Étape 3 — Scène "Les Missions" (LA PRIORITÉ — mets l'expérience en valeur)**
Tes 5 missions, chacune révélée au scroll comme une "mission" (pas une carte) :
1. ScanEvent (Alger) — Audit sécurité app web & mobile — API, contrôles d'accès, auth, OWASP
2. TIIM (Burkina Faso) — Audit vulnérabilités web — headers, sessions, injection, rapports
3. Next-Git — SOC automatisé — Suricata, Snort, Zeek, FAIL2BAN, corrélation d'alertes
4. Lab personnel (Alger) — Serveur Ubuntu durci — DNS, SSH, Apache HTTPS, Postfix, SSL/TLS
5. Soft-Consulting (Ouaga) — Stage admin systèmes & réseaux
⚠️ CONFIDENTIALITÉ : ne jamais exposer les failles précises trouvées chez les clients.
Montrer MA MÉTHODE et CE QUE J'AI FAIT, jamais les vulnérabilités découvertes.

**Étape 4 — Scène "La Méthode"**
Processus d'audit en 5 pulsations : Reconnaissance → Analyse → Exploitation contrôlée →
Rapport & priorisation → Remédiation & suivi. (Preuve de professionnalisme.)

**Étape 5 — Scène "Arsenal" (compétences)**
Offensive (Burp, Metasploit, Kali, OWASP, XSS/SQLi/CSRF/JWT) · SOC (Suricata, Snort, Zeek,
Wireshark, FAIL2BAN) · Système/Réseau (Linux, Windows Server, AD, SSH, DNS, DHCP, Apache,
Postfix, VMware) · Dev (Python, Bash, Powershell, HTML, Git, Flutter, Dart) ·
Création IA (Microsoft AI Skills — génération vidéo, séries, storytelling).

**Étape 6 — Scène "Transmission" (engagement social)**
Formatrice en protection des données & anti-arnaques. A aidé des personnes à récupérer leurs
informations, supprimer des données indésirables, échapper à des arnaques. Certification remise
à chaque participant. Formations gratuites pour l'accessibilité.

**Étape 7 — Scène "Parcours"**
Formation : BTS Cybersécurité (Sidi Bel Abbès, depuis 2024) · Bac Scientifique (Koudougou, BF).
Certifications : CCNA ✓, CEH (en prépa), AWS Cloud Practitioner niveau 1 (en prépa),
Hacking Éthique Cisco ✓, Hacking Éthique Udemy ✓, Intro Cybersecurity ✓, Microsoft AI Skills ✓,
Bash·Python·HTML ✓.

**Étape 8 — Scène "L'Invitation" (contact)**
Pas "Contact" mais une invitation. Email : koindalarissa@gmail.com · Tél : +213 670 43 68 07 ·
LinkedIn : koinda-larissa-chaidatou. Bouton téléchargement du CV.
Phrase signature : « Si vous cherchez une professionnelle en cybersécurité prête à défendre vos
systèmes — et à apprendre ce qu'elle ne sait pas encore — vous venez de me trouver. »

**Étape 9 — Le "Retournement" (l'effet signature de fin)**
Le site révèle qu'il a suivi le parcours du visiteur (scènes visitées, temps passé) et affiche
un message : « Vous voyez comme il est simple d'être observé ? Maintenant, imaginez quelqu'un
qui protège ça. » (Effet mémorable, cohérent avec le métier.)

---

## ✅ Règles à rappeler à Claude Code tout au long
- Une scène à la fois, validée avant la suivante.
- Toujours responsive (mobile parfait) + accessibilité (prefers-reduced-motion).
- Palette et typo respectées partout.
- Confidentialité client absolue sur les missions.
- Performance : le site doit rester rapide malgré les animations.
- Menu discret (pas de grosse barre classique) — navigation par scènes.

## 📎 Fichiers à avoir dans ton projet
- `intro-larissa.mp4` (vidéo Google Flow)
- `intro-poster.png` (image cadenas figée)
- `CV-Larissa-Koinda.pdf` (ton CV)
- La bible "La Salle des Signaux" (pour la vision d'ensemble)
