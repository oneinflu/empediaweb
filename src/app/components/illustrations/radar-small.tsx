import Glow from "../ui/glow";
import { cn } from "@/lib/utils";

import type { JSX } from "react";

const RadarSmallIllustration: React.FC<{ className?: string }> = ({
  className,
}) => {
  const totalCircles = 4;
  const totalSegments = 12;

  const createCircles = (index: number = 0): JSX.Element | null => {
    const opacity = (0.3 * index) / totalCircles;

    if (index === totalCircles) return null;

    const decrementPerStep = 100 / totalCircles;
    const size = 100 - index * decrementPerStep; // Dynamically calculate size reduction

    return (
      <>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4"
          style={{
            borderColor: `hsla(var(--brand) / ${opacity + 0.3})`,
            boxShadow: `inset 0px 0px 128px hsla(var(--brand-foreground) / ${opacity + 0.2})`,
            width: `${size}%`,
            height: `${size}%`,
          }}
        ></div>
        {createCircles(index + 1)}
      </>
    );
  };

  const createSegments = (index: number = 0): JSX.Element | null => {
    if (index === totalSegments) return null;

    return (
      <>
        <div
          className="absolute left-0 top-1/2 h-[1px] w-full bg-brand-foreground/20"
          style={{
            transform: `rotate(${index * (360 / totalSegments)}deg)`,
          }}
        ></div>
        {createSegments(index + 1)}
      </>
    );
  };

  return (
    <div
      className={cn(
        "relative mb-8 flex h-full w-full items-end sm:mb-0",
        className,
      )}
    >
      <div className="relative flex aspect-[1/1] h-full w-full items-end">
        <div className="relative aspect-[1/1] h-full w-full p-12">
          {createSegments()}
          <div className="relative h-full w-full rounded-full border-[12px] border-card/100 dark:border-background">
            {createCircles()}
            <div
              className="absolute inset-0 h-full w-full rounded-full opacity-0 group-hover:animate-spin-slow group-hover:opacity-100"
              style={{
                background:
                  "conic-gradient(transparent, transparent, transparent, transparent, hsla(var(--brand-foreground) / 0.4))",
              }}
            ></div>
          </div>
        </div>
        <div className="absolute bottom-[20%] left-[30%] h-3 w-3 rounded-full bg-brand opacity-50 shadow-[0_0_12px_4px_hsla(var(--brand-foreground)/1)] group-hover:animate-ping group-hover:opacity-100" />
        <div className="absolute bottom-[20%] left-[30%] h-3 w-3 rounded-full bg-white/80" />
        <div className="absolute bottom-[40%] right-[25%] h-3 w-3 rounded-full bg-brand opacity-50 shadow-[0_0_12px_4px_hsla(var(--brand-foreground)/1)] group-hover:animate-ping group-hover:opacity-100" />
        <div className="absolute bottom-[40%] right-[25%] h-3 w-3 rounded-full bg-white/80" />
        <Glow
          variant="center"
          className="opacity-20 transition-all duration-300 group-hover:opacity-30"
        />
      </div>
      <div className="glass-5 absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-brand/70 p-2.5 shadow-md backdrop-blur-md dark:border-brand/20"></div>
    </div>
  );
};

export default RadarSmallIllustration;
