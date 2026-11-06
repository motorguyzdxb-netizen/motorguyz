import Hero from "@/components/home/Hero";
import TrustMarquee from "@/components/home/TrustMarquee";
import ServicesSection from "@/components/home/ServicesSection";
import WhySection from "@/components/home/WhySection";
import ProcessSection from "@/components/home/ProcessSection";
import CoverageSection from "@/components/home/CoverageSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/site/FaqSection";
import CtaBand from "@/components/site/CtaBand";
import useSeo from "@/lib/useSeo";
import { faqs } from "@/lib/site";

export default function Home() {
  useSeo({
    title: "Motorguyz — Onsite Mobile Car Repair in Dubai | 056 911 1910",
    description:
      "Certified mobile mechanics in Dubai. Oil change, battery replacement, onsite diagnostics and plastic welding at your home or office. Book on WhatsApp: 056 911 1910.",
  });

  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <CoverageSection />
      <TestimonialsSection />
      <FaqSection items={faqs.slice(0, 4)} showAllLink />
      <CtaBand />
    </>
  );
}