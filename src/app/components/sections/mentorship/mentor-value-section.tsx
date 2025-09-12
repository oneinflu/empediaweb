"use client";

import { FileText, Users, Compass, MessageSquare, Map } from "lucide-react";
import { Section } from "@/app/components/ui/section";

interface MentorValueSectionProps {
  mentorName?: string;
}

export default function MentorValueSection({ mentorName = "mentor" }: MentorValueSectionProps) {
  const benefits = [
    {
      title: "Resume Review",
      description: `Get expert feedback on your resume to highlight your strengths and stand out to recruiters.`,
      icon: <FileText className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Mock Interview Prep",
      description: `Practice with real interview questions and receive constructive feedback to improve your performance.`,
      icon: <Users className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Career Guidance",
      description: `Get domain-specific advice to navigate your career path and make informed decisions.`,
      icon: <Compass className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Project Feedback",
      description: `Receive detailed feedback on your projects from an industry expert to enhance your portfolio.`,
      icon: <MessageSquare className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Personalized Roadmap",
      description: `Get a customized study plan and career path tailored to your goals and current skill level.`,
      icon: <Map className="w-10 h-10 text-blue-600" />
    }
  ];

  return (
    <Section className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-container px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">What You&apos;ll Get</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book a session with {mentorName} and benefit from personalized guidance
            to accelerate your career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}