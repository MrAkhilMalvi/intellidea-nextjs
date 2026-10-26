"use client";
import { HeroSection } from "./HeroSection";
import { OfferingsSection } from "./OfferingsSection";
import { ValuePropositionSection } from "./ValuePropositionSection";
import { OutcomeImpactSection } from "./OutcomeImpactSection";
import { CollaborativeProcessSection } from "./CollaborativeProcessSection";
import { AboutUsSection } from "./AboutUsSection";
import { VisionMissionSection } from "./VisionMissionSection";
import { CoreValuesSection } from "./CoreValuesSection";
import { FoundersSection } from "./FoundersSection";
import { AdvisoryBoardSection } from "./AdvisoryBoardSection";
import { AssociatesSection } from "./AssociatesSection";
import { TeamSection } from "./TeamSection";
import { PartnersEcosystemSection } from "./PartnersEcosystemSection";
import { ResourcesSection } from "./ResourcesSection";
import { ContactSection } from "./ContactSection";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { AchieveSection } from "./AchieveSection";
import { OurSolutionsSection } from "./OurSolutions";
import { WhatWeSolve } from "./WhatWeSolve";

export function HomePage() {
  return (
    <div className="antialiased text-gray-900 bg-white selection:bg-[#F9C100] selection:text-[#2C466D]">
      <HeroSection />
      <WhatsAppFloat />
      <AchieveSection />
      <WhatWeSolve />
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
      <TeamSection />
      <PartnersEcosystemSection />
      <AssociatesSection />
      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
