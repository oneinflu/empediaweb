"use client";

import { Button } from "@/app/components/ui/button";
import { Section } from "@/app/components/ui/section";
import { BookOpen, Clock,  Star, User, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { CategoryCardProps } from "@/app/data/category-data";
import Link from "next/link";
import Image from "next/image";

type CourseHeroProps = {
  course: CategoryCardProps & {
    level?: string;
    duration?: string;
    format?: string;
    rating?: number;
    enrolledCount?: number;
    description?: string;
    originalPrice?: string;
  };
};

export default function CourseHero({ course }: CourseHeroProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate discount percentage if originalPrice exists
  const getDiscountPercentage = () => {
    if (!course.originalPrice || !course.salary) return null;
    
    const originalPrice = parseFloat(course.originalPrice.replace(/[^0-9]/g, ''));
    const currentPrice = parseFloat(course.salary.replace(/[^0-9]/g, ''));
    
    if (isNaN(originalPrice) || isNaN(currentPrice) || originalPrice <= currentPrice) return null;
    
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  const discountPercentage = getDiscountPercentage();

  return (
    <Section className="pt-8 pb-6">
      <div className="mx-auto max-w-container">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Main info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              {/* Provider logo */}
              <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                {course.logo && (
                  <Image 
                    src={course.logo} 
                    alt={`${course.company} logo`} 
                    className="h-12 w-12 object-contain" 
                  />
                )}
              </div>
              
              {/* Provider name with link */}
              <Link 
                href={`/company/${encodeURIComponent(course.company)}`}
                className="text-lg font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                {course.company}
                <ExternalLink size={16} />
              </Link>
            </div>
            
            {/* Course title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {course.title}
            </h1>
            
            {/* Key details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Level */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-blue-50">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="font-medium">{course.level || "Beginner"}</p>
                </div>
              </div>
              
              {/* Duration */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-purple-50">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{course.duration || "6 Weeks, 40 Hours"}</p>
                </div>
              </div>
              
              {/* Format */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-green-50">
                  <BookOpen className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Format</p>
                  <p className="font-medium">{course.format || "Self-paced"}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-orange-50">
                  <Star className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < (course.rating || 4.5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({course.enrolledCount?.toLocaleString() || "10,000"}+ enrolled)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description preview */}
            {course.description && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">About this course</h2>
                <p className="text-gray-700">{course.description}</p>
              </div>
            )}
          </div>
          
          {/* Right column - Enroll card */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Enroll in this course</h3>
              
              {/* Price section */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">{course.salary}</span>
                  {course.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                  )}
                  {discountPercentage && (
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded">
                      {discountPercentage}% OFF
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">EMI options available</p>
              </div>
              
              {/* Enroll button */}
              <Button 
                className="w-full mb-3 bg-blue-600 hover:bg-blue-700 text-white" 
                size="lg"
              >
                Enroll Now
              </Button>
              
              {/* Talk to mentor button */}
              <Button 
                variant="outline" 
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50" 
                size="lg"
              >
                <User className="mr-2 h-4 w-4" />
                Talk to Mentor
              </Button>
            </div>
          </div>
        </div>
        
        {/* Sticky mobile enroll button */}
        {isSticky && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 flex items-center justify-between">
            <div>
              <p className="font-bold text-lg">{course.salary}</p>
              {course.originalPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>
                  {discountPercentage && (
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded">
                      {discountPercentage}% OFF
                    </span>
                  )}
                </div>
              )}
            </div>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white" 
              size="sm"
            >
              Enroll Now
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}