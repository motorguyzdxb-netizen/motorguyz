import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import ProcessTimeline from "@/components/site/ProcessTimeline";

export default function ProcessSection() {
  return (
    <section id="process" className="relative border-t border-white/[0.07] bg-[#070709] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="How a booking runs"
            title="From message to fixed in four steps"
            description="No app to install, no forms to fill. One conversation on WhatsApp covers the whole job."
          />
        </Reveal>

        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
}