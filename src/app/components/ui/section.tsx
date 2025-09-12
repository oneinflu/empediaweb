import * as React from "react";

import { cn } from "@/lib/utils";

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "bg-white px-4 py-6 text-foreground sm:py-8 md:py-12",
      className,
    )}
    {...props}
  />
));
Section.displayName = "Section";

export { Section };
