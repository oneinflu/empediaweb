/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useTheme } from "next-themes";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import Github from "../../logos/github";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Image from "next/image";
import { SocialStats } from "../../ui/social-stats";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  let sectionSrc: string;
  let contentSrc: string;
  let customizeSrc: string;

  switch (resolvedTheme) {
    case "light":
      sectionSrc = "/app-light.png";
      contentSrc = "/app-mail-light.png";
      customizeSrc = "/app-settings-light.png";
      break;
    case "dark":
      sectionSrc = "/app-dark.png";
      contentSrc = "/app-mail-dark.png";
      customizeSrc = "/app-settings-dark.png";
      break;
    default:
      sectionSrc = "/app-dark.png";
      contentSrc = "/app-mail-dark.png";
      customizeSrc = "/app-settings-dark.png";
      break;
  }

  return (
    <Section className="fade-bottom w-full overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="relative mx-auto flex max-w-container flex-col gap-12 pt-8">
        <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
          <h1 className="inline-block max-w-[650px] animate-appear bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-semibold leading-[1.1em] text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-[1.1em] dark:to-muted-foreground">
            Give your big idea the website it deserves
          </h1>
          <p className="text-md max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 lg:text-xl">
            Landing page components built with React, Shadcn/ui and Tailwind
            that will make your website feel premium.
          </p>
          <div className="flex animate-appear gap-4 opacity-0 delay-300">
            <Button variant="default" size="lg" asChild>
              <a href="/">Get Started</a>
            </Button>
            <Button variant="glow" size="lg" asChild>
              <a href="/">
                <Github className="mr-2 h-4 w-4" /> Github
              </a>
            </Button>
          </div>
          <div className="flex animate-appear gap-4 opacity-0 delay-300">
            <SocialStats />
          </div>
        </div>
        <div className="group relative sm:px-24">
          <div className="relative left-[-24%] z-10 h-[24px] rotate-[-24deg] skew-y-12 transition-all delay-200 duration-700 ease-in-out group-hover:left-[-32%] group-hover:rotate-[-12deg] group-hover:skew-y-6">
            <MockupFrame
              className="animate-appear opacity-0 shadow-mockup delay-500"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={sectionSrc}
                  alt="Launch UI app screenshot"
                  width={1248}
                  height={765}
                />
              </Mockup>
            </MockupFrame>
          </div>
          <div className="relative z-10 h-[24px] rotate-[-24deg] skew-y-12 transition-all delay-200 duration-700 ease-in-out group-hover:rotate-[-12deg] group-hover:skew-y-6">
            <MockupFrame
              className="animate-appear opacity-0 shadow-mockup delay-1000"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={contentSrc}
                  alt="Launch UI app screenshot"
                  width={1248}
                  height={765}
                />
              </Mockup>
            </MockupFrame>
          </div>
          <div className="relative left-[32%] z-10 rotate-[-24deg] skew-y-12 transition-all delay-200 duration-700 ease-in-out group-hover:left-[48%] group-hover:rotate-[-12deg] group-hover:skew-y-6">
            <MockupFrame
              className="animate-appear opacity-0 shadow-mockup delay-1500"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={customizeSrc}
                  alt="Launch UI app screenshot"
                  width={1248}
                  height={765}
                />
              </Mockup>
            </MockupFrame>
          </div>
        </div>
        <Glow
          variant="center"
          className="mt-32 animate-appear-zoom opacity-0 delay-2000 lg:-mt-12"
        />
      </div>
    </Section>
  );
}
