import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border-0 px-3 py-1 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[#E6F4EA] text-[#219653]", // green badge
        secondary:
          "bg-[#E3EAFD] text-[#2563EB]", // blue badge
        destructive:
          "bg-[#F9B3B3] text-[#B91C1C]", // red badge
        outline:
          "bg-[#F3F4F6] text-[#6B7280] border border-[#D1D5DB]", // gray badge
        gray:
          "bg-[#F3F4F6] text-[#6B7280]", // custom gray badge
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
