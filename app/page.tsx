import IntroScreen from "@/components/IntroScreen";
import Hero from "@/components/Hero";
import Missions from "@/components/Missions";
import Projects from "@/components/Projects";
import Method from "@/components/Method";
import Arsenal from "@/components/Arsenal";
import Engagement from "@/components/Engagement";
import Parcours from "@/components/Parcours";
import Invitation from "@/components/Invitation";
import Tagline from "@/components/Tagline";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Larissa Chaidatou Koinda",
  alternateName: "Larissa Koinda",
  jobTitle: "Analyste en Cybersécurité",
  description:
    "Analyste en cybersécurité basée à Alger, Algérie. Certifiée CCNA, future CEH.",
  url: "https://porte-folio-de-koinda-larissa-chaid.vercel.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alger",
    addressCountry: "DZ",
  },
  sameAs: [
    "https://www.linkedin.com/in/koinda-larissa-chaidatou/",
    "https://github.com/chaidatou",
  ],
  knowsAbout: [
    "Cybersécurité",
    "Sécurité informatique",
    "Pentest",
    "SOC",
    "CCNA",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <IntroScreen />
      <main className="bg-[#0a0714]">
        <Hero />
        <Tagline>
          Je ne sécurise pas des machines. Je protège les personnes derrière.
        </Tagline>
        <Missions />
        <Tagline>
          Pendant que d&apos;autres attendent qu&apos;on leur enseigne, je
          construis déjà.
        </Tagline>
        <Projects />
        <Method />
        <Arsenal />
        <Engagement />
        <Parcours />
        <Tagline>
          Fiable, curieuse, déjà en mouvement. Vous venez de la trouver.
        </Tagline>
        <Invitation />
      </main>
    </>
  );
}
