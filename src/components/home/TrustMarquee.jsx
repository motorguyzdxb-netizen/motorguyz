const items = [
  "Oil change",
  "Battery replacement",
  "Onsite diagnostics",
  "Plastic welding",
  "Brake service",
  "Air-con service",
  "Belts & filters",
  "Pre-purchase checks",
];

export default function TrustMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] bg-[#08080a] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#08080a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#08080a] to-transparent" />

      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-6 px-6 font-mono-data text-[10.5px] uppercase tracking-[0.26em] text-white/40"
              >
                {item}
                <span className="h-1 w-1 rotate-45 bg-crimson" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}