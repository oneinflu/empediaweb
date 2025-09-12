"use client";

import { Section } from "@/app/components/ui/section";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {  Award, Users, Briefcase, Play, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface MentorSuccessStoriesProps {
  mentorName?: string;
}

export default function MentorSuccessStories({ mentorName = "mentor" }: MentorSuccessStoriesProps) {
  // State for testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Mock data for success stories
  const successStories = [
    {
      id: 1,
      name: "Aman Sharma",
      currentRole: "Software Engineer at TCS",
      avatar: "/avatars/avatar-1.png",
      story: "After mock interviews with this mentor, I cracked my first job at TCS. The feedback and guidance were invaluable for my interview preparation.",
      mentorshipYear: "2023"
    },
    {
      id: 2,
      name: "Priya Patel",
      currentRole: "Data Scientist at Amazon",
      avatar: "/avatars/avatar-2.png",
      story: "The personalized roadmap and project feedback helped me build a strong portfolio that impressed recruiters at Amazon.",
      mentorshipYear: "2022"
    },
    {
      id: 3,
      name: "Rahul Verma",
      currentRole: "ML Engineer at Microsoft",
      avatar: "/avatars/avatar-3.png",
      story: "The mentor's guidance on advanced machine learning concepts and interview preparation was crucial for landing my dream role at Microsoft.",
      mentorshipYear: "2023"
    }
  ];

  // Mock data for video testimonials
  const videoTestimonials = [
    {
      id: 1,
      name: "Neha Gupta",
      role: "Product Manager at Flipkart",
      thumbnail: "/avatars/avatar-4.png",
      videoUrl: "#",
      quote: "The career guidance sessions transformed my approach to product management interviews. I'm now leading a team at Flipkart!"
    },
    {
      id: 2,
      name: "Vikram Singh",
      role: "Frontend Developer at Google",
      thumbnail: "/avatars/avatar-5.png",
      videoUrl: "#",
      quote: "The technical interview preparation was spot on. I received offers from multiple companies and chose Google."
    }
  ];

  // Stats about mentor's impact
  const mentorStats = [
    { label: "Mentees Placed", value: "50+", description: "in top companies" },
    { label: "Success Rate", value: "92%", description: "job placement" },
    { label: "Avg. Salary Hike", value: "40%", description: "after mentorship" }
  ];

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === videoTestimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? videoTestimonials.length - 1 : prev - 1));
  };

  return (
    <Section className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-container px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Success Stories & Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how {mentorName} has helped mentees achieve their career goals
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mentorStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Success Stories</h3>
              <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">
                From Past Mentees
              </Badge>
            </div>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Users className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{story.name}</h4>
                    <div className="flex items-center">
                      <Briefcase className="h-3 w-3 text-blue-600 mr-1" />
                      <p className="text-xs text-blue-600">{story.currentRole}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-3">&quot;{story.story}&quot;</p>
                
                <div className="text-xs text-gray-500">
                  Mentored in {story.mentorshipYear}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Quote className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Video Testimonials</h3>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Video Testimonial Carousel */}
          <div className="relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm overflow-hidden">
            {videoTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`flex flex-col md:flex-row items-center gap-6 transition-opacity duration-300 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'}`}
                style={{ display: index === activeTestimonial ? 'flex' : 'none' }}
              >
                {/* Video Thumbnail */}
                <div className="w-full md:w-1/3 relative rounded-lg overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                      <Play className="h-6 w-6 text-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="w-full md:w-2/3">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-blue-200" />
                  </div>
                  <p className="text-lg text-gray-700 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs text-blue-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}