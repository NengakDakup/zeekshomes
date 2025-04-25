import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MaxWidthContent from '@/components/maxWidthContent';

export default function FAQsPage() {
  return (
    <div>
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold">
            <h1 className="text-3xl font-bold mb-3">Frequently Asked Questions</h1>
            <p className="text-lg">Find answers to common questions about our properties and services.</p>
          </div>
        </MaxWidthContent>
      </section>

      <section className="py-16">
        <MaxWidthContent>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What types of properties do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer a diverse range of properties including luxury apartments, family homes, commercial spaces, and mixed-use developments. Our portfolio caters to various needs and preferences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What are your payment terms?</AccordionTrigger>
                <AccordionContent>
                  We offer flexible payment plans including outright purchase, installment plans, and mortgage options. The specific terms vary by property and development.
                </AccordionContent>
              </AccordionItem>

              {/* Add more FAQ items */}
            </Accordion>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}
