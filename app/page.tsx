"use client";
import { HeroSection } from "./components/Landing/HeroSection";
import { OfferingsSection } from "./components/Landing/OfferingsSection";
import { ValuePropositionSection } from "./components/Landing/ValuePropositionSection";
import { OutcomeImpactSection } from "./components/Landing/OutcomeImpactSection";
import { CollaborativeProcessSection } from "./components/Landing/CollaborativeProcessSection";
import { AboutUsSection } from "./components/Landing/AboutUsSection";
import { VisionMissionSection } from "./components/Landing/VisionMissionSection";
import { CoreValuesSection } from "./components/Landing/CoreValuesSection";
import { FoundersSection } from "./components/Landing/FoundersSection";
import { AdvisoryBoardSection } from "./components/Landing/AdvisoryBoardSection";
import { AssociatesSection } from "./components/Landing/AssociatesSection";
import { TeamSection } from "./components/Landing/TeamSection";
import { PartnersEcosystemSection } from "./components/Landing/PartnersEcosystemSection";
import { ResourcesSection } from "./components/Landing/ResourcesSection";
import { ContactSection } from "./components/Landing/ContactSection";
import { WhatsAppFloat } from "./components/Landing/WhatsAppFloat";
import { AchieveSection } from "./components/Landing/AchieveSection";
import { OurSolutionsSection } from "./components/Landing/OurSolutions";

export default function IntellideaLanding() {
  return (
    <div className="antialiased text-gray-900 bg-white selection:bg-[#F9C100] selection:text-[#2C466D]">
      <HeroSection />
      <WhatsAppFloat />
      <AchieveSection />
      <OurSolutionsSection />
      <OfferingsSection />
      <ValuePropositionSection />
      <OutcomeImpactSection />
      <CollaborativeProcessSection />
      <AboutUsSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <FoundersSection />
      <AdvisoryBoardSection />
      <AssociatesSection />
      <TeamSection />
      <PartnersEcosystemSection />
      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
