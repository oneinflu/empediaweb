"use client";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

// Use dynamic import to avoid SSR issues with framer-motion
const CardSlider = dynamic(() => import("./CardSlider"), { ssr: false });

export default function CareerHero() {
  return (
    <Section className="py-12">
      <div className="mx-auto max-w-container">
        {/* Card with linear gradient background */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
          <div className="flex flex-col md:flex-row p-8 md:p-12">
            {/* Left side - Text content */}
            <div className="flex flex-col items-start justify-center gap-4 w-full md:w-[45%] md:pr-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Unlock your <span className="text-blue-600 inline-block">career</span>
              </h1>
              <p className="text-sm md:text-base text-gray-700 max-w-[450px]">
                Explore opportunities from across the globe to grow, showcase skills, gain CV points & get
                hired by your dream company.
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 mt-4 px-6 rounded-md flex items-center"
              >
                Explore More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Right side - CardSlider */}
            <div className="w-full md:w-[55%] mt-8 md:mt-0">
              <CardSlider />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}