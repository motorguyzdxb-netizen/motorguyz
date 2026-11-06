import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { services, site, waLink } from "@/lib/site";
import Logo from "@/components/site/Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070708]">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-crimson/10 blur-[100px]" />
      <div className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-16 md:px-8 md:pb-12 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-14 w-[70px]" />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-white/55">
              A certified mechanic at your door anywhere in Dubai. Oil, batteries, diagnostics and
              plastic welding — done properly, at your parking spot.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-crimson px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#ff3441]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Book on WhatsApp
            </a>
          </div>

          <div>
            <p className="font-mono-data text-[10px] uppercase tracking-[0.24em] text-white/35">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[13.5px] text-white/60 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-data text-[10px] uppercase tracking-[0.24em] text-white/35">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/about" className="text-[13.5px] text-white/60 transition-colors hover:text-white">
                  Why Motorguyz
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-[13.5px] text-white/60 transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[13.5px] text-white/60 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[13.5px] text-white/60 transition-colors hover:text-white">
                  All services
                </Link>
              </li>
              <li>
                <Link to="/mobile-mechanic-dubai" className="text-[13.5px] text-white/60 transition-colors hover:text-white">
                  Mobile mechanic guide
                </Link>
              </li>
              <li>
                <Link to="/oil-change-dubai" className="text-[13.5px] text-white/60 transition-colors hover:text-white">
                  Oil change Dubai guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono-data text-[10px] uppercase tracking-[0.24em] text-white/35">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3 text-[13.5px] text-white/60">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 text-crimson" strokeWidth={2} />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 text-crimson" strokeWidth={2} />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson" strokeWidth={2} />
                All areas of Dubai — we come to you
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson" strokeWidth={2} />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11.5px] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Motorguyz. Onsite mobile car repair, Dubai.</p>
          <p className="font-mono-data uppercase tracking-[0.18em]">Mechanics on standby</p>
        </div>
      </div>
    </footer>
  );
}