import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { site } from "@/lib/site";

export default function CoverageSection() {
  return (
    <section id="coverage" className="relative overflow-hidden border-t border-white/[0.07] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Service area"
              title={
                <>
                  We come to you,
                  <br />
                  anywhere in Dubai
                </>
              }
              description="Residential towers, offices, mall car parks and villa driveways. If your car can be reached, we can service it there."
            />
            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-crimson transition-colors hover:text-white"
            >
              Check your area
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
              <div className="flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-[0.22em] text-white/40">
                <MapPin className="h-3.5 w-3.5 text-crimson" strokeWidth={2} />
                Covered neighbourhoods
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {site.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[12px] text-white/70 transition-colors hover:border-crimson/40 hover:text-white"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 border-t border-white/10 pt-5 text-[12.5px] leading-relaxed text-white/45">
                Not on the list? We still almost certainly cover you — message us your building or
                street and we will confirm in minutes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}