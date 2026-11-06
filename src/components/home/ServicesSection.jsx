import SectionHeading from "@/components/site/SectionHeading";
import ServiceCard from "@/components/site/ServiceCard";
import Reveal from "@/components/site/Reveal";
import { services } from "@/lib/site";

export default function ServicesSection({ showHeading = true }) {
  return (
    <section id="services" className="relative border-t border-white/[0.07] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {showHeading ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="The service bay"
                title={
                  <>
                    Three jobs we do
                    <br />
                    better at your door
                  </>
                }
                description="Every service is quoted upfront on WhatsApp and carried out by a certified technician with workshop-grade equipment."
              />
            </Reveal>
          </div>
        ) : null}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 90}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}