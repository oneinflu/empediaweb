import { Cloud, Database } from "lucide-react";
import LaunchUI from "../logos/launch-ui";
import { Beam } from "../ui/beam";
import Glow from "../ui/glow";

const PipelineIllustration: React.FC = () => {
  return (
    <div className="relative flex w-full flex-col gap-4 p-4 text-xs">
      <div className="flex items-center justify-around">
        <div className="glass-4 relative z-10 flex h-14 w-14 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-95 sm:h-16 sm:w-16 lg:h-20 lg:w-20">
          <Cloud className="h-6 w-6 stroke-1 sm:h-8 sm:w-8" />
        </div>
        <div className="relative">
          <div className="glass-4 relative z-10 flex h-20 w-20 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-105 sm:h-24 sm:w-24 lg:h-32 lg:w-32">
            <Beam tone="brandLight" size="large">
              <div className="relative z-10">
                <LaunchUI className="h-8 w-8 sm:h-12 sm:w-12" />
              </div>
            </Beam>
          </div>
          <div className="z-1 absolute -left-12 top-[50%] h-24 w-24 -translate-y-12 rounded-full bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/0.5)_20%,_hsla(var(--brand-foreground)/0.1)_50%,_hsla(var(--brand-foreground)/0)_80%)]" />
          <div className="absolute -left-4 top-[50%] h-8 w-8 -translate-y-4 rounded-full bg-[radial-gradient(ellipse_at_center,_hsla(0_0_100/0.7)_20%,_hsla(0_0_100/0)_60%)]" />
          <div className="z-1 absolute -right-12 top-[50%] h-24 w-24 -translate-y-12 rounded-full bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/0.5)_20%,_hsla(var(--brand-foreground)/0.1)_50%,_hsla(var(--brand-foreground)/0)_80%)]" />
          <div className="absolute -right-4 top-[50%] h-8 w-8 -translate-y-4 rounded-full bg-[radial-gradient(ellipse_at_center,_hsla(0_0_100/0.7)_20%,_hsla(0_0_100/0)_60%)]" />
        </div>
        <div className="glass-4 relative z-10 flex h-14 w-14 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-95 sm:h-16 sm:w-16 lg:h-20 lg:w-20">
          <Database className="h-6 w-6 stroke-1 sm:h-8 sm:w-8" />
        </div>
        <div className="absolute left-0 top-[50%] opacity-0 group-hover:animate-impulse">
          <div className="z-1 absolute -left-12 top-[50%] h-24 w-24 -translate-y-12 rounded-full bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/0.5)_20%,_hsla(var(--brand-foreground)/0.1)_50%,_hsla(var(--brand-foreground)/0)_80%)]" />
          <div className="absolute -left-4 top-[50%] h-8 w-8 -translate-y-4 rounded-full bg-[radial-gradient(ellipse_at_center,_hsla(0_0_100/0.7)_20%,_hsla(0_0_100/0)_60%)]" />
        </div>
      </div>
      <Glow
        variant="center"
        className="opacity-20 transition-all duration-300 group-hover:opacity-30"
      />
      <div className="absolute left-0 top-[calc(50%-1px)] h-0.5 w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
    </div>
  );
};

export default PipelineIllustration;
