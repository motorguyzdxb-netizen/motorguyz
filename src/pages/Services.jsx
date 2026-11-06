import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import useSeo from "@/lib/useSeo";
import { services } from "@/lib/site";

export default function Services() {
  useSeo({
    title: "Mobile Car Services in Dubai | Motorguyz",
    description:
      "All Motorguyz mobile services: oil and filter change, battery replacement, onsite diagnostics and repair, and automotive plastic welding — anywhere in Dubai.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything we bring to your car"
        description="Four core services, all carried out onsite with workshop-grade equipment and fixed prices agreed on WhatsApp before we start."
      />

      <ServicesSection showHeading={false} />

      <section className="border-t border-white/[0.07] bg-[#070709] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-[0.28em] text-crimson">
              <span className="h-px w-6 bg-crimson/70" />
              Starting prices
            </div>
            <h2 className="mt-4 display text-[clamp(2rem,4.5vw,3.2rem)] text-white">
              No call-out fee. No surprises.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
              <div className="hidden grid-cols-[2fr_1fr_1fr_auto] gap-4 border-b border-white/10 bg-white/[0.04] px-6 py-4 font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/40 md:grid">
                <span>Service</span>
                <span>Typical time</span>
                <span>Starting from</span>
                <span className="text-right">Book</span>
              </div>
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="grid grid-cols-1 items-center gap-3 border-b border-white/[0.07] px-5 py-5 transition-colors last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[2fr_1fr_1fr_auto] md:gap-4 md:px-6"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-[14px] font-medium text-white transition-colors hover:text-crimson"
                      >
                        {service.name}
                      </Link>
                      <p className="mt-0.5 text-[12px] text-white/45">{service.tagline}</p>
                    </div>
                  </div>
                  <span className="font-mono-data text-[12px] text-white/55">{service.duration}</span>
                  <span className="font-mono-data text-[13px] text-white">AED {service.price}+</span>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 justify-self-start rounded-full border border-white/12 px-3.5 py-2 text-[12px] text-white/80 transition-colors hover:border-crimson hover:text-white md:justify-self-end"
                  >
                    Details
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="mt-4 text-[12px] text-white/35">
            Final price depends on your engine, parts and access. You always see it before work
            starts.
          </p>
        </div>
      </section>

      <ProcessSection />
      <CtaBand />
    </>
  );
}