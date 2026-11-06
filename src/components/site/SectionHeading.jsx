export default function SectionHeading({ eyebrow, title, description, align = "left", className = "" }) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 font-mono-data text-[10px] uppercase tracking-[0.28em] text-crimson">
          <span className="h-px w-6 bg-crimson/70" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 display text-[clamp(2.1rem,5vw,3.6rem)] text-white">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/58">{description}</p>
      ) : null}
    </div>
  );
}