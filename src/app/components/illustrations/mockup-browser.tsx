"use client";

import { Link } from "lucide-react";
import Glow from "../ui/glow";
import { Mockup } from "../ui/mockup";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const MockupBrowserIllustration: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/app-light.png";
      break;
    case "dark":
      src = "/app-dark.png";
      break;
    default:
      src = "/app-dark.png";
      break;
  }

  return (
    <div className={cn("h-full w-full", className)}>
      <div className="relative h-full w-full">
        <div className="absolute left-[50%] top-0 z-10 w-full -translate-x-[50%] translate-y-0 transition-all duration-1000 ease-in-out group-hover:-translate-y-4">
          <Mockup
            type="responsive"
            className="min-w-[640px] flex-col rounded-[12px]"
          >
            <div className="relative flex h-10 items-center gap-2 border-b border-border/70 bg-muted/50 px-4 py-2 dark:border-b-0">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-accent"></div>
                <div className="h-3 w-3 rounded-full bg-accent"></div>
                <div className="h-3 w-3 rounded-full bg-accent"></div>
              </div>
              <div className="absolute left-1/2 top-1.5 flex min-w-[240px] -translate-x-1/2 items-center justify-center gap-2 rounded-md border-b bg-gradient-to-t from-primary/10 to-primary/5 px-3 py-1.5 text-center text-xs text-muted-foreground">
                <Link className="h-3 w-3" />
                <p>127.0.0.1:8000</p>
              </div>
            </div>
            <Image
              src={src}
              alt="Launch UI app screenshot"
              width={1340}
              height={820}
            />
          </Mockup>
        </div>
        <Glow
          variant="center"
          className="translate-y-0 scale-x-[2] opacity-20 transition-all duration-1000 group-hover:-translate-y-12 group-hover:opacity-30"
        />
      </div>
    </div>
  );
};

export default MockupBrowserIllustration;
