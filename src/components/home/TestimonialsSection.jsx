import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { testimonials } from "@/lib/site";

export default function TestimonialsSection() {
  return (
    <section className="relative border-t border-white/[0.07] bg-[#070709] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Driver reports"
            title="Trusted in car parks across Dubai"
            description="Real feedback from drivers who booked a mechanic instead of a garage visit."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.045]">
                <Quote className="h-6 w-6 text-crimson/70" strokeWidth={1.6} />
                <blockquote className="mt-4 flex-1 text-[13.5px] leading-relaxed text-white/72">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[13px] font-semibold text-white">{item.name}</p>
                    <p className="mt-0.5 font-mono-data text-[10px] uppercase tracking-[0.12em] text-white/40">
                      {item.detail}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-crimson text-crimson" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}