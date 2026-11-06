import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqList({ items }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={item.q}
          value={`item-${index}`}
          className="border-b border-white/10"
        >
          <AccordionTrigger className="py-5 text-left text-[14.5px] font-medium text-white/90 transition-colors hover:text-white hover:no-underline [&>svg]:text-crimson">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 pr-6 text-[13.5px] leading-relaxed text-white/55">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}