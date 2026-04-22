import { Nav } from "./components/Nav";
import { CoverageSection } from "./sections/CoverageSection";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { HowSection } from "./sections/HowSection";
import { ImpactSection } from "./sections/ImpactSection";
import { ProblemSection } from "./sections/ProblemSection";
import { SocialTheorySection } from "./sections/SocialTheorySection";
import { StrategicAnalysisSection } from "./sections/StrategicAnalysisSection";
import { TeamSection } from "./sections/TeamSection";
import { TryDemoSection } from "./sections/TryDemoSection";
import { WireframesSection } from "./sections/WireframesSection";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <HowSection />
        <WireframesSection />
        <TryDemoSection />
        <CoverageSection />
        <StrategicAnalysisSection />
        <SocialTheorySection />
        <ImpactSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
