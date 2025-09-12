/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { Input } from "../../ui/input";
import RisingIllustration from "../../illustrations/rising-small";
import { useTheme } from "next-themes";

export default function Hero() {
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
    <Section className="fade-bottom w-full overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="mx-auto flex max-w-container flex-col gap-12 sm:gap-24">
        <div className="flex flex-col items-center gap-6 pt-16 text-center sm:gap-12">
          <h1 className="inline-block animate-appear bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight dark:to-muted-foreground">
           Unlock Your Career
          </h1>
          <p className="text-md max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
           Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
          </p>
          <div className="relative z-10 flex animate-appear flex-col items-center justify-center gap-4 self-stretch opacity-0 delay-300">
            <div className="flex w-full max-w-[420px] gap-2">
              <Input
                type="email"
                placeholder="Email address"
                className="grow border-brand/20 bg-foreground/10"
              />
              <Button variant="default" size="lg" asChild>
                <a href="/">Get Started</a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Free and open source forever.
            </p>
          </div>
          <div className="relative w-full pt-12">
            <RisingIllustration />
          </div>
        </div>
      </div>
    </Section>
  );
}
