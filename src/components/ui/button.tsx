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
          "bg-primary text-primary-foreground hover:bg-[#e25500] px-5 py-2 min-h-[40px] min-w-[100px] text-base border border-transparent rounded-[var(--radius)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-[#c53200] px-5 py-2 min-h-[40px] min-w-[100px] text-base border border-transparent rounded-[var(--radius)]",
        outline:
          "bg-white border border-border text-foreground hover:bg-muted px-5 py-2 min-h-[40px] min-w-[100px] text-base rounded-[var(--radius)]",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-[#E5E7EB] px-5 py-2 min-h-[40px] min-w-[100px] text-base rounded-[var(--radius)]",
        ghost:
          "bg-transparent text-muted-foreground hover:bg-muted px-5 py-2 min-h-[40px] min-w-[100px] text-base border border-transparent rounded-[var(--radius)]",
        link: "bg-transparent text-primary underline-offset-4 hover:underline px-5 py-2 min-h-[40px] min-w-[100px] text-base border border-transparent rounded-[var(--radius)]",
        disabled: "bg-muted text-muted-foreground px-5 py-2 min-h-[40px] min-w-[100px] text-base cursor-not-allowed opacity-60 border border-transparent rounded-[var(--radius)]",
      },
      size: {
        sm: "h-8 px-4 py-1.5 text-sm",
        default: "h-10 px-5 py-2 text-base",
        lg: "h-12 px-6 py-3 text-lg",
        icon: "size-10",
      },
      block: {
        true: "w-full",
        false: "",
      },
      loading: {
        true: "opacity-70 cursor-wait",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      block: false,
      loading: false,
    },
  },
);

function Button({
  className,
  variant,
  size,
  block = false,
  loading = false,
  icon,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    block?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot : "button";
  const content = (
    <>
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
      {loading && (
        <span className="ml-2 animate-spin border-2 border-t-2 border-t-primary border-primary-foreground rounded-full w-4 h-4 inline-block align-middle" />
      )}
    </>
  );

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, block, loading, className }))}
      aria-busy={loading || undefined}
      {...props}
    >
      {asChild ? <span>{content}</span> : content}
    </Comp>
  );
}

export { Button, buttonVariants };
