"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, Plus } from "lucide-react";

// Variants
const accordionRootVariants = cva("", {
  variants: {
    variant: {
      default: "",
      outline: "space-y-2",
      solid: "space-y-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionItemVariants = cva("", {
  variants: {
    variant: {
      default: "border-b border-slate-200 last:border-b-0",
      outline: "border border-slate-200 rounded-lg px-4",
      solid: "rounded-lg bg-slate-100 px-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between py-3 gap-4 text-left text-slate-800 font-medium transition-all cursor-pointer [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
        solid: "",
      },
      indicator: {
        arrow:
          "[&>svg]:text-blue-600 [&>svg]:shrink-0 [&>svg]:transition-transform [&>svg]:duration-200",
        plus: "[&>svg]:text-blue-600 [&>svg]:shrink-0 [&>svg]:size-5 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      indicator: "arrow",
    },
  },
);

const accordionContentVariants = cva(
  "overflow-hidden text-sm text-slate-500 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
        solid: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Context
type AccordionContextType = {
  variant?: "default" | "outline" | "solid";
  indicator?: "arrow" | "plus" | "none";
};

const AccordionContext = React.createContext<AccordionContextType>({
  variant: "default",
  indicator: "arrow",
});

// Components
function Accordion(
  props: React.ComponentProps<typeof AccordionPrimitive.Root> &
    VariantProps<typeof accordionRootVariants> & {
      indicator?: "arrow" | "plus";
    },
) {
  const {
    className,
    variant = "default",
    indicator = "arrow",
    children,
    ...rest
  } = props;

  return (
    <AccordionContext.Provider
      value={{ variant: variant || "default", indicator }}
    >
      <AccordionPrimitive.Root
        data-slot="accordion"
        className={cn(accordionRootVariants({ variant }), className)}
        {...rest}
      >
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  );
}

function AccordionItem(
  props: React.ComponentProps<typeof AccordionPrimitive.Item>,
) {
  const { className, children, ...rest } = props;
  const { variant } = React.useContext(AccordionContext);

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(accordionItemVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}

function AccordionTrigger(
  props: React.ComponentProps<typeof AccordionPrimitive.Trigger>,
) {
  const { className, children, ...rest } = props;
  const { indicator } = React.useContext(AccordionContext);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          accordionTriggerVariants({ indicator: indicator || "arrow" }),
          className,
        )}
        {...rest}
      >
        {children}
        {indicator === "plus" && (
          <Plus
            width={20}
            height={20}
            className="shrink-0 text-blue-600 transition-transform duration-200"
            strokeWidth={2}
            aria-hidden
          />
        )}
        {indicator === "arrow" && (
          <ChevronDown
            className="size-6 shrink-0 text-blue-600 transition-transform duration-200"
            strokeWidth={2.5}
            aria-hidden
          />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent(
  props: React.ComponentProps<typeof AccordionPrimitive.Content>,
) {
  const { className, children, ...rest } = props;
  const { variant } = React.useContext(AccordionContext);

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(accordionContentVariants({ variant }), className)}
      {...rest}
    >
      <div className={cn("pb-5 pt-0 pl-0 pr-12", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

// Exports
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
