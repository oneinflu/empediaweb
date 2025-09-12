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
  SlideButton,
  SlideExpandedContent,
} from "../../ui/slide";
import Image from "next/image";
import { useTheme } from "next-themes";
import Glow from "../../ui/glow";

const slides = [
   {
    tagline: "Gain Practical Experience",
    title: "Internships",
    imageLight: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageDark: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&blend=111827&blend-mode=multiply&sat=-100",
  },
  {
    tagline: "Explore Diverse Careers",
    title: "Jobs",
    imageLight: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageDark: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&blend=111827&blend-mode=multiply&sat=-100",
  },
  {
    tagline: "Guidance from Top Mentors",
    title: "Mentorships",
    imageLight: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageDark: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&blend=111827&blend-mode=multiply&sat=-100",
  },
  {
    tagline: "Grow Your Skills",
    title: "Courses",
    imageLight: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageDark: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&blend=111827&blend-mode=multiply&sat=-100",
  },
 
];

export default function CarouselLarge() {
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
              <CarouselItem key={index} className="flex basis-2/3 pl-4">
                <Slide
                  className="grow cursor-pointer"
                  isExpanded={expandedSlides[index]}
                  onClick={() => toggleSlide(index)}
                >
                  <SlideVisual
                    className="relative min-h-[300px] items-end overflow-hidden"
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
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 transition-opacity duration-300"></div>
                    <Glow
                      variant="center"
                      className="scale-[2.5] opacity-30 transition-opacity duration-300 group-hover:opacity-40"
                    />
                  </SlideVisual>
                  <SlideButton
                    isExpanded={expandedSlides[index]}
                    onClick={() => toggleSlide(index)}
                  />
                  <SlideContent isExpanded={expandedSlides[index]} className="relative z-10">
                    <SlideDescription className="text-white/90 font-medium text-sm">{slide.tagline}</SlideDescription>
                    <SlideTitle className="text-balance text-white text-xl font-bold">
                      {slide.title}
                    </SlideTitle>
                  </SlideContent>
                  <SlideExpandedContent isExpanded={expandedSlides[index]}>
                    {slide.tagline}
                  </SlideExpandedContent>
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
