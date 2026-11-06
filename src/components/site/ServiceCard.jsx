import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import { waLink } from "@/lib/site";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson/40 hover:shadow-[0_28px_70px_-28px_rgba(255,31,46,0.5)]">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fittingType="fill"
          className="h-full w-full scale-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.09]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <span className="scan-sweep absolute inset-y-0 left-0 w-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-black/45 px-2.5 py-1 font-mono-data text-[9.5px] uppercase tracking-[0.16em] text-white/65 backdrop-blur-md">
            {service.duration}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="font-mono-data text-[10px] uppercase tracking-[0.22em] text-white/30">
          {String(index + 1).padStart(2, "0")} / Service
        </p>
        <h3 className="mt-2.5 text-[19px] font-bold leading-snug tracking-tight text-white">
          <Link to={`/services/${service.slug}`} className="transition-colors hover:text-crimson">
            {service.name}
          </Link>
        </h3>
        <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55">{service.tagline}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <div>
            <p className="font-mono-data text-[9.5px] uppercase tracking-[0.18em] text-white/30">
              From
            </p>
            <p className="font-mono-data text-[15px] font-medium text-white">
              AED {service.price}
            </p>
          </div>
          <a
            href={waLink(service.name)}
            target="_blank"
            rel="noreferrer"
            className="relative z-20 inline-flex items-center gap-1.5 rounded-full border border-white/12 px-3.5 py-2 text-[12px] font-medium text-white/85 transition-all hover:border-crimson hover:bg-crimson hover:text-white"
          >
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
            Book
          </a>
        </div>
      </div>

      <Link
        to={`/services/${service.slug}`}
        aria-label={`Read more about ${service.name}`}
        className="absolute inset-0 z-10 rounded-2xl"
      />
      <span className="pointer-events-none absolute bottom-5 right-5 hidden h-6 w-6 place-items-center rounded-full text-white/30 transition-colors group-hover:text-white md:grid">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </article>
  );
}