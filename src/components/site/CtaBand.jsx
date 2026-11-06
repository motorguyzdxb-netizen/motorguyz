import { MessageCircle, Phone } from "lucide-react";
import { site, waLink } from "@/lib/site";
import Reveal from "@/components/site/Reveal";

export default function CtaBand({ service }) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_50%_110%,rgba(255,31,46,0.28),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/60 to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-mono-data text-[10px] uppercase tracking-[0.28em] text-crimson">
            Mechanics on standby
          </p>
          <h2 className="mt-5 display text-[clamp(2.4rem,6.5vw,4.6rem)] text-white">
            Your mechanic is
            <br />
            one message away
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            Send your car, your area and the problem. You get a fixed price and an arrival window in
            minutes — no forms, no call centre.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink(service)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-crimson px-8 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff3441] hover:shadow-[0_22px_50px_-16px_rgba(255,31,46,0.95)] sm:w-auto"
            >
              <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} />
              Start a WhatsApp booking
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex h-[54px] w-full items-center justify-center gap-2.5 rounded-full border border-white/18 px-8 font-mono-data text-[13.5px] text-white transition-colors hover:border-white/40 sm:w-auto"
            >
              <Phone className="h-4 w-4" strokeWidth={1.8} />
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}