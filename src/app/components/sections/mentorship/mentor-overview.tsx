"use client";

import { Section } from "@/app/components/ui/section";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Calendar, Globe, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";

type MentorOverviewProps = {
  mentor: {
    bio: string;
    skills: Array<{
      name: string;
      link: string;
    }>;
    languages: string[];
    availability: Array<{
      date: string;
      slots: Array<{
        time: string;
        isAvailable: boolean;
      }>;
    }>;
  };
};

export default function MentorOverview({ mentor }: MentorOverviewProps) {
  // Get next 5 days for availability preview
  const nextDays = mentor.availability.slice(0, 5);

  return (
    <Section className="py-10">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Main content */}
          <div className="lg:col-span-2">
            {/* Bio Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <div className="prose max-w-none text-gray-700">
                <p>{mentor.bio}</p>
              </div>
            </div>
            
            {/* Key Skills Section */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Key Skills</h2>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill, index) => (
                  <Link href={skill.link} key={index}>
                    <Badge 
                      variant="outline" 
                      className="px-3 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 cursor-pointer transition-colors"
                    >
                      {skill.name}
                    </Badge>
                  </Link>
                ))}
              </div>
              
              <div className="text-sm text-gray-600">
                <p>Click on any skill to explore related jobs and courses</p>
              </div>
            </div>
            
            {/* Languages Section */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Languages Spoken</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {mentor.languages.map((language, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="px-3 py-1"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Availability */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Availability</h2>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-4">Next available slots:</p>
                
                {/* Calendar preview */}
                <div className="space-y-4">
                  {nextDays.map((day, dayIndex) => (
                    <div key={dayIndex} className="border-b border-gray-100 pb-3 last:border-0">
                      <p className="font-medium text-gray-900 mb-2">{day.date}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.slots.map((slot, slotIndex) => (
                          <Button
                            key={slotIndex}
                            variant={slot.isAvailable ? "outline" : "ghost"}
                            size="sm"
                            disabled={!slot.isAvailable}
                            className={slot.isAvailable ? 
                              "border-blue-200 text-blue-700 hover:bg-blue-50" : 
                              "text-gray-400 cursor-not-allowed"}
                          >
                            {slot.time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 flex items-center justify-center gap-1" 
              >
                View Full Calendar
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}