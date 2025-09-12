/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/app/components/ui/section";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps } from "@/app/data/category-data";
import Link from "next/link";


type JobOverviewProps = {
  job: CategoryCardProps & {
    experienceLevel?: string;
    jobType?: string;
    description?: string;
    workMode?: string;
  };
};

export default function JobOverview({ job }: JobOverviewProps) {
  // Mock data for the component (in a real app, this would come from the API)
  const mockData = {
    summary: job.description || "Join our team and work on exciting projects that impact millions of users. You'll collaborate with experienced professionals, participate in code reviews, and gain valuable industry experience.",
    responsibilities: [
      "Design, develop, and maintain software applications using modern technologies",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Ensure the performance, quality, and responsiveness of applications",
      "Identify and correct bottlenecks and fix bugs",
      "Help maintain code quality, organization, and automatization"
    ],
    requiredSkills: [
      "JavaScript",
      "React",
      "Node.js",
      "HTML/CSS",
      "Git",
      "Problem Solving"
    ],
    preferredQualifications: [
      "Bachelor's degree in Computer Science or related field",
      "1-2 years of experience with modern JavaScript frameworks",
      "Experience with RESTful APIs and microservices architecture",
      "Knowledge of cloud services (AWS, Azure, or GCP)",
      "Agile development methodologies certification"
    ],
    techStack: [
      { name: "React", logo: "https://logo.clearbit.com/reactjs.org" },
      { name: "Node.js", logo: "https://logo.clearbit.com/nodejs.org" },
      { name: "MongoDB", logo: "https://logo.clearbit.com/mongodb.com" },
      { name: "AWS", logo: "https://logo.clearbit.com/aws.amazon.com" },
      { name: "Git", logo: "https://logo.clearbit.com/github.com" },
    ],
    workMode: job.workMode || "Hybrid (3 days in office)"
  };

  return (
    <Section className="py-8">
      <div className="mx-auto max-w-container">
        {/* About the Role */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h2>
          <div className="space-y-4">
            <p className="text-gray-700">{mockData.summary}</p>
          </div>
        </div>
        
        {/* Responsibilities */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {mockData.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Required Skills */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-2">
            {mockData.requiredSkills.map((skill, index) => (
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
            Want to develop these skills? 
            <Link href="/courses" className="text-blue-600 hover:underline ml-1">
              Explore relevant courses
            </Link> or 
            <Link href="/mentorships" className="text-blue-600 hover:underline ml-1">
              find a mentor
            </Link>
          </p>
        </div>
        
        {/* Preferred Qualifications */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preferred Qualifications</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {mockData.preferredQualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Tools & Tech Stack */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools & Tech Stack</h2>
          <div className="flex flex-wrap gap-6">
            {mockData.techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden mb-2">
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`} 
                    className="h-10 w-10 object-contain" 
                  />
                </div>
                <span className="text-sm text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Work Mode */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Work Mode</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 inline-block">
            <span className="font-medium text-gray-800">{mockData.workMode}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}