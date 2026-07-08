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

export default function Home() {
  return (
    <>
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
