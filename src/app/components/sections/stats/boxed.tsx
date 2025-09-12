import { Section } from "../../ui/section";

export default function StatsTiles() {
  return (
    <Section>
      <div className="glass-3 container relative mx-auto max-w-[1128px] rounded-[calc(var(--radius)+1rem)] border-x-0 to-transparent px-24 py-16">
        <hr className="absolute left-[10%] top-0 h-[1px] w-[80%] border-0 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
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
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
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
