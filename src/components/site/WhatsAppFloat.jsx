import { MessageCircle, Phone } from "lucide-react";
import { site, waLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <>
      {/* Desktop HUD */}
      <div className="fixed bottom-8 right-8 z-40 hidden flex-col items-end gap-3 md:flex">
        <a
          href={site.phoneHref}
          aria-label={`Call ${site.phoneDisplay}`}
          className="group grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-[#0c0c0e]/90 text-white/80 backdrop-blur-md transition-all hover:border-white/30 hover:text-white"
        >
          <Phone className="h-[18px] w-[18px]" strokeWidth={1.8} />
        </a>

        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center gap-3"
        >
          <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-full border border-white/10 bg-[#0c0c0e]/95 px-3.5 py-2 text-[12px] font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
            <span className="font-mono-data text-white/55">{site.phoneDisplay}</span>
            <span className="ml-2 text-white/80">Mechanics on standby</span>
          </span>
          <span className="absolute inset-0 rounded-full bg-crimson/40 animate-pulse-ring" />
          <span className="relative grid h-[60px] w-[60px] place-items-center rounded-full bg-crimson text-white shadow-[0_18px_45px_-12px_rgba(255,31,46,0.85)] transition-transform duration-300 group-hover:scale-105">
            <MessageCircle className="h-6 w-6" strokeWidth={2} />
          </span>
        </a>
      </div>

      {/* Mobile bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#08080a]/95 pb-[max(10px,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl md:hidden">
        <div className="flex items-center gap-2.5 px-4">
          <a
            href={site.phoneHref}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/15 font-mono-data text-[13px] text-white"
          >
            <Phone className="h-4 w-4" strokeWidth={1.8} />
            Call
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 flex-[1.7] items-center justify-center gap-2 rounded-full bg-crimson text-[13.5px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(255,31,46,0.95)]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            WhatsApp · {site.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}