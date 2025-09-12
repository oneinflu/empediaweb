"use client";

import { Section } from "../../ui/section";
import Image from "next/image";

import { useTheme } from "next-themes";

export default function FeatureStickyRight() {
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
    <Section className="relative max-md:mb-16 max-md:max-h-[850px] max-md:overflow-hidden max-md:border-b max-sm:max-h-[650px]">
      <div className="relative z-10 mx-auto flex max-w-container flex-col-reverse items-center gap-12 md:flex-row md:items-start lg:gap-24">
        <div className="relative z-10">
          <div className="relative max-w-[320px] after:absolute after:left-1/2 after:top-1/2 after:block after:h-[128px] after:w-[128px] after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[3] after:rounded-[50%] after:bg-brand-foreground/70 after:opacity-20 after:blur-[72px] after:content-[''] md:max-w-[720px] xl:after:h-[256px] xl:after:w-[256px] dark:after:opacity-100">
            <Image
              src={src}
              alt="Launch UI app screenshot"
              width={900}
              height={1840}
              className="relative z-10"
            />
          </div>
        </div>
        <div className="right-0 top-32 flex flex-col items-start gap-4 py-4 text-center sm:gap-12 md:sticky md:py-12 md:text-left">
          <h1 className="relative z-10 inline-block max-w-[920px] text-balance bg-gradient-to-r from-foreground to-foreground bg-clip-text text-3xl font-semibold text-transparent drop-shadow-2xl sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight dark:to-muted-foreground">
            Everything you need at your fingertips
          </h1>
          <div className="text-md relative z-10 flex max-w-[620px] flex-col gap-4 text-balance font-medium text-muted-foreground sm:text-xl">
            <p>
              A comprehensive collection of components written in modern React,
              Typescript and Tailwind CSS.
            </p>
            <p>
              You&apos;ll find here everything you need to build your next
              landing page.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
