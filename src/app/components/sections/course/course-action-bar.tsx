"use client";

import { Button } from "@/app/components/ui/button";
import { CategoryCardProps } from "@/app/data/category-data";
import { User, Briefcase } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

type CourseActionBarProps = {
  course: CategoryCardProps & {
    level?: string;
    duration?: string;
    format?: string;
    originalPrice?: string;
  };
};

export default function CourseActionBar({ course }: CourseActionBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show when scrolling up or at the bottom of the page
      if (currentScrollY < lastScrollY || 
          window.innerHeight + currentScrollY >= document.body.offsetHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-3 px-4 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="max-w-container mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Price information - visible on mobile and desktop */}
        <div className="flex items-center gap-3 md:hidden lg:flex">
          <div>
            <p className="font-bold text-lg">{course.salary}</p>
            {course.originalPrice && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>
                <span className="px-1.5 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded">
                  {course.salary && course.originalPrice && Math.round((1 - parseInt(course.salary.replace(/[^0-9]/g, '')) / 
                    parseInt(course.originalPrice.replace(/[^0-9]/g, ''))) * 100)}% OFF
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center gap-3 flex-wrap flex-1 justify-end md:justify-center lg:justify-end">
          {/* Enroll Now Button */}
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 min-w-[140px]"
          >
            Enroll Now
          </Button>
          
          {/* Talk to Mentor Button */}
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-300 text-blue-700 hover:bg-blue-50 flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            Talk to Mentor
          </Button>
          
          {/* See Jobs Button */}
          <Link href="/jobs">
            <Button 
              variant="outline" 
              size="lg"
              className="border-green-300 text-green-700 hover:bg-green-50 flex items-center gap-2"
            >
              <Briefcase className="h-4 w-4" />
              See Jobs After Completion
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}