import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";
import useSeo from "@/lib/useSeo";
import { base44 } from "@/api/base44Client";
import { site, waLink } from "@/lib/site";

export default function OilChangeDubai() {
  const [areas, setAreas] = useState(null);

  useSeo({
    title: "Onsite Oil Change Dubai — Mobile Oil Service Guide | Motorguyz",
    description:
      "Motorguyz onsite oil change in Dubai: full-synthetic oil, genuine filter and a 20-point check at your parking bay. From AED 149, around 45 minutes, 12-month warranty.",
  });

  useEffect(() => {
    let active = true;
    base44.entities.ServiceArea.list({ sort: "name", limit: 50 })
      .then((res) => {
        if (!active) return;
        const items = Array.isArray(res) ? res : res.items;
        setAreas(items || []);
      })
      .catch(() => active && setAreas([]));
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Guide"
        title="Onsite oil change in Dubai: what it costs and how it works"
        description="Full-synthetic oil, a genuine filter and a 20-point check — changed where your car is parked. Here's what a proper mobile oil service in Dubai should include."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[860px] px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2 className="display text-[clamp(1.8rem,3.6vw,2.6rem)] text-white">
              Why Dubai heat makes oil changes time-sensitive
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              Engine oil degrades faster in Dubai's ambient heat and stop-start traffic than the
              service interval on your dashboard suggests. As oil thins and collects contaminants,
              it stops protecting the turbo, the timing chain and the cylinder walls — and a small
              service turns into a large repair. An onsite oil change from Motorguyz replaces the
              oil and filter, tops up the fluids and resets your service interval in around{" "}
              {site.stats[1].label.toLowerCase()} of arrival, starting from AED 149 for a
              4-cylinder engine.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              There is no garage queue, no waiting room and no taxi home. The technician arrives at
              your building, office or mall car park with the correct grade of oil for your engine
              and a genuine or OEM-equivalent filter, drains the old oil into sealed containers for a
              licensed recycling partner, and records a service stamp for your records. Every job is
              backed by Motorguyz's {site.stats[3].label} workmanship warranty.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-14 display text-[clamp(1.8rem,3.6vw,2.6rem)] text-white">
              What a proper mobile oil service includes
            </h2>
            <ul className="mt-6 space-y-3 text-[14.5px] leading-relaxed text-white/65">
              {[
                "Full-synthetic oil matched to your manufacturer specification, including long-life European grades",
                "Genuine or OEM-equivalent oil filter, washer plug and seal replacement",
                "Fluid top-ups and a 20-point visual inspection of brakes, belts and hoses",
                "Service stamp recorded for your records and the old oil recycled responsibly",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-white/45">
              Full pricing for 4-, 6-cylinder and European performance engines is on the{" "}
              <Link to="/services/oil-change" className="text-crimson hover:text-white">
                oil change service page
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-14 display text-[clamp(1.8rem,3.6vw,2.6rem)] text-white">
              Response times across Dubai
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              These are the Dubai communities we attend most often, with the typical arrival window
              for an onsite oil change:
            </p>

            {areas === null ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-20 animate-pulse rounded-xl border border-white/10 bg-white/[0.025]"
                  />
                ))}
              </div>
            ) : areas.length === 0 ? (
              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-[13.5px] text-white/50">
                  Response times are being updated. Message us your area on WhatsApp for a live
                  arrival window.
                </p>
              </div>
            ) : (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {areas.map((area) => (
                  <div
                    key={area.id}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-5"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-crimson">
                      <MapPin className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-white">{area.name}</p>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-white/55">
                        {area.description}
                      </p>
                      <p className="mt-1.5 font-mono-data text-[11px] text-white/45">
                        ~{area.averageResponseMinutes} min arrival · {area.popularService}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-14 flex flex-col items-start gap-5 rounded-2xl border border-white/10 bg-[#0b0b0d] p-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-[14px] leading-relaxed text-white/65">
                Book your onsite oil change on WhatsApp — we confirm the price and arrival window
                before anyone sets off.
              </p>
              <a
                href={waLink("Oil & Filter Change")}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-crimson transition-colors hover:text-white"
              >
                Book oil change
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}