import { BadgeCheck, Banknote, PackageCheck, ScanLine } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { site } from "@/lib/site";

const vanImage =
  "https://media.base44.com/images/public/6ae18541773eea85af4225c3/4cad3c210_generated_image.png";

const values = [
  {
    icon: ScanLine,
    title: "Dealer-level diagnostics",
    text: "OBD-II scanning with live sensor data, so we fix the actual fault instead of replacing parts until the light goes out.",
  },
  {
    icon: Banknote,
    title: "Fixed price before we start",
    text: "No call-out fee, no surprise labour. You approve the number on WhatsApp before a single bolt is touched.",
  },
  {
    icon: PackageCheck,
    title: "Parts sourced the same day",
    text: "Genuine or premium OEM-equivalent parts from Dubai suppliers, with the brand and warranty shown to you first.",
  },
  {
    icon: BadgeCheck,
    title: "12-month workmanship warranty",
    text: "Every repair is documented and covered. If something we fixed isn't right, we come back at no cost.",
  },
];

export default function WhySection() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] py-20 md:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-crimson/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={vanImage}
                alt="Motorguyz mobile mechanic van working on a car in Dubai at night"
                fittingType="fill"
                className="h-[320px] w-full md:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl border border-white/12 bg-black/50 p-4 backdrop-blur-md">
                <div>
                  <p className="font-mono-data text-[9.5px] uppercase tracking-[0.18em] text-white/40">
                    Mobile workshop
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-white">
                    Equipped van, dispatched across Dubai
                  </p>
                </div>
                <span className="rounded-full bg-crimson/15 px-3 py-1.5 font-mono-data text-[10px] uppercase tracking-[0.14em] text-crimson">
                  45 min avg
                </span>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading
                eyebrow="The mobile lab"
                title={
                  <>
                    Workshop discipline,
                    <br />
                    without the workshop
                  </>
                }
                description="Motorguyz exists because a service shouldn't cost you half a day. Our technicians arrive with the calibrated tools, the correct parts and the same diagnostic software a dealer uses."
              />
            </Reveal>

            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 90}>
                  <div className="flex gap-3.5">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-crimson">
                      <value.icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-[14px] font-semibold text-white">{value.title}</h3>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/52">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={80}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] md:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.label} className="bg-[#08080a] px-5 py-7 text-center md:px-6">
                <p className="font-mono-data text-[clamp(1.4rem,3vw,1.9rem)] font-medium text-white">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/38">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}