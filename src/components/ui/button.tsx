import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#E23A00] text-white hover:bg-[#c53200] px-5 py-2 min-h-[40px] min-w-[100px] text-base",
        destructive:
          "bg-[#F9B3B3] text-white hover:bg-[#e57373] px-5 py-2 min-h-[40px] min-w-[100px] text-base",
        outline:
          "bg-white border border-[#B0B0B0] text-[#222] hover:bg-[#F3F4F6] px-5 py-2 min-h-[40px] min-w-[100px] text-base",
        secondary:
          "bg-[#234846] text-white hover:bg-[#1a3533] px-5 py-2 min-h-[40px] min-w-[100px] text-base",
        ghost:
          "bg-transparent text-[#B0B0B0] hover:bg-[#F3F4F6] px-5 py-2 min-h-[40px] min-w-[100px] text-base",
        link: "bg-transparent text-[#E23A00] underline-offset-4 hover:underline px-5 py-2 min-h-[40px] min-w-[100px] text-base",
        disabled: "bg-[#F9C6B3] text-white px-5 py-2 min-h-[40px] min-w-[100px] text-base cursor-not-allowed opacity-60",
      },
      size: {
        sm: "h-8 px-4 py-1.5 text-sm",
        default: "h-10 px-5 py-2 text-base",
        lg: "h-12 px-6 py-3 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
