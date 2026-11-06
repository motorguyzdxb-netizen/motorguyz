import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";
import useSeo from "@/lib/useSeo";
import { services, site } from "@/lib/site";

const onsiteJobs = [
  {
    title: "Oil & filter change",
    text: "Full-synthetic oil matched to your engine spec and a genuine filter, changed where the car is parked. From AED 149, around 45 minutes.",
  },
  {
    title: "Battery replacement",
    text: "Load test, alternator check and a warranty-backed battery fitted in your bay. From AED 199, usually inside 25 minutes.",
  },
  {
    title: "Diagnostics & repair",
    text: "Dealer-level OBD-II scan with the fault explained in plain language, then a fixed quote before any work starts. From AED 249.",
  },
];

const steps = [
  {
    n: "01",
    title: "Send your car and area",
    text: "Message us on WhatsApp with your car, your location in Dubai and what's wrong. You get a fixed price and an arrival window in minutes — no call-out fee.",
  },
  {
    n: "02",
    title: "We reach you in ~45 minutes",
    text: "A certified technician arrives at your home, office or parking bay with the parts and tools your job is likely to need. Average arrival is around 45 minutes for emergency calls.",
  },
  {
    n: "03",
    title: "Diagnose, quote, repair",
    text: "You see the fault, the parts and the price before any work starts. Most faults — batteries, brakes, sensors, belts, filters — are fixed in a single visit.",
  },
  {
    n: "04",
    title: "Test and warrant",
    text: "We test-drive or pressure-check the repair, hand you a written summary on WhatsApp and back the workmanship for 12 months.",
  },
];

export default function MobileMechanicDubai() {
  useSeo({
    title: "Mobile Mechanic Dubai — Onsite Car Repair Guide | Motorguyz",
    description:
      "Motorguyz mobile mechanic Dubai guide: onsite oil change, battery and diagnostics at your parking bay. 45-minute arrival, fixed prices, 12-month warranty.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Guide"
        title="Mobile mechanic Dubai: onsite car repair, explained"
        description="How a certified mechanic reaches your parking bay in Dubai, which jobs we complete onsite, and what an honest mobile visit should cost."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[860px] px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2 className="display text-[clamp(1.8rem,3.6vw,2.6rem)] text-white">
              What a mobile mechanic actually is
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              A mobile mechanic is a certified technician who brings the workshop to the car instead
              of towing the car to a workshop. For Dubai drivers, that means an oil change in your
              building's basement, a dead battery replaced in a mall car park, or a warning light
              diagnosed while you keep your day. Motorguyz has completed more than{" "}
              {site.stats[0].value.replace("+", "")} onsite jobs across Dubai this way, with an
              average arrival of {site.stats[1].label.toLowerCase()} for emergency calls.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Done properly, mobile repair is not a shortcut — it follows the same manufacturer
              service schedules, uses the same grade of fluids and parts, and ends with the same
              written summary a garage would issue. The difference is time: most jobs finish in a
              single visit, with no waiting room and no taxi home.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-14 display text-[clamp(1.8rem,3.6vw,2.6rem)] text-white">
              Which jobs we complete at your parking bay
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              A large share of everyday Dubai car problems are fixed onsite in one visit. These are
              the most common, with the fixed price you'll see before any work starts:
            </p>
            <div className="mt-7 space-y-5">
              {onsiteJobs.map((job) => (
                <div
                  key={job.title}
                  className="rounded-xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <h3 className="text-[15px] font-semibold text-white">{job.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">{job.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[13.5px] leading-relaxed text-white/45">
              The full list of services and their pricing is on the{" "}
              <Link to="/services" className="text-crimson hover:text-white">
                services page
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-14 display text-[clamp(1.8rem,3.6vw,2.6rem)] text-white">
              How an onsite visit works
            </h2>
            <ol className="mt-7 space-y-6">
              {steps.map((step) => (
                <li key={step.n} className="grid grid-cols-[auto_1fr] gap-5">
                  <span className="font-mono-data text-[12px] text-crimson">{step.n}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white">{step.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-white/60">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-14 rounded-2xl border border-white/10 bg-[#0b0b0d] p-7">
              <p className="text-[14px] leading-relaxed text-white/65">
                Every Motorguyz visit is backed by a {site.stats[3].label} workmanship warranty and a
                customer rating of {site.stats[2].value}. Book your onsite repair on WhatsApp — we
                confirm the price and the arrival window before anyone sets off.
              </p>
              <Link
                to="/contact"
                className="group mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-crimson transition-colors hover:text-white"
              >
                Book a mobile mechanic
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}