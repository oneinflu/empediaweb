/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { Mockup } from "../../ui/mockup";
import Glow from "../../ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import Github from "../../logos/github";

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
    <Section className="relative w-full overflow-hidden">
      <div className="relative mx-auto flex max-w-container flex-col gap-12 sm:gap-24">
        <div className="relative z-10 flex flex-col items-center gap-6 pt-16 text-center sm:gap-12">
          <h1 className="inline-block animate-appear bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight dark:to-muted-foreground">
            Give your big idea the website it deserves
          </h1>
          <p className="text-md max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            Landing page components built with React, Shadcn/ui and Tailwind
            that will make your website feel premium.
          </p>
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
              <Button variant="default" size="lg" asChild>
                <a href="/">Get Started</a>
              </Button>
              <Button variant="glow" size="lg" asChild>
                <a href="/">
                  <Github className="mr-2 h-4 w-4" /> Github
                </a>
              </Button>
            </div>
          </div>
          <div className="relative pt-12">
            <Mockup className="animate-appear opacity-0 delay-700">
              <Image
                src={src}
                alt="Jupiter app screenshot"
                width={1248}
                height={765}
              />
            </Mockup>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <Glow
          variant="above"
          className="animate-appear-zoom opacity-0 delay-1000"
        />
      </div>
    </Section>
  );
}
