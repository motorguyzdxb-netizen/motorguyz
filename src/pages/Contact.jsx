import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";
import useSeo from "@/lib/useSeo";
import { services, site, waCustom, waLink } from "@/lib/site";

const fieldClass =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-[14px] text-white outline-none transition-colors placeholder:text-white/28 focus:border-crimson/60";

export default function Contact() {
  useSeo({
    title: "Contact Motorguyz — Book a Mobile Mechanic in Dubai",
    description:
      "Book an onsite mobile mechanic in Dubai. WhatsApp 056 911 1910, call, or send your car details and area for a fixed price and arrival window.",
  });

  const [form, setForm] = useState({
    name: "",
    car: "",
    area: "",
    service: "",
    notes: "",
  });

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const lines = [
      "Hi Motorguyz, I'd like to book a service.",
      form.service ? `Service: ${form.service}` : null,
      form.name ? `Name: ${form.name}` : null,
      form.car ? `Car: ${form.car}` : null,
      form.area ? `Area / building: ${form.area}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
    ].filter(Boolean);

    window.open(waCustom(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us the car. We'll come to it."
        description="The fastest route is WhatsApp — send your car, area and the problem, and you'll have a fixed price and an arrival window in minutes."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
          <Reveal>
            <div className="space-y-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-crimson/30 bg-crimson/[0.07] p-5 transition-colors hover:border-crimson/60 hover:bg-crimson/[0.11]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-crimson text-white">
                  <MessageCircle className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/45">
                    Fastest · WhatsApp
                  </p>
                  <p className="mt-1.5 text-[17px] font-semibold text-white">{site.phoneDisplay}</p>
                  <p className="mt-1 text-[12.5px] text-white/55">
                    Bookings, quotes and photo diagnostics
                  </p>
                </div>
              </a>

              <a
                href={site.phoneHref}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.045]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/[0.05] text-crimson">
                  <Phone className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/40">
                    Call the workshop
                  </p>
                  <p className="mt-1.5 font-mono-data text-[15px] text-white">{site.phoneDisplay}</p>
                </div>
              </a>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-white/25"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-crimson" strokeWidth={2} />
                  <div>
                    <p className="font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/40">
                      Email
                    </p>
                    <p className="mt-1.5 break-all text-[12.5px] text-white/80">{site.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-crimson" strokeWidth={2} />
                  <div>
                    <p className="font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/40">
                      Hours
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/80">
                      {site.hours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crimson" strokeWidth={2} />
                <div>
                  <p className="font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/40">
                    Service area
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/80">
                    All of Dubai — Marina, JLT, Downtown, Business Bay, Jumeirah, Al Barsha, JVC,
                    Dubai Hills, Mirdif, Deira and more.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-[#0b0b0d] p-6 md:p-8"
            >
              <h2 className="text-[20px] font-bold tracking-tight text-white">Send your car details</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-white/50">
                Fill this in and we'll open WhatsApp with your details ready to send.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/40"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Ahmed"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="car"
                    className="mb-2 block font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/40"
                  >
                    Car & year
                  </label>
                  <input
                    id="car"
                    value={form.car}
                    onChange={update("car")}
                    placeholder="Audi Q5 2021"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="area"
                    className="mb-2 block font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/40"
                  >
                    Area / building
                  </label>
                  <input
                    id="area"
                    value={form.area}
                    onChange={update("area")}
                    placeholder="Marina, Princess Tower"
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="mb-2 block font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/40"
                  >
                    Service needed
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className={`${fieldClass} appearance-none bg-[#111113]`}
                  >
                    <option value="">Not sure yet</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="notes"
                    className="mb-2 block font-mono-data text-[9.5px] uppercase tracking-[0.2em] text-white/40"
                  >
                    What's happening with the car?
                  </label>
                  <textarea
                    id="notes"
                    value={form.notes}
                    onChange={update("notes")}
                    rows={4}
                    placeholder="Warning light on since yesterday, slight rattle over speed bumps…"
                    className={`${fieldClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-crimson text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff3441] hover:shadow-[0_20px_45px_-16px_rgba(255,31,46,0.95)]"
              >
                <Send className="h-4 w-4" strokeWidth={2} />
                Send on WhatsApp
              </button>
              <p className="mt-3 text-center text-[11.5px] text-white/32">
                Opens WhatsApp with your message pre-filled. Nothing is stored on this site.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}