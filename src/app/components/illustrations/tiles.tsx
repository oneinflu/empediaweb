import { Beam } from "../ui/beam";

import TailwindLogo from "../logos/tailwind";
import ReactLogo from "../logos/react";
import TypeScriptLogo from "../logos/typescript";
import ShadcnLogo from "../logos/shadcn-ui";
import FigmaLogo from "../logos/figma";
import Glow from "../ui/glow";

const TilesIllustration: React.FC = () => {
  return (
    <div className="relative grid h-[318px] w-[534px] grid-flow-col grid-cols-5 grid-rows-6 gap-6">
      <div className="row-span-2 row-start-2"></div>
      <div className="fade-left-lg row-span-2 rounded-xl bg-background transition-all duration-1000 ease-in-out"></div>
      <div className="fade-top-lg row-span-2 rounded-xl bg-background transition-all duration-1000 ease-in-out"></div>
      <div className="glass-4 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent shadow-[0_0_0_6px_hsl(var(--foreground)/0.02)] transition-all duration-1000 ease-in-out group-hover:scale-105 dark:shadow-[0_0_0_6px_hsl(var(--background)/0.1)]">
        <Beam tone="brandLight">
          <div className="text-light relative z-10">
            <TailwindLogo />
          </div>
        </Beam>
      </div>
      <div className="fade-bottom-lg row-span-2 rounded-xl bg-background transition-all duration-1000 ease-in-out"></div>
      <div className="glass-4 relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl to-transparent shadow-[0_0_0_6px_hsl(var(--foreground)/0.02)] transition-all duration-1000 ease-in-out group-hover:scale-90 dark:shadow-[0_0_0_6px_hsl(var(--background)/0.1)]">
        <Beam tone="brandLight">
          <div className="text-light relative z-10">
            <ReactLogo />
          </div>
        </Beam>
      </div>
      <div className="glass-4 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent shadow-[0_0_0_6px_hsl(var(--foreground)/0.02)] transition-all duration-1000 ease-in-out dark:shadow-[0_0_0_6px_hsl(var(--background)/0.1)]">
        <Beam tone="brandLight">
          <div className="text-light relative z-10">
            <TypeScriptLogo />
          </div>
        </Beam>
      </div>
      <div className="fade-top-lg row-span-2 rounded-xl bg-background transition-all duration-1000 ease-in-out"></div>
      <div className="glass-4 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent shadow-[0_0_0_6px_hsl(var(--foreground)/0.02)] transition-all duration-1000 ease-in-out group-hover:scale-105 dark:shadow-[0_0_0_6px_hsl(var(--background)/0.1)]">
        <Beam tone="brandLight">
          <div className="text-light relative z-10">
            <ShadcnLogo />
          </div>
        </Beam>
      </div>
      <div className="glass-4 relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl to-transparent shadow-[0_0_0_6px_hsl(var(--foreground)/0.02)] transition-all duration-1000 ease-in-out group-hover:scale-[.8] dark:shadow-[0_0_0_6px_hsl(var(--background)/0.1)]">
        <Beam tone="brandLight">
          <div className="text-light relative z-10">
            <FigmaLogo />
          </div>
        </Beam>
      </div>
      <div className="fade-right-lg row-span-2 rounded-xl bg-background transition-all duration-1000 ease-in-out"></div>
      <Glow
        variant="center"
        className="scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
      />
    </div>
  );
};

export default TilesIllustration;
