/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import Glow from "../../ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Badge } from "../../ui/badge";
import { ArrowRightIcon } from "lucide-react";
import Github from "../../logos/github";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/mobile-app-light.png";
      break;
    case "dark":
      src = "/mobile-app-dark.png";
      break;
    default:
      src = "/mobile-app-dark.png";
      break;
  }

  return (
    <Section className="w-full overflow-hidden">
      <div className="mx-auto flex max-w-container flex-col items-center gap-12 sm:gap-24 md:flex-row">
        <div className="flex flex-col items-center justify-center gap-6 pb-0 text-center md:items-start md:gap-8 md:pb-8 md:text-left lg:gap-12 lg:pb-16">
          <Badge variant="outline" className="animate-appear">
            <span className="text-muted-foreground">
              New version of Launch UI is out!
            </span>
            <a
              href="/"
              className="flex items-center gap-1"
            >
              Get started
              <ArrowRightIcon className="h-3 w-3" />
            </a>
          </Badge>
          <h1 className="inline-block animate-appear bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-semibold leading-[1.1em] text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-[1.1em] dark:to-muted-foreground">
            Give your big idea the website it deserves
          </h1>
          <p className="text-md max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 lg:text-xl">
            Landing page components built with React, Shadcn/ui and Tailwind
            that will make your website feel premium.
          </p>
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
        <div className="relative">
          <div className="max-w-[320px] animate-appear opacity-0 delay-700 md:max-w-[720px]">
            <Image
              src={src}
              alt="Launch UI app screenshot"
              width={900}
              height={1840}
              className="relative z-10"
            />
            <Glow
              variant="center"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
