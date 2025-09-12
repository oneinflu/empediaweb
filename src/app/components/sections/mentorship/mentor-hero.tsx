/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/app/components/ui/button";
import { Section } from "@/app/components/ui/section";
import { Star, Briefcase, Clock, Award } from "lucide-react";
import { useState, useEffect } from "react";


type MentorHeroProps = {
  mentor: {
    id: string;
    name: string;
    role: string;
    company?: string;
    avatar: string;
    domain: string;
    experience: string;
    rating: number;
    reviewCount: number;
    price: string;
    priceType: "session" | "month" | "package";
    isAvailable: boolean;
  };
};

export default function MentorHero({ mentor }: MentorHeroProps) {
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className="pt-8 pb-6">
      <div className="mx-auto max-w-container">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Mentor info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
              {/* Mentor avatar */}
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100">
                <img 
                  src={mentor.avatar} 
                  alt={mentor.name} 
                  className="h-full w-full object-cover" 
                />
              </div>
              
              {/* Mentor basic info */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{mentor.name}</h1>
                <p className="text-xl text-blue-600 mb-2">
                  {mentor.role}{mentor.company ? ` at ${mentor.company}` : ''}
                </p>
                
                {/* Domain/Expertise */}
                <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {mentor.domain}
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < mentor.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({mentor.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>
            
            {/* Key details grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Experience */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-blue-50">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="font-medium">{mentor.experience}</p>
                </div>
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-green-50">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">{mentor.price}/{mentor.priceType}</p>
                </div>
              </div>
              
              {/* Availability */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-purple-50">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="font-medium flex items-center gap-1">
                    <span className={`h-2 w-2 rounded-full ${mentor.isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    {mentor.isAvailable ? "Available for booking" : "Currently unavailable"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Book session card */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Book a session</h3>
              
              {/* Price section */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">{mentor.price}</span>
                  <span className="text-gray-600">per {mentor.priceType}</span>
                </div>
              </div>
              
              {/* Book session button */}
              <Button 
                disabled={!mentor.isAvailable}
                className="w-full mb-3 bg-blue-600 hover:bg-blue-700 text-white" 
                size="lg"
              >
                Book Session
              </Button>
              
              {/* Connect button */}
              <Button 
                variant="outline" 
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50" 
                size="lg"
              >
                Connect Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky mobile book button */}
      {isSticky && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 flex items-center justify-between">
          <div>
            <p className="font-bold text-lg">{mentor.price}</p>
            <p className="text-sm text-gray-600">per {mentor.priceType}</p>
          </div>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white" 
            size="sm"
            disabled={!mentor.isAvailable}
          >
            Book Session
          </Button>
        </div>
      )}
    </Section>
  );
}