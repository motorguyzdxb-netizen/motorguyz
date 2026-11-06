import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { navLinks, services, site, waLink } from "@/lib/site";
import Logo from "@/components/site/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors ${
      isActive ? "text-white" : "text-white/62 hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/10"
          : "border-b border-transparent bg-gradient-to-b from-black/75 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between gap-4 px-5 md:h-20 md:px-8 lg:px-12">
        <Logo onNavigate={() => setMenuOpen(false)} />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink to={link.to} className={linkClass}>
                  <span className="inline-flex items-center gap-1.5">
                    Services
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </NavLink>

                <div
                  className={`absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0c]/95 p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.06]"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block text-[13.5px] font-semibold text-white">
                            {service.name}
                          </span>
                          <span className="mt-0.5 block truncate text-[12px] text-white/50">
                            {service.tagline}
                          </span>
                        </span>
                        <span className="mt-1 font-mono-data text-[10px] text-white/40">
                          AED {service.price}+
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={link.label} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 font-mono-data text-[12px] text-white/75 transition-colors hover:border-white/30 hover:text-white md:flex"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.8} />
            {site.phoneDisplay}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-crimson px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff3441] hover:shadow-[0_16px_35px_-14px_rgba(255,31,46,0.9)] sm:flex"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            Book on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-white transition-colors hover:border-white/30 lg:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-[420px] flex-col bg-[#08080a] shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[68px] items-center justify-between px-5">
            <Logo onNavigate={() => setMenuOpen(false)} />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-white"
            >
              <X className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pb-6">
            <nav className="mt-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-white/[0.07] py-4 text-[17px] font-medium transition-colors ${
                      isActive ? "text-crimson" : "text-white/85"
                    }`
                  }
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-white/25" />
                </NavLink>
              ))}
            </nav>

            <p className="mt-7 font-mono-data text-[10px] uppercase tracking-[0.24em] text-white/35">
              Services
            </p>
            <div className="mt-3 space-y-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                >
                  <span className="flex-1 text-[13.5px] text-white/90">{service.name}</span>
                  <span className="font-mono-data text-[10px] text-white/40">
                    AED {service.price}+
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-2.5 border-t border-white/10 p-5">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-crimson text-[14px] font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Book on WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 font-mono-data text-[13px] text-white"
            >
              <Phone className="h-4 w-4" strokeWidth={1.8} />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}