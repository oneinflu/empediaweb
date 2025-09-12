"use client";

import { Section } from "@/app/components/ui/section";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps } from "@/app/data/category-data";
import Link from "next/link";

type InternshipOverviewProps = {
  internship: CategoryCardProps & {
    duration?: string;
    deadline?: string;
    description?: string;
    skills?: string[];
    eligibility?: string[];
    perks?: string[];
  };
};

export default function InternshipOverview({ internship }: InternshipOverviewProps) {
  // Mock data for the component (in a real app, this would come from the API)
  const mockData = {
    description: internship.description || "Join our team as a Software Engineering Intern and work on real-world projects that impact millions of users. You'll collaborate with experienced engineers, participate in code reviews, and gain valuable industry experience.",
    responsibilities: [
      "Develop and maintain web applications using modern JavaScript frameworks",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and contribute to team knowledge sharing"
    ],
    projects: [
      "Build and implement new features for our core product",
      "Optimize existing codebase for better performance",
      "Develop internal tools to improve team productivity"
    ],
    skills: internship.skills || [
      "JavaScript",
      "React",
      "Node.js",
      "HTML/CSS",
      "Git",
      "Problem Solving"
    ],
    eligibility: internship.eligibility || [
      "Currently pursuing a Bachelor's or Master's degree in Computer Science or related field",
      "Strong understanding of web technologies and programming concepts",
      "Familiarity with modern JavaScript frameworks (React, Vue, Angular)",
      "Good communication and teamwork skills"
    ],
    perks: internship.perks || [
      "Competitive stipend",
      "Flexible working hours",
      "Certificate of completion",
      "Pre-placement offer opportunity",
      "Mentorship from industry experts",
      "Networking opportunities"
    ]
  };

  return (
    <Section className="py-8">
      <div className="mx-auto max-w-container">
        {/* Internship Description */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Internship Description</h2>
          <div className="space-y-4">
            <p className="text-gray-700">{mockData.description}</p>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsibilities:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {mockData.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Projects You&apos;ll Work On:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {mockData.projects.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Skills Required */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills Required</h2>
          <div className="flex flex-wrap gap-2">
            {mockData.skills.map((skill, index) => (
              <Link href={`/courses?skill=${encodeURIComponent(skill)}`} key={index}>
                <Badge 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-blue-100 transition-colors"
                >
                  {skill}
                </Badge>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Don&apos;t have these skills yet? 
            <Link href="/courses" className="text-blue-600 hover:underline ml-1">
              Explore relevant courses
            </Link> or 
            <Link href="/mentorships" className="text-blue-600 hover:underline ml-1">
              find a mentor
            </Link>
          </p>
        </div>
        
        {/* Eligibility */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {mockData.eligibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Perks & Benefits */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Perks & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockData.perks.map((perk, index) => (
              <div 
                key={index} 
                className="bg-gray-50 border border-gray-100 rounded-lg p-4 flex items-center"
              >
                <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}