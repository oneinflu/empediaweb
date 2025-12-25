"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TrendingCardProps = {
  title: string;
  subtitle: string;
  description?: string;
  imageSrc: string;
  logoSrc?: string[];
  ctaText: string;
  badgeText?: string;
};

const trendingItems: TrendingCardProps[] = [
  {
    title: "India Business Case Programme 2025-26",
    subtitle: "Real-world problem-solving",
    description: "Empowering Youth for Career Readiness",
    imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    logoSrc: [
      "https://logo.clearbit.com/microsoft.com", 
      "https://logo.clearbit.com/google.com", 
      "https://logo.clearbit.com/amazon.com"
    ],
    ctaText: "Apply now"
  },
  {
    title: "ZERO EXPERIENCE JOBS REVOLUTION",
    subtitle: "Jobs",
    imageSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    logoSrc: [
      "https://logo.clearbit.com/jio.com", 
      "https://logo.clearbit.com/paytm.com", 
      "https://logo.clearbit.com/swiggy.com"
    ],
    ctaText: "Apply now"
  },
  {
    title: "Internship with Dream Companies",
    subtitle: "Internships",
    description: "Stipend up to ₹2.4 lacs",
    imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    logoSrc: [
      "https://logo.clearbit.com/paytm.com", 
      "https://logo.clearbit.com/swiggy.com", 
      "https://logo.clearbit.com/zomato.com"
    ],
    ctaText: "Apply now"
  },
  {
    title: "Tech Bootcamps 2025",
    subtitle: "Learning",
    description: "Master in-demand skills",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    logoSrc: [
      "https://logo.clearbit.com/udemy.com", 
      "https://logo.clearbit.com/coursera.org", 
      "https://logo.clearbit.com/pluralsight.com"
    ],
    ctaText: "Enroll now"
  },
  {
    title: "Startup Pitch Competition",
    subtitle: "Entrepreneurship",
    description: "Win funding up to ₹50 lakhs",
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    logoSrc: [
      "https://logo.clearbit.com/ycombinator.com", 
      "https://logo.clearbit.com/sequoiacap.com", 
      "https://logo.clearbit.com/accel.com"
    ],
    ctaText: "Register now"
  },
  {
    title: "Global Leadership Summit",
    subtitle: "Leadership",
    description: "Connect with industry leaders",
    imageSrc: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    logoSrc: [
      "https://logo.clearbit.com/linkedin.com", 
      "https://logo.clearbit.com/salesforce.com", 
      "https://logo.clearbit.com/ibm.com"
    ],
    ctaText: "Join now"
  }
];

const TrendingCard = ({ item }: { item: TrendingCardProps }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
      <div className="relative h-40 md:h-48 overflow-hidden">
        <Image 
          src={item.imageSrc} 
          alt={item.title} 
          fill
          className="object-cover"
        />
        {item.badgeText && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {item.badgeText}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{item.subtitle}</span>
          <h3 className="font-bold text-lg">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-gray-700 mt-1">{item.description}</p>
          )}
        </div>
        
        {item.logoSrc && item.logoSrc.length > 0 && (
          <div className="flex items-center gap-2 mt-auto mb-3">
            {item.logoSrc.map((logo, idx) => (
              <div key={idx} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image src={logo} alt="Partner logo" width={24} height={24} className="w-6 h-6 object-contain" />
              </div>
            ))}
          </div>
        )}
        
        <Button 
          variant="destructive" 
          size="sm" 
          className="mt-auto self-start rounded-md">
          {item.ctaText}
        </Button>
      </div>
    </div>
  );
};

export default function TrendingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleItems = 3;
  const totalItems = trendingItems.length;
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < totalItems - maxVisibleItems;
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back to the beginning when reaching the end
      setCurrentIndex(0);
    }
  };

  // Setup autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      if (currentIndex < totalItems - maxVisibleItems) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0); // Loop back to start
      }
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentIndex, totalItems]);

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  // Resume autoplay when mouse leaves
  const resumeAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      if (currentIndex < totalItems - maxVisibleItems) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000);
  };

  return (
    <Section className="py-8 md:py-10"> {/* Reduced padding to fix spacing */}
      <div className="mx-auto max-w-container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending now</h2>
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border ${!canScrollLeft ? 'text-gray-300 border-gray-200' : 'text-gray-600 border-gray-300'}`}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollRight}
              disabled={false} 
              className="p-2 rounded-full border text-gray-600 border-gray-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden transition-all duration-500 ease-in-out"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          {trendingItems.slice(currentIndex, currentIndex + maxVisibleItems).map((item, index) => (
            <div 
              key={`${index}-${currentIndex}`} 
              className="h-full transition-transform duration-500 ease-in-out"
            >
              <TrendingCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}