import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site-config";

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-4 py-20 md:py-28">
      <div data-reveal className="reveal text-center">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">FAQ</p>
        <h2 id="faq-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Frequently asked questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-10 w-full">
        {FAQS.map((faq, i) => (
          <AccordionItem key={faq.question} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
