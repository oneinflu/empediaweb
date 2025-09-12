import { Section } from "../../ui/section";

export default function StatsGrid() {
  return (
    <Section className="w-full overflow-hidden">
      <div className="mx-auto flex max-w-container flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col gap-8">
          <h2 className="max-w-[500px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            A powerful React library for websites
          </h2>
          <p className="text-md max-w-[540px] text-pretty font-medium text-muted-foreground sm:text-xl">
            A comprehensive collection of components written in modern React,
            Typescript and Tailwind CSS.
          </p>
        </div>
        <div className="grid max-w-[500px] grid-cols-2 gap-8 p-4 md:gap-x-20 md:gap-y-12">
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              used by
            </div>
            <div className="flex items-baseline gap-2">
              <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
                x
              </div>
              <div className="text-2xl font-semibold text-brand">k</div>
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              designers on Figma Community
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              over
            </div>
            <div className="flex items-baseline gap-2">
              <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
                x
              </div>
            </div>
            <div className="text-balance text-sm font-semibold text-muted-foreground">
              clones and forks of the template on Github
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              already
            </div>
            <div className="flex items-baseline gap-2">
              <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
                x
              </div>
              <div className="text-2xl font-semibold text-brand">k</div>
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              installations with shadcn/ui CLI
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              includes
            </div>
            <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
              x
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              React components and sections
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
