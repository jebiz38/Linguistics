import { HeroSection } from "./components/landing/HeroSection";
import { AcademyIntroduction } from "./components/landing/AcademyIntroduction";
import { AcademicCredentials } from "./components/landing/AcademicCredentials";
import { LearningPathways } from "./components/landing/LearningPathways";
import { ClassVideos } from "./components/landing/ClassVideos";
import { ClassSchedule } from "./components/landing/ClassSchedule";
import { FinalCtaFooter } from "./components/landing/FinalCtaFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AcademyIntroduction />
      <AcademicCredentials />
      <LearningPathways />
      <ClassVideos />
      <ClassSchedule />
      <FinalCtaFooter />
    </main>
  );
}
