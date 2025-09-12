import LaunchUI from "../logos/launch-ui";
import { Beam } from "../ui/beam";
import Glow from "../ui/glow";

const RippleIllustration: React.FC = () => {
  const totalCircles = 12;

  const generateNestedCircles = (index: number = 0): React.ReactNode => {
    if (index === totalCircles) {
      return (
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <div className="flex h-full w-full rounded-full bg-gradient-to-b from-brand-foreground/5 to-brand-foreground/20 p-2 dark:from-brand-foreground/20 dark:to-brand-foreground/0">
            <div className="glass-5 flex h-full w-full items-center justify-center rounded-full border-brand-foreground/50 p-2.5 shadow-md dark:border-border">
              <Beam tone="brand" size="large" className="after:opacity-70">
                <div className="relative z-10">
                  <LaunchUI className="h-16 w-16 text-foreground" />
                </div>
              </Beam>
            </div>
          </div>
        </div>
      );
    }

    const opacity = (0.5 * index) / totalCircles;

    return (
      <div
        className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
        style={{
          borderColor: `hsla(var(--border) / ${opacity})`,
        }}
      >
        {generateNestedCircles(index + 1)}
      </div>
    );
  };

  return (
    <div className="relative h-[386px] w-[386px]">
      <div className="relative z-10 h-full w-full">
        {generateNestedCircles()}
      </div>
      <Glow
        variant="center"
        className="opacity-30 transition-all duration-300 group-hover:opacity-40"
      />
    </div>
  );
};

export default RippleIllustration;
