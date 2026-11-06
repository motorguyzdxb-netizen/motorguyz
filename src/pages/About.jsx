import { BatteryCharging, Droplet, Flame, ScanLine, ShieldCheck, Wrench, Wind } from "lucide-react";
import { Image } from "@/components/ui/image";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import CoverageSection from "@/components/home/CoverageSection";
import CtaBand from "@/components/site/CtaBand";
import useSeo from "@/lib/useSeo";
import { site } from "@/lib/site";

const diagnosticsImage =
  "https://media.base44.com/images/public/6ae18541773eea85af4225c3/85e4817c4_generated_image.png";

const standards = [
  {
    title: "Calibrated tooling",
    text: "Torque wrenches, digital gauges and diagnostics are calibrated on a schedule — not eyeballed.",
  },
  {
    title: "Documented work",
    text: "Every job ends with a written summary and photos of what was found, replaced or repaired.",
  },
  {
    title: "Parts traceability",
    text: "You see the brand, part number and warranty of anything we fit before it goes on the car.",
  },
  {
    title: "12-month cover",
    text: "Workmanship is guaranteed for a year. If it fails, we return and make it right.",
  },
];

const equipment = [
  { icon: ScanLine, label: "Dealer-level OBD-II scanners" },
  { icon: BatteryCharging, label: "Battery load & alternator testers" },
  { icon: Droplet, label: "Sealed oil extraction units" },
  { icon: Flame, label: "Hot-air plastic welding kits" },
  { icon: Wind, label: "Air-con gauge & recovery sets" },
  { icon: Wrench, label: "Torque-controlled hand tooling" },
];

export default function About() {
  useSeo({
    title: "Why Motorguyz — Certified Mobile Mechanics in Dubai",
    description:
      "Motorguyz brings dealer-level diagnostics and workshop discipline to your parking bay in Dubai. Certified technicians, fixed prices and a 12-month workmanship warranty.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Why Motorguyz"
        title="Built for drivers who don't have half a day to spare"
        description="Motorguyz started with one van and a simple observation: most Dubai car problems don't need a garage — they need a good mechanic, on time, at your car."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={diagnosticsImage}
                  alt="Technician running a digital diagnostic scan on a car in Dubai"
                  fittingType="fill"
                  className="h-[320px] w-full md:h-[460px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-[0.28em] text-crimson">
                <span className="h-px w-6 bg-crimson/70" />
                The standard
              </div>
              <h2 className="mt-4 display text-[clamp(2rem,4.5vw,3.2rem)] text-white">
                Mobile doesn't mean makeshift
              </h2>
              <p className="mt-5 text-[14.5px] leading-relaxed text-white/60">
                A mobile repair only earns trust if the work holds up. Our technicians work to
                manufacturer service schedules, use the correct grade of fluids and parts, and test
                what they touch before handing the car back.
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/60">
                That's why {site.stats[0].value.replace("+", "")}+ cars later, most of our bookings
                come from drivers who've used us before — or from a neighbour who watched us work in
                the parking bay.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                {standards.map((item, index) => (
                  <div key={item.title} className="border-l border-white/10 pl-4">
                    <p className="font-mono-data text-[10px] text-crimson">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1.5 text-[13.5px] font-semibold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/50">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] bg-[#070709] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-[0.28em] text-crimson">
              <span className="h-px w-6 bg-crimson/70" />
              Inside the van
            </div>
            <h2 className="mt-4 display text-[clamp(2rem,4.5vw,3.2rem)] text-white">
              A workshop on four wheels
            </h2>
            <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/55">
              The equipment our technicians carry is the reason most faults are solved in a single
              visit instead of a second appointment.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.045]">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-crimson">
                    <item.icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <span className="text-[13px] text-white/75">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <figure className="mt-14 rounded-2xl border border-white/10 bg-[#0b0b0d] p-8 md:p-10">
              <ShieldCheck className="h-7 w-7 text-crimson" strokeWidth={1.6} />
              <blockquote className="mt-5 max-w-3xl font-heading text-[clamp(1.15rem,2.4vw,1.6rem)] font-semibold leading-snug text-white">
                “Every car we hand back has to be one we'd be comfortable handing back to our own
                family. That's the whole standard.”
              </blockquote>
              <figcaption className="mt-5 font-mono-data text-[10.5px] uppercase tracking-[0.2em] text-white/40">
                The Motorguyz workshop team · Dubai
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CoverageSection />
      <CtaBand />
    </>
  );
}