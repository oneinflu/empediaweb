"use client";

import { cn } from "@/lib/utils";
import Glow from "../ui/glow";
import { Mockup, MockupFrame } from "../ui/mockup";
import Image from "next/image";
import { useTheme } from "next-themes";

const MockupResponsiveTopIllustration: React.FC<{ className?: string }> = ({
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
        <MockupFrame
          size="small"
          className="absolute left-0 top-0 w-full min-w-[680px] translate-y-0 transition-all duration-1000 ease-in-out group-hover:-translate-y-4"
        >
          <Mockup type="responsive">
            <Image
              src={src}
              alt="Launch UI app screenshot"
              width={1340}
              height={820}
            />
          </Mockup>
        </MockupFrame>
        <Glow
          variant="bottom"
          className="translate-y-0 transition-all duration-1000 group-hover:-translate-y-12"
        />
      </div>
    </div>
  );
};

export default MockupResponsiveTopIllustration;
