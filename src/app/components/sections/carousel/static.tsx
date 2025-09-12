"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { Section } from "../../ui/section";
import {
  Slide,
  SlideContent,
  SlideTitle,
  SlideDescription,
  SlideVisual,
} from "../../ui/slide";
import Image from "next/image";
import { useTheme } from "next-themes";
import Glow from "../../ui/glow";

const slides = [
  {
    tagline: "Gain Practical Experience",
    title: "Internships",
    imageLight: "/app-light.png",
    imageDark: "/app-dark.png",
  },
  {
    tagline: "Explore Diverse Careers",
    title: "Jobs",
    imageLight: "/app-mail-light.png",
    imageDark: "/app-mail-dark.png",
  },
  {
    tagline: "Guidance from Top Mentors",
    title: "Mentorships",
    imageLight: "/app-settings-light.png",
    imageDark: "/app-settings-dark.png",
  },
  {
    tagline: "Grow Your Skills",
    title: "Courses",
    imageLight: "/app-tasks-light.png",
    imageDark: "/app-tasks-dark.png",
  },
 
];

export default function CarouselStatic() {
  const { resolvedTheme } = useTheme();
  const [expandedSlides, setExpandedSlides] = React.useState<boolean[]>(
    new Array(slides.length).fill(false),
  );

  const toggleSlide = (index: number) => {
    setExpandedSlides((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Section className="w-full overflow-hidden">
      <div className="mx-auto flex max-w-container flex-col items-start gap-6 sm:gap-12">
        
        <Carousel
          opts={{
            align: "start",
            startIndex: 0,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className="flex basis-4/5 pl-4 sm:basis-2/3 lg:basis-5/12 xl:basis-1/3"
              >
                <Slide 
                  className="grow" 
                  isExpanded={expandedSlides[index]}
                  onClick={() => toggleSlide(index)} // Add this line
                >
                  <SlideVisual
                    className="fade-bottom-lg min-h-[300px] items-end overflow-hidden"
                    isExpanded={expandedSlides[index]}
                  >
                    <Image
                      src={
                        resolvedTheme === "light"
                          ? slide.imageLight
                          : slide.imageDark
                      }
                      alt={slide.title}
                      width={900}
                      height={600}
                      className="h-full max-h-[300px] w-full origin-top-left scale-[2] object-cover transition-transform duration-300 group-hover:scale-[2.1]"
                    />
                    <Glow
                      variant="center"
                      className="scale-[2.5] opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                    />
                  </SlideVisual>
                  <SlideContent isExpanded={expandedSlides[index]}>
                    <SlideDescription>{slide.tagline}</SlideDescription>
                    <SlideTitle className="text-balance">
                      {slide.title}
                    </SlideTitle>
                  </SlideContent>
                </Slide>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-12 flex justify-start gap-4">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
}
