import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

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
export default function Paragraph({}: ParagraphProps) {
  return <div>Paragraph</div>;
}
