import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import WhyTestingSection from "@/sections/WhyTestingSection";
import RoadmapSection from "@/sections/RoadmapSection";
import WhyUsSection from "@/sections/WhyUsSection";
import ResourcesSection from "@/sections/ResourcesSection";
import RulesSection from "@/sections/RulesSection";
import SolutionsSection from "@/sections/SolutionsSection";
import FaqSection from "@/sections/FaqSection";
import EnrollSection from "@/sections/EnrollSection";
import ContactSection from "@/sections/ContactSection";

const sectionMap = {
  hero: HeroSection,
  about: AboutSection,
  whyTesting: WhyTestingSection,
  roadmap: RoadmapSection,
  whyUs: WhyUsSection,
  resources: ResourcesSection,
  rules: RulesSection,
  solutions: SolutionsSection,
  faq: FaqSection,
  enroll: EnrollSection,
  contact: ContactSection,
};

export default function SectionRenderer({ sections }) {
  return (
    <>
      {sections.map((section, index) => {
        const Component = sectionMap[section.type];

        if (!Component) return null;

        return <Component key={`${section.type}-${index}`} {...section.props} />;
      })}
    </>
  );
}
