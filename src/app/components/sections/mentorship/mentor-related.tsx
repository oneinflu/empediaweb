"use client";

import { useState } from "react";
import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import Image from "next/image";

interface MentorRelatedProps {
  mentorDomain?: string;
}

export default function MentorRelated({ mentorDomain = "AI & Machine Learning" }: MentorRelatedProps) {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  // Filter options
  const domainFilters = ["All", "AI & Machine Learning", "Web Development", "Data Science", "Cloud Computing"];
  const experienceLevels = ["All", "0-3 years", "3-5 years", "5-10 years", "10+ years"];
  const languageFilters = ["All", "English", "Hindi", "Tamil", "Telugu"];
  const priceFilters = ["All", "Under ₹1,000", "₹1,000-₹2,000", "₹2,000-₹3,000", "₹3,000+"];
  
  // State for current filter category
  const [filterCategory, setFilterCategory] = useState<string>("Domain");
  
  // Get current filters based on category
  const getCurrentFilters = () => {
    switch(filterCategory) {
      case "Domain":
        return domainFilters;
      case "Experience Level":
        return experienceLevels;
      case "Language":
        return languageFilters;
      case "Price":
        return priceFilters;
      default:
        return domainFilters;
    }
  };

  // Mock data for related mentors
  const relatedMentors = [
    {
      id: "1",
      name: "Dr. Priya Sharma",
      role: "ML Engineer",
      company: "Microsoft",
      domain: "AI & Machine Learning",
      experience: "5+ years",
      languages: ["English", "Hindi"],
      price: "₹2,499/session",
      rating: 4.7,
      reviewCount: 89,
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      link: "/mentorships/priya-sharma"
    },
    {
      id: "2",
      name: "Vikram Mehta",
      role: "Senior Data Scientist",
      company: "Amazon",
      domain: "AI & Machine Learning",
      experience: "8+ years",
      languages: ["English", "Hindi", "Punjabi"],
      price: "₹3,299/session",
      rating: 4.9,
      reviewCount: 132,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      link: "/mentorships/vikram-mehta"
    },
    {
      id: "3",
      name: "Ananya Desai",
      role: "AI Research Scientist",
      company: "Google",
      domain: "AI & Machine Learning",
      experience: "6+ years",
      languages: ["English", "Gujarati"],
      price: "₹2,899/session",
      rating: 4.8,
      reviewCount: 104,
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      link: "/mentorships/ananya-desai"
    },
    {
      id: "4",
      name: "Arjun Reddy",
      role: "Deep Learning Engineer",
      company: "NVIDIA",
      domain: "AI & Machine Learning",
      experience: "4+ years",
      languages: ["English", "Telugu", "Tamil"],
      price: "₹2,199/session",
      rating: 4.6,
      reviewCount: 78,
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      link: "/mentorships/arjun-reddy"
    },
    {
      id: "5",
      name: "Neha Gupta",
      role: "NLP Specialist",
      company: "IBM Research",
      domain: "AI & Machine Learning",
      experience: "7+ years",
      languages: ["English", "Hindi"],
      price: "₹2,799/session",
      rating: 4.7,
      reviewCount: 91,
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      link: "/mentorships/neha-gupta"
    }
  ];

  return (
    <Section className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-container px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Related Mentors</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore other mentors in {mentorDomain} who can help accelerate your career growth
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-blue-600 border-blue-500 hover:bg-blue-50 flex items-center gap-1"
              onClick={() => setFilterCategory("Domain")}
            >
              <Filter className="h-4 w-4" />
              Domain
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-blue-600 border-blue-500 hover:bg-blue-50 flex items-center gap-1"
              onClick={() => setFilterCategory("Experience Level")}
            >
              <Filter className="h-4 w-4" />
              Experience
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-blue-600 border-blue-500 hover:bg-blue-50 flex items-center gap-1"
              onClick={() => setFilterCategory("Language")}
            >
              <Filter className="h-4 w-4" />
              Language
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-blue-600 border-blue-500 hover:bg-blue-50 flex items-center gap-1"
              onClick={() => setFilterCategory("Price")}
            >
              <Filter className="h-4 w-4" />
              Price
            </Button>
          </div>
        </div>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          <div className="text-sm font-medium text-gray-700 mr-2 flex items-center">
            {filterCategory}:
          </div>
          {getCurrentFilters().map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === filter 
                ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'}`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Mentors Carousel */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {relatedMentors.map((mentor) => (
              <CarouselItem key={mentor.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link href={mentor.link} className="block">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-blue-100">
                        <Image src={mentor.avatar} alt={mentor.name} width={64} height={64} className="h-full w-full object-cover" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{mentor.name}</h4>
                        <p className="text-sm text-blue-600 font-medium">{mentor.role} at {mentor.company}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium">
                        {mentor.domain}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                        {mentor.experience}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                        {mentor.languages[0]}{mentor.languages.length > 1 ? ` +${mentor.languages.length - 1}` : ''}
                      </span>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-medium">{mentor.rating}</span>
                        <span className="text-gray-500 text-sm">({mentor.reviewCount})</span>
                      </div>
                      <span className="text-green-600 font-medium">{mentor.price}</span>
                    </div>
                    
                    <Button 
                      className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white" 
                      size="sm"
                    >
                      View Profile
                    </Button>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="static h-8 w-8 rounded-full" />
            <CarouselNext className="static h-8 w-8 rounded-full" />
          </div>
        </Carousel>
        
        <div className="mt-8 text-center">
          <Button variant="outline" size="sm" className="text-blue-600 border-blue-500 hover:bg-blue-50">
            View all mentors in {mentorDomain}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}