/* eslint-disable @next/next/no-html-link-for-pages */
import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";

export default function CTA() {
  return (
    <Section className="w-full overflow-hidden pt-0 md:pt-0">
      <div className="relative mx-auto flex max-w-container flex-col items-center gap-6 px-8 py-12 text-center sm:gap-8 md:py-24">
        <Badge variant="outline">
          <span className="text-muted-foreground">Get started</span>
        </Badge>
        <h2 className="text-3xl font-semibold sm:text-5xl">
          Start building with Launch UI
        </h2>
        <p className="text-muted-foreground">
          Get started with Launch UI and build your landing page in no time
        </p>
        <Button variant="default" size="lg" asChild>
          <a href="/">Get Started</a>
        </Button>
        <div className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-[0_-16px_128px_0_hsla(var(--brand-foreground)_/_0.5)_inset,0_-16px_32px_0_hsla(var(--brand)_/_0.5)_inset]"></div>
      </div>
    </Section>
  );
}
