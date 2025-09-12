/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/app/components/ui/button";
import { Section } from "@/app/components/ui/section";
import { MapPin, Calendar, DollarSign, Clock, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { CategoryCardProps } from "@/app/data/category-data";

type InternshipHeroProps = {
  internship: CategoryCardProps & {
    duration?: string;
    deadline?: string;
    description?: string;
  };
};

export default function InternshipHero({ internship }: InternshipHeroProps) {
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

  // Calculate days remaining until deadline
  const getDaysRemaining = () => {
    if (!internship.deadline) return null;
    
    const deadline = new Date(internship.deadline);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  const daysRemaining = getDaysRemaining();
  const isUrgent = daysRemaining !== null && daysRemaining <= 7;

  return (
    <Section className="pt-8 pb-6">
      <div className="mx-auto max-w-container">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Main info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              {/* Company logo */}
              <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                {internship.logo && (
                  <img 
                    src={internship.logo} 
                    alt={`${internship.company} logo`} 
                    className="h-12 w-12 object-contain" 
                  />
                )}
              </div>
              
              {/* Company name with link */}
              <a 
                href={`/company/${encodeURIComponent(internship.company)}`}
                className="text-lg font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                {internship.company}
                <ExternalLink size={16} />
              </a>
            </div>
            
            {/* Internship title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {internship.title}
            </h1>
            
            {/* Key details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Location */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-blue-50">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{internship.location}</p>
                </div>
              </div>
              
              {/* Stipend */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-green-50">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Stipend</p>
                  <p className="font-medium">{internship.salary}</p>
                </div>
              </div>
              
              {/* Duration */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-purple-50">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{internship.duration || "3 Months, Full-Time"}</p>
                </div>
              </div>
              
              {/* Application Deadline */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-orange-50">
                  <Calendar className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Application Deadline</p>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{internship.deadline || "30 Nov 2023"}</p>
                    {isUrgent && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                        {daysRemaining === 0 ? "Last day" : `${daysRemaining} days left`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description preview */}
            {internship.description && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">About this internship</h2>
                <p className="text-gray-700">{internship.description}</p>
              </div>
            )}
          </div>
          
          {/* Right column - Apply card */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Apply for this internship</h3>
              
              {/* Status indicator */}
              <div className="flex items-center gap-2 mb-6">
                <span className={`h-3 w-3 rounded-full ${internship.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm">
                  {internship.isActive ? "Actively recruiting" : "Not accepting applications"}
                </span>
              </div>
              
              {/* Apply button */}
              <Button 
                disabled={!internship.isActive}
                className="w-full bg-blue-600 hover:bg-blue-700 mb-4"
              >
                Apply Now
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Easy application process. No registration required.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky apply button for mobile */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden transform transition-transform duration-300 ${isSticky ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="mx-auto max-w-container flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">{internship.title}</p>
            <p className="text-sm text-gray-600">{internship.company}</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Apply Now
          </Button>
        </div>
      </div>
    </Section>
  );
}