import Reveal from "@/components/site/Reveal";
import { processSteps } from "@/lib/site";

export default function ProcessTimeline({ steps = processSteps, compact = false }) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-crimson/60 via-white/10 to-transparent md:left-0 md:top-[26px] md:h-px md:w-full md:bg-gradient-to-r" />

      <ol className={`relative grid gap-8 ${compact ? "md:grid-cols-2" : "md:grid-cols-4"}`}>
        {steps.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 110} className="relative pl-14 md:pl-0">
            <div className="absolute left-0 top-0 md:static">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-crimson/40 bg-[#0b0b0d] font-mono-data text-[12px] font-medium text-crimson">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="md:mt-6">
              <h3 className="text-[16px] font-bold tracking-tight text-white">{step.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}