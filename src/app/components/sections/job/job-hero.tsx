"use client";

import { Button } from "@/app/components/ui/button";
import { Section } from "@/app/components/ui/section";
import { MapPin, Briefcase, DollarSign,  ExternalLink, Building } from "lucide-react";
import { useState, useEffect } from "react";
import { CategoryCardProps } from "@/app/data/category-data";
import Link from "next/link";
import Image from "next/image";

type JobHeroProps = {
  job: CategoryCardProps & {
    experienceLevel?: string;
    jobType?: string;
    description?: string;
  };
};

export default function JobHero({ job }: JobHeroProps) {
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
          {/* Left column - Main info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              {/* Company logo */}
              <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                {job.logo && (
                  <Image 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain" 
                  />
                )}
              </div>
              
              {/* Company name with link */}
              <Link 
                href={`/company/${encodeURIComponent(job.company)}`}
                className="text-lg font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                {job.company}
                <ExternalLink size={16} />
              </Link>
            </div>
            
            {/* Job title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {job.title}
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
                  <p className="font-medium">{job.location}</p>
                </div>
              </div>
              
              {/* Salary Range */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-green-50">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Salary Range</p>
                  <p className="font-medium text-green-600">{job.salary}</p>
                </div>
              </div>
              
              {/* Experience Level */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-purple-50">
                  <Building className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Experience Level</p>
                  <p className="font-medium">{job.experienceLevel || "0-2 years"}</p>
                </div>
              </div>
              
              {/* Job Type */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-orange-50">
                  <Briefcase className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Job Type</p>
                  <p className="font-medium">{job.jobType || "Full-time"}</p>
                </div>
              </div>
            </div>
            
            {/* Description preview */}
            {job.description && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">About this position</h2>
                <p className="text-gray-700">{job.description}</p>
              </div>
            )}
          </div>
          
          {/* Right column - Apply card */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Apply for this position</h3>
              
              {/* Status indicator */}
              <div className="flex items-center gap-2 mb-6">
                <span className={`h-3 w-3 rounded-full ${job.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm">
                  {job.isActive ? "Actively recruiting" : "Not accepting applications"}
                </span>
              </div>
              
              {/* Apply button */}
              <Button 
                disabled={!job.isActive}
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
            <p className="font-medium text-gray-900">{job.title}</p>
            <p className="text-sm text-gray-600">{job.company}</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Apply Now
          </Button>
        </div>
      </div>
    </Section>
  );
}