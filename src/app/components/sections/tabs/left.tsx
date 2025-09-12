"use client";

import { Section } from "../../ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Image from "next/image";
import Glow from "../../ui/glow";
import { useTheme } from "next-themes";
import {
  BlocksIcon,
  PaletteIcon,
 
  SquarePenIcon,
} from "lucide-react";

export default function TabsLeft() {
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
    <Section>
      <div className="mx-auto flex max-w-container flex-col gap-8 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
          <h2 className="text-balance text-center text-3xl font-semibold sm:text-5xl">
            Make the right impression
          </h2>
          <p className="text-md max-w-[720px] text-balance text-center font-medium text-muted-foreground sm:text-xl">
            Launch UI makes it easy to build an unforgetable website that
            resonates with professional design-centric audiences.
          </p>
        </div>
        <div className="w-full">
          <Tabs
            defaultValue="choose-sections"
            className="flex flex-col items-start gap-4 lg:grid lg:grid-cols-3"
          >
            <TabsList className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-1">
              <TabsTrigger
                value="choose-sections"
                className="flex w-full flex-row gap-2 p-3"
              >
                <div className="p-1">
                  <BlocksIcon className="h-4 w-4 shrink-0 stroke-1 md:h-5 md:w-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold md:text-lg">
                    Choose your sections
                  </h3>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    Choose among 100+ components to build a landing page suited
                    to the needs of your product.
                  </p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="add-content"
                className="flex flex-row gap-2 p-3"
              >
                <div className="p-1">
                  <SquarePenIcon className="h-4 w-4 shrink-0 stroke-1 md:h-5 md:w-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold md:text-lg">Add your content</h3>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    Fill the blanks with screenshots, videos, and other content
                    featuring your product.
                  </p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="customize"
                className="flex flex-row gap-2 p-3"
              >
                <div className="p-1">
                  <PaletteIcon className="h-4 w-4 shrink-0 stroke-1 md:h-5 md:w-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold md:text-lg">Customize</h3>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    Make design yours in no time by changing the variables that
                    control colors, typography, and other styles.
                  </p>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="choose-sections"
              className="aspect-[16/9] p-8 lg:col-span-2"
            >
              <MockupFrame size="small">
                <Mockup type="responsive">
                  <Image
                    src={sectionSrc}
                    alt="Launch UI app screenshot"
                    width={1248}
                    height={765}
                  />
                </Mockup>
              </MockupFrame>
              <Glow variant="center" />
            </TabsContent>
            <TabsContent
              value="add-content"
              className="aspect-[16/9] p-8 lg:col-span-2"
            >
              <MockupFrame size="small">
                <Mockup type="responsive">
                  <Image
                    src={contentSrc}
                    alt="Launch UI app screenshot"
                    width={1248}
                    height={765}
                  />
                </Mockup>
              </MockupFrame>
              <Glow variant="center" />
            </TabsContent>
            <TabsContent
              value="customize"
              className="aspect-[16/9] p-8 lg:col-span-2"
            >
              <MockupFrame size="small">
                <Mockup type="responsive">
                  <Image
                    src={customizeSrc}
                    alt="Launch UI app screenshot"
                    width={1248}
                    height={765}
                  />
                </Mockup>
              </MockupFrame>
              <Glow variant="center" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Section>
  );
}
