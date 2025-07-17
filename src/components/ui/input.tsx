import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-lg border border-[#D1D5DB] bg-white px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-[#F97316] selection:text-white file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-[#6B7280] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#F97316] focus-visible:ring-[2px] focus-visible:ring-[#F97316]/30",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
