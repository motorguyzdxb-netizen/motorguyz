import { useEffect } from "react";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import FaqList from "@/components/site/FaqList";
import CtaBand from "@/components/site/CtaBand";
import useSeo from "@/lib/useSeo";
import { faqs } from "@/lib/site";

export default function Faq() {
  useSeo({
    title: "FAQ — Mobile Car Repair in Dubai | Motorguyz",
    description:
      "Answers about Motorguyz mobile mechanics in Dubai: coverage areas, response times, call-out fees, technician certification, warranty and payment.",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Everything you'd ask before booking"
        description="Coverage, response times, warranty and how an onsite repair actually works — answered plainly."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12">
          <Reveal>
            <p className="font-mono-data text-[10px] uppercase tracking-[0.24em] text-white/35">
              Still unsure?
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/60">
              Send a photo of the problem on WhatsApp and a technician will tell you what it needs
              before you commit to anything.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}