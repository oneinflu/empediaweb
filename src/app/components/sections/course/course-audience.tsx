"use client";

import { Section } from "@/app/components/ui/section";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps } from "@/app/data/category-data";
import { CheckCircle, Target, TrendingUp } from "lucide-react";
import Image from "next/image";

type CourseAudienceProps = {
  course: CategoryCardProps & {
    level?: string;
    targetAudience?: {
      personas: string[];
      outcomes: string[];
    };
  };
};

export default function CourseAudience({ course }: CourseAudienceProps) {
  // Mock data for target audience if not provided
  const targetAudience = course.targetAudience || {
    personas: [
      "College students pursuing Computer Science or related fields",
      "Recent graduates looking to build practical data skills",
      "Working professionals wanting to transition to data-focused roles",
      "Career switchers with basic programming knowledge"
    ],
    outcomes: [
      "Land your first Data Analyst job in 3-6 months",
      "Build a portfolio of 5+ real-world data projects",
      "Master Python for data analysis and visualization",
      "Gain confidence in technical interviews"
    ]
  };

  return (
    <Section className="py-12 bg-white">
      <div className="mx-auto max-w-container">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Who This Course Is For</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Target Personas */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Target Personas</h3>
            </div>

            <div className="space-y-4">
              {targetAudience.personas.map((persona, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">{persona}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Persona Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Students</Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Freshers</Badge>
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Working Professionals</Badge>
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">Career Switchers</Badge>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Expected Outcomes</h3>
            </div>

            <div className="space-y-4">
              {targetAudience.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Indicator */}
            <div className="mt-6 relative pt-4">
              <div className="absolute left-0 right-0 h-1 bg-gray-200 rounded-full">
                <div className="absolute left-0 h-1 w-3/4 bg-blue-500 rounded-full"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 pt-2">
                <span>Start</span>
                <span>3 Months</span>
                <span>6 Months</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial/Success Story */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-blue-200 flex-shrink-0">
              <Image 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Student" 
                className="h-full w-full object-cover" 
              />
            </div>
            <div>
              <p className="text-gray-700 italic">&quot;After completing this course, I was able to transition from a marketing role to a junior data analyst position within 4 months. The practical projects and mentor guidance were game-changers for my career.&quot;</p>
              <p className="text-blue-700 font-medium mt-2">Rahul M. — Former Marketing Associate, now Data Analyst at TechCorp</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}