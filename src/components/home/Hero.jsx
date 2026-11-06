import { ArrowRight, MessageCircle, Phone, ShieldCheck, Star } from "lucide-react";
import { Image } from "@/components/ui/image";
import { site, waLink } from "@/lib/site";

const heroImage =
  "https://media.base44.com/images/public/6ae18541773eea85af4225c3/cfe0a9222_generated_image.png";

const activeAreas = [
  { area: "JLT · Marina", eta: "~25 min" },
  { area: "Business Bay", eta: "~35 min" },
  { area: "Downtown · DIFC", eta: "~40 min" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Motorguyz technician servicing a luxury SUV against the Dubai skyline at dusk"
          fittingType="fill"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-center px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-32 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 font-mono-data text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Onsite mobile repair · Dubai
            </span>

            <h1 className="mt-6 display text-[clamp(2.9rem,8.5vw,6.6rem)] text-white">
              Your car,
              <br />
              fixed where
              <br />
              <span className="text-crimson">it's parked.</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/70 md:text-[16.5px]">
              A certified mechanic comes to your home, office or parking bay anywhere in Dubai. Oil
              change, battery, diagnostics, plastic welding — same day, fixed prices, no garage
              queue.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-[54px] items-center justify-center gap-2.5 rounded-full bg-crimson px-7 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff3441] hover:shadow-[0_22px_45px_-16px_rgba(255,31,46,0.95)]"
              >
                <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} />
                Book on WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex h-[54px] items-center justify-center gap-2.5 rounded-full border border-white/18 bg-white/[0.04] px-7 font-mono-data text-[13.5px] text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.09]"
              >
                <Phone className="h-4 w-4" strokeWidth={1.8} />
                {site.phoneDisplay}
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-white/55">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-crimson" strokeWidth={1.8} />
                12-month workmanship warranty
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 text-crimson" strokeWidth={1.8} />
                4.9/5 from Dubai drivers
              </span>
            </div>
          </div>

          <div className="w-full max-w-[400px] lg:ml-auto">
            <div className="glass rounded-2xl border border-white/12 p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)]">
              <div className="flex items-center justify-between">
                <p className="font-mono-data text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Live status
                </p>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-1 font-mono-data text-[9.5px] uppercase tracking-[0.16em] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>

              <p className="mt-3 text-[15px] font-semibold leading-snug text-white">
                Mechanics on standby across Dubai
              </p>

              <ul className="mt-4 space-y-2">
                {activeAreas.map((item) => (
                  <li
                    key={item.area}
                    className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5"
                  >
                    <span className="text-[12.5px] text-white/80">{item.area}</span>
                    <span className="font-mono-data text-[11px] text-emerald-300">{item.eta}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="font-mono-data text-[9.5px] uppercase tracking-[0.18em] text-white/35">
                    Cars serviced
                  </p>
                  <p className="font-mono-data text-[15px] text-white">4,800+</p>
                </div>
                <div className="text-right">
                  <p className="font-mono-data text-[9.5px] uppercase tracking-[0.18em] text-white/35">
                    Avg arrival
                  </p>
                  <p className="font-mono-data text-[15px] text-white">45 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}