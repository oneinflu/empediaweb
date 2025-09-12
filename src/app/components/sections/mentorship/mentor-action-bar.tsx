"use client";

import { Button } from "@/app/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

type MentorActionBarProps = {
  mentor: {
    name: string;
    price: string;
    priceType: string;
    isAvailable: boolean;
  };
};

export default function MentorActionBar({ mentor }: MentorActionBarProps) {
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
            <p className="font-bold text-lg">{mentor.price}</p>
            <p className="text-sm text-gray-600">per {mentor.priceType}</p>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center gap-3 flex-wrap flex-1 justify-end md:justify-center lg:justify-end">
          {/* Book Session Button */}
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            disabled={!mentor.isAvailable}
          >
            <Calendar className="h-4 w-4" />
            Book Session
          </Button>
          
          {/* Connect Now Button */}
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-300 text-blue-700 hover:bg-blue-50 flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Connect Now
          </Button>
        </div>
      </div>
    </div>
  );
}