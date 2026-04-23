import { HeroSection } from "./components/landing/HeroSection";
import { AcademicCredentials } from "./components/landing/AcademicCredentials";
import { ThreePillars } from "./components/landing/ThreePillars";
import { LearningPathways } from "./components/landing/LearningPathways";
import { FinalCtaFooter } from "./components/landing/FinalCtaFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AcademicCredentials />
      <ThreePillars />
      <LearningPathways />
      <FinalCtaFooter />
    </main>
  );
}
