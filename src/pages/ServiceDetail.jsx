import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, Clock, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import FaqList from "@/components/site/FaqList";
import CtaBand from "@/components/site/CtaBand";
import ProcessTimeline from "@/components/site/ProcessTimeline";
import ServiceCard from "@/components/site/ServiceCard";
import useSeo from "@/lib/useSeo";
import { getService, services, site, waLink } from "@/lib/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  useSeo({
    title: service ? `${service.name} in Dubai | Motorguyz Mobile Service` : "Service not found | Motorguyz",
    description: service ? service.meta : "This service could not be found.",
    notFound: !service,
  });

  if (!service) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-[1440px] flex-col items-center justify-center px-5 pt-32 text-center">
        <p className="font-mono-data text-[10px] uppercase tracking-[0.28em] text-crimson">
          404 · Service not found
        </p>
        <h1 className="mt-5 display text-[clamp(2.4rem,6vw,4rem)] text-white">
          That service isn't on the list
        </h1>
        <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/55">
          The page you tried to open doesn't exist. Message us anyway — if it's a car fault, we
          probably fix it.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/services"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-crimson px-6 text-[13.5px] font-semibold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/18 px-6 text-[13.5px] text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Ask on WhatsApp
          </a>
        </div>
      </section>
    );
  }

  const related = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" />

        <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <nav className="flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-[0.18em] text-white/35">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="text-white/20">/</span>
            <Link to="/services" className="transition-colors hover:text-white">
              Services
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">{service.shortName}</span>
          </nav>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono-data text-[10px] uppercase tracking-[0.24em] text-white/40">
                  Mobile service · Dubai
                </span>
              </div>

              <h1 className="mt-5 display text-[clamp(2.4rem,6vw,4.2rem)] text-white">
                {service.name}
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
                {service.intro}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 font-mono-data text-[11px] text-white/70">
                  <Clock className="h-3.5 w-3.5 text-crimson" strokeWidth={2} />
                  {service.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 font-mono-data text-[11px] text-white/70">
                  From AED {service.price}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 font-mono-data text-[11px] text-white/70">
                  <ShieldCheck className="h-3.5 w-3.5 text-crimson" strokeWidth={2} />
                  12-month warranty
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(service.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-crimson px-7 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff3441] hover:shadow-[0_20px_45px_-16px_rgba(255,31,46,0.95)]"
                >
                  <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} />
                  Book this service
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full border border-white/18 px-6 font-mono-data text-[13px] text-white transition-colors hover:border-white/40"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.8} />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={service.image}
                  alt={`${service.name} in Dubai by Motorguyz`}
                  fittingType="fill"
                  className="h-[300px] w-full md:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] bg-[#070709] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12">
          <Reveal>
            <h2 className="display text-[clamp(1.9rem,4vw,2.8rem)] text-white">What's included</h2>
            <ul className="mt-7 space-y-4">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-crimson/12 text-crimson">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
                  </span>
                  <span className="text-[14px] leading-relaxed text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
              <p className="font-mono-data text-[10px] uppercase tracking-[0.22em] text-white/40">
                Transparent pricing
              </p>
              <div className="mt-4 divide-y divide-white/[0.08]">
                {service.pricing.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 py-3.5">
                    <span className="text-[13px] text-white/65">{row.label}</span>
                    <span className="shrink-0 font-mono-data text-[12.5px] text-white">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11.5px] leading-relaxed text-white/35">
                Prices shown are typical starting points. Your quote is confirmed on WhatsApp before
                any work begins.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.07] py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-[0.28em] text-crimson">
              <span className="h-px w-6 bg-crimson/70" />
              How it works
            </div>
            <h2 className="mt-4 display text-[clamp(1.9rem,4vw,2.8rem)] text-white">
              Four steps, one visit
            </h2>
          </Reveal>
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] bg-[#070709] py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-[0.28em] text-crimson">
                <span className="h-px w-6 bg-crimson/70" />
                Good to know
              </div>
              <h2 className="mt-4 display text-[clamp(1.9rem,4vw,2.8rem)] text-white">
                {service.shortName} questions
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-white/55">
                Still unsure? Send a photo of the problem on WhatsApp and we will tell you honestly
                what it needs.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <FaqList items={service.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="display text-[clamp(1.9rem,4vw,2.8rem)] text-white">
                Other services
              </h2>
              <Link
                to="/services"
                className="font-mono-data text-[11px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white"
              >
                View all
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 90}>
                <ServiceCard service={item} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand service={service.name} />
    </>
  );
}