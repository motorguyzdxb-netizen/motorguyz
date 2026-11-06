export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-70" />
      <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-crimson/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {eyebrow ? (
          <span className="inline-flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-[0.28em] text-crimson">
            <span className="h-px w-6 bg-crimson/70" />
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-5 max-w-4xl display text-[clamp(2.5rem,6.5vw,4.8rem)] text-white">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/58">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}