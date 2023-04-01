import React, { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

// after adding this HTMLAttributes<HTMLParagraphElement>, go to where ever <Paragraph /> component is used -> ctrl + space, u'll see the options
interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm, sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

// 👇🏼 to disable eslint display name error
Paragraph.displayName = "Paragraph";
export default Paragraph;
