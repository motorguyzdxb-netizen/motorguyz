import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import FaqList from "@/components/site/FaqList";

export default function FaqSection({
  items,
  eyebrow = "Straight answers",
  title = "Questions drivers ask us",
  description = "Everything about coverage, pricing, warranty and how an onsite job actually works.",
  showAllLink = false,
}) {
  return (
    <section id="faq" className="relative border-t border-white/[0.07] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
            {showAllLink ? (
              <Link
                to="/faq"
                className="group mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-crimson transition-colors hover:text-white"
              >
                Read all questions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : null}
          </Reveal>

          <Reveal delay={120}>
            <FaqList items={items} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}