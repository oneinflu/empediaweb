import Glow from "../ui/glow";
import LaunchUI from "../logos/launch-ui";
import { cn } from "@/lib/utils";

import type { JSX } from "react";

const RadarIllustration: React.FC<{ className?: string }> = ({ className }) => {
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
    <div className={cn("relative mb-8 aspect-[2/1] w-full sm:mb-0", className)}>
      <div className="relative h-full w-full overflow-hidden">
        <div className="relative -top-[1px] h-full w-full">
          <div className="relative aspect-[1/1] h-[200%] w-full p-12">
            {createSegments()}
            <div className="relative h-full w-full rounded-full border-[12px] border-background">
              {createCircles()}
              <div
                className="absolute inset-0 h-full w-full animate-spin-slow rounded-full"
                style={{
                  background:
                    "conic-gradient(transparent, transparent, transparent, transparent, hsla(var(--brand-foreground) / 0.4))",
                }}
              ></div>
            </div>
          </div>
        </div>
        <Glow variant="bottom" className="scale-x-[75%]" />
      </div>
      <div className="absolute bottom-0 left-1/2 flex h-24 w-24 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-b from-brand/20 to-brand-foreground p-0.5 shadow-2xl md:h-32 md:w-32 dark:from-foreground dark:to-foreground/5">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-background p-2.5">
          <LaunchUI className="h-12 w-12 md:h-16 md:w-16" />
        </div>
      </div>
    </div>
  );
};

export default RadarIllustration;
