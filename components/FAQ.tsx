"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "q1",
    question: "What is Data Rebels?",
    answer:
      "Data Rebels is an elite educational ecosystem dedicated to closing the GenAI talent gap. We empower business leaders and technical teams through project-based learning and anchored industry demands, moving beyond theory to drive real-world adoption and strategic ROI.",
  },
  {
    id: "q2",
    question: "Is GenAI easy to use?",
    answer:
      "Absolutely! GenAI is designed with user-friendliness in mind. Our Artificial Intelligence curriculum is easy to navigate, and we provide clear instructions, hands-on frameworks, and helpful resources to ensure a smooth learning curve for every professional.",
  },
  {
    id: "q3",
    question: "What Plans does Data Rebels offer?",
    answer:
      "We offer custom-engineered programs tailored to different expertise levels. This includes our 'Rebel Curriculum' for individual professionals (from Data Translators to Python specialists) and specialized corporate solutions designed to address specific business needs and accelerate organizational GenAI maturity.",
  },
  {
    id: "q4",
    question: "How can I get started?",
    answer:
      "Getting started is simple. You can explore our Rebel Curriculum and enroll in a course today to secure your spot. If you have specific questions or need a tailored plan for your team, click 'Chat with a Rebel Expert' to get personalized guidance from our strategy team.",
  },
];

export function FAQ() {
  return (
    <section
      className="bg-white py-12 lg:py-16 w-full"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20 gap-8">
          {/* Columna izquierda: Info */}
          <div className="w-full lg:w-[400px] lg:flex-shrink-0">
            <h2 className="font-title text-slate-900 text-[24px] md:text-[28px] lg:text-[32px] leading-[26px] md:leading-[30px] lg:leading-[36px] font-semibold tracking-normal mb-4">
              Frequently asked questions and answers
            </h2>
            <p className="font-sans text-slate-500 text-[14px] leading-[18px] mb-6 md:mb-8 max-w-2xl">
              Find answers to frequently asked questions about our GenAI &amp;
              Education solutions and how Data Rebels can address your specific
              business needs.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <ShinyButton href="#contact" variant="blue" className="w-full sm:w-auto justify-center px-8 py-3.5 whitespace-nowrap shrink-0">
                Enroll a Rebel Today
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </ShinyButton>
              <Link
                href="#chat"
                className="font-sans inline-flex w-full sm:w-auto items-center justify-center sm:justify-start gap-2 text-blue-600 font-semibold hover:opacity-80 transition-opacity whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden />
                Chat with a Rebel Expert
              </Link>
            </div>
          </div>

          {/* Columna derecha: Acordeón Radix */}
          <div className="w-full min-w-0 lg:flex-1">
            <Accordion
              type="single"
              collapsible
              defaultValue="q2"
              indicator="plus"
              className="w-full"
            >
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="font-title text-slate-800 text-[20px] leading-[24px] font-semibold tracking-normal hover:no-underline py-[24px] [&>svg]:w-6 [&>svg]:h-6 [&>svg]:shrink-0">
                    <span className="flex-1 pr-4">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="transition-opacity duration-300 ease-in-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100">
                    <p className="font-sans text-slate-500 text-[14px] leading-[18px]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
