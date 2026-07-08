# 🧭 GUIDE PAS-À-PAS — Construire mon portfolio avec Claude Code
### Pour Larissa — de zéro jusqu'au site en ligne

> **À lire d'abord :** Tu n'as PAS besoin de savoir coder. Tu parles à Claude Code en français,
> il fait la technique. Ton travail : donner les instructions, regarder le résultat, dire ce que
> tu veux changer. Prends ton temps. Valide une étape avant de passer à la suivante.

> **La règle d'or :** UNE chose à la fois. Ne demande jamais tout d'un coup. Après chaque étape,
> tu regardes, tu testes, et seulement après tu passes à la suite.

---

## 🎬 AVANT DE COMMENCER — Préparer le dossier

Dans ton terminal Ubuntu, tape ces lignes une par une (appuie sur Entrée après chaque) :

```
mkdir portfolio-larissa
cd portfolio-larissa
```

Puis mets DANS ce dossier `portfolio-larissa` les fichiers que tu as déjà :
- `CV-Larissa-Koinda.pdf`
- La bible `Larissa-Bible-Salle-des-Signaux.pdf`
- Ta vidéo `intro-larissa.mp4` (quand tu l'auras générée sur Google Flow)
- `intro-poster.png` (l'image du cadenas figé)

*(Si tu n'as pas encore la vidéo, pas grave — on commencera sans, avec l'effet de secours.)*

Ensuite lance Claude Code :

```
claude
```

---

## 📍 ÉTAPE 1 — Présenter le projet à Claude Code

**Ce que tu tapes à Claude Code (copie-colle) :**

> Bonjour ! Je construis mon portfolio de cybersécurité, une expérience immersive (pas un CV
> classique). Je ne suis pas développeuse, donc explique-moi simplement et guide-moi.
> J'ai un fichier "02-PROMPT-Claude-Code.md" avec toute la vision, et une bible PDF.
> Peux-tu d'abord lire ces fichiers et me confirmer que tu as compris le projet, avant qu'on
> commence à construire ?

**Ce qui va se passer :** Claude Code va lire tes fichiers et te résumer le projet.

**Ce que tu fais :** Vérifie qu'il a bien compris. Si oui → étape 2. Sinon, précise.

---

## 📍 ÉTAPE 2 — Créer la base du projet

**Ce que tu tapes :**

> Parfait. Créons la structure du projet : un site Next.js avec TypeScript, Tailwind CSS,
> GSAP et Lenis. Configure tout ce qu'il faut et lance-le pour que je puisse voir une page
> blanche fonctionner dans mon navigateur. Explique-moi comment ouvrir cette page.

**Ce qui va se passer :** Claude Code installe plein de choses (c'est normal, ça prend quelques
minutes) et te dira quelque chose comme "ouvre http://localhost:3000 dans ton navigateur".

**Ce que tu fais :** Ouvre ton navigateur, tape cette adresse. Tu dois voir une page. Même si
elle est vide ou moche, c'est NORMAL — ça veut dire que ça marche. Dis "OK je vois la page".

💡 **Astuce :** Laisse cette page ouverte. À chaque changement, elle se met à jour toute seule.

---

## 📍 ÉTAPE 3 — L'écran d'accueil magique (ton visage → cadenas)

**Ce que tu tapes :**

> Construisons maintenant l'écran d'accueil. J'ai une vidéo "intro-larissa.mp4" : mon visage
> tourne et mes cheveux se transforment en cadenas de cybersécurité. Fais que cette vidéo
> joue en plein écran au chargement (une seule fois), sur fond #0a0714. Ensuite, une phrase
> apparaît en douceur en dégradé rose→violet (police Instrument Serif) :
> « Vos données viennent d'entrer en zone sécurisée. »
> Puis un bouton "Entrer" avec une flèche. Prévois un effet de secours (particules roses qui
> forment un cadenas) si la vidéo ne se charge pas.

**Si tu n'as pas encore la vidéo, tape plutôt :**

> Je n'ai pas encore la vidéo. Commence par l'effet de secours : des particules roses et
> violettes qui forment un cadenas, avec la phrase et le bouton "Entrer". On ajoutera la
> vidéo plus tard.

**Ce que tu fais :** Regarde la page. Dis ce qui te plaît ou pas ("le rose est trop clair",
"la phrase apparaît trop vite", etc.). Claude Code ajuste jusqu'à ce que tu sois contente.

---

## 📍 ÉTAPE 4 — Le hero (ton nom + tes chiffres)

**Ce que tu tapes :**

> Maintenant la section juste après l'accueil : mon nom "Larissa Koinda" en grand avec le
> dégradé rose→violet, le sous-titre "Cybersecurity Analyst · CCNA · Future CEH", et 4
> chiffres qui s'animent : 6+ audits réels, 9 certifications, 3 missions actives, 20+ outils.
> Ajoute un curseur qui laisse une traînée de lumière rose.

**Ce que tu fais :** Vérifie que ton nom s'affiche bien, que les chiffres montent. Ajuste.

---

## 📍 ÉTAPE 5 — TES MISSIONS (le plus important !)

**Ce que tu tapes :**

> Construisons la section la plus importante : mes missions terrain. Je veux que chaque
> mission se révèle au scroll comme une "mission" (pas une carte classique). Voici mes 5
> missions — montre MA MÉTHODE et CE QUE J'AI FAIT, jamais les failles trouvées chez les
> clients (confidentialité absolue) :
>
> 1. ScanEvent (Alger) — Audit sécurité app web & mobile : API, contrôles d'accès, auth, OWASP
> 2. TIIM (Burkina Faso) — Audit vulnérabilités web : headers, sessions, tests, rapports
> 3. Next-Git — SOC automatisé : Suricata, Snort, Zeek, FAIL2BAN, corrélation d'alertes
> 4. Lab personnel (Alger) — Serveur Ubuntu durci : DNS, SSH, Apache HTTPS, Postfix, SSL/TLS
> 5. Soft-Consulting (Ouaga) — Stage admin systèmes & réseaux
>
> Mets bien en valeur mon expérience, c'est ma plus grande force.

**Ce que tu fais :** C'est ta section clé. Prends le temps de la rendre parfaite.

---

## 📍 ÉTAPE 6 — Les autres sections (une par une !)

Demande-les UNE PAR UNE, dans cet ordre. Après chaque, tu valides avant la suivante :

**6a — La Méthode :**
> Ajoute une section "Méthode" : mon processus d'audit en 5 étapes — Reconnaissance, Analyse,
> Exploitation contrôlée, Rapport & priorisation, Remédiation & suivi.

**6b — L'Arsenal (compétences) :**
> Ajoute mes compétences groupées : Offensive (Burp, Metasploit, Kali, OWASP, XSS/SQLi/CSRF/JWT),
> SOC (Suricata, Snort, Zeek, Wireshark, FAIL2BAN), Système/Réseau (Linux, Windows Server, AD,
> SSH, DNS, DHCP, Apache, Postfix, VMware), Dev (Python, Bash, Powershell, HTML, Git, Flutter,
> Dart), Création IA (Microsoft AI Skills).

**6c — Engagement social :**
> Ajoute ma section engagement : formatrice en protection des données et anti-arnaques. J'ai
> aidé des gens à récupérer leurs infos, supprimer des données indésirables, échapper à des
> arnaques. Je remets une certification à chaque participant et je propose des formations
> gratuites pour l'accessibilité.

**6d — Parcours (formation + certifs) :**
> Ajoute mon parcours : BTS Cybersécurité (Sidi Bel Abbès, depuis 2024), Bac Scientifique
> (Koudougou, Burkina Faso). Certifications : CCNA ✓, CEH (en prépa), AWS Cloud Practitioner
> niveau 1 (en prépa), Hacking Éthique Cisco ✓, Hacking Éthique Udemy ✓, Intro Cybersecurity ✓,
> Microsoft AI Skills ✓, Bash·Python·HTML ✓.

**6e — Contact / Invitation :**
> Ajoute la section finale "L'invitation" (pas "Contact") : email koindalarissa@gmail.com,
> tél +213 670 43 68 07, LinkedIn koinda-larissa-chaidatou, un bouton pour télécharger mon CV.
> Termine par ma phrase : « Si vous cherchez une professionnelle en cybersécurité prête à
> défendre vos systèmes — et à apprendre ce qu'elle ne sait pas encore — vous venez de me
> trouver. »

---

## 📍 ÉTAPE 7 — Vérifier le mobile

**Ce que tu tapes :**

> Vérifie que tout le site est parfait sur téléphone : le texte lisible, les images bien
> placées, rien qui déborde, la vidéo d'accueil qui s'adapte. Corrige ce qui ne va pas.

**Ce que tu fais :** Sur ton navigateur, teste en réduisant la fenêtre (ou ouvre le site sur
ton vrai téléphone). Signale ce qui est bizarre.

---

## 📍 ÉTAPE 8 — Mettre le site sur GitHub + en ligne

**Ce que tu tapes :**

> Le site me plaît ! Maintenant aide-moi à le mettre en ligne. Guide-moi étape par étape pour :
> 1. Créer un dépôt sur GitHub et y pousser le code
> 2. Déployer le site pour qu'il soit accessible par un lien public
> Explique-moi chaque commande simplement, je ne connais pas Git.

**Ce qui va se passer :** Claude Code va te guider pour créer un compte/repo GitHub si besoin,
et déployer (probablement sur Vercel, le plus simple pour Next.js). À la fin, tu auras un
LIEN PUBLIC à partager aux recruteurs. 🎉

---

## 🆘 SI TU ES BLOQUÉE (phrases magiques)

- **Une erreur rouge apparaît ?** → Copie-la et dis : *"J'ai cette erreur, peux-tu la corriger ?"*
- **Tu ne comprends pas ?** → *"Explique-moi plus simplement, je ne suis pas développeuse."*
- **Ça ne ressemble pas à ce que tu voulais ?** → Décris ce que tu vois et ce que tu veux à la place.
- **Tu veux revenir en arrière ?** → *"Annule le dernier changement, je préférais avant."*
- **C'est trop long/tu es perdue ?** → *"Récapitule où on en est et quelle est la prochaine étape."*

---

## 💜 RAPPELS IMPORTANTS

- Tu ne peux RIEN casser. Si un essai ne marche pas, on annule et on recommence.
- Claude Code sauvegarde ton travail au fur et à mesure. Tu peux fermer et revenir plus tard :
  il suffit de refaire `cd portfolio-larissa` puis `claude`.
- Sauvegarde régulièrement sur GitHub (Claude Code t'expliquera comment avec `git push`).
- Personne ne construit un site parfait du premier coup. C'est normal d'ajuster 10 fois.
- Tu apprends en faisant. Chaque étape passée = une compétence de plus. 🚀

---

### 📂 Tes fichiers de référence
- `00-GUIDE-Pas-a-Pas.md` ← CE fichier (garde-le ouvert)
- `01-PROMPT-Google-Flow.md` ← pour générer la vidéo d'accueil
- `02-PROMPT-Claude-Code.md` ← la vision détaillée (Claude Code la lira)
- `Larissa-Bible-Salle-des-Signaux.pdf` ← la vision d'ensemble
- `CV-Larissa-Koinda.pdf` ← ton CV
