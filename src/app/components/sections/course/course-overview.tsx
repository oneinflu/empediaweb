/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/app/components/ui/section";

import { Award, BookOpen, Briefcase, CheckCircle, User } from "lucide-react";
import Link from "next/link";
import { CategoryCardProps } from "@/app/data/category-data";

type CourseOverviewProps = {
  course: CategoryCardProps & {
    description?: string;
    shortDescription?: string;
    highlights?: string[];
    prerequisites?: string[];
    instructor?: {
      name: string;
      role: string;
      company?: string;
      avatar: string;
      bio: string;
      studentsCount?: number;
      coursesCount?: number;
      rating?: number;
    };
  };
};

export default function CourseOverview({ course }: CourseOverviewProps) {
  // Mock data for instructor if not provided
  const instructor = course.instructor || {
    name: "Dr. Sarah Johnson",
    role: "Senior Data Scientist",
    company: "Google",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Dr. Sarah Johnson has over 10 years of experience in data science and machine learning. She has worked on projects for Fortune 500 companies and has published several research papers on advanced ML techniques.",
    studentsCount: 15420,
    coursesCount: 8,
    rating: 4.8
  };

  // Mock data for highlights if not provided
  const highlights = course.highlights || [
    "Industry-recognized certificate upon completion",
    "Placement assistance with partner companies",
    "8 hands-on projects with real-world datasets",
    "24/7 mentor support throughout the course",
    "Access to exclusive community forums",
    "Lifetime access to course materials"
  ];

  // Mock data for prerequisites if not provided
  const prerequisites = course.prerequisites || [
    "Basic understanding of programming concepts",
    "Familiarity with mathematical concepts (algebra, statistics)",
    "No prior Python experience required",
    "A computer with internet access"
  ];

  return (
    <Section className="py-10 bg-gray-50">
      <div className="mx-auto max-w-container">
        {/* Short description */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 font-medium mb-4">
            {course.shortDescription || "Kickstart your data science career with hands-on Python projects."}
          </p>
          <p className="text-gray-600">
            {course.description || "This comprehensive course takes you from the basics of Python programming to advanced data science concepts. You'll work on real-world projects, build a strong portfolio, and gain the skills needed to land your dream job in the data science field."}
          </p>
        </div>
        
        {/* Key Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3 shadow-sm"
              >
                <div className="p-2 rounded-full bg-blue-50 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Prerequisites */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>
        
        {/* Instructor / Mentor info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Your Instructor</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Instructor avatar and stats */}
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                  <img 
                    src={instructor.avatar} 
                    alt={instructor.name} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-1">{instructor.name}</h3>
                <p className="text-gray-600 text-center mb-4">{instructor.role}{instructor.company ? ` at ${instructor.company}` : ''}</p>
                
                <div className="grid grid-cols-3 w-full gap-2 text-center">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{instructor.studentsCount?.toLocaleString() || '15K+'}</p>
                    <p className="text-xs text-gray-500">Students</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{instructor.coursesCount || 8}</p>
                    <p className="text-xs text-gray-500">Courses</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{instructor.rating || 4.8}</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                </div>
              </div>
              
              {/* Instructor bio and credentials */}
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold mb-3">About</h4>
                <p className="text-gray-700 mb-4">{instructor.bio}</p>
                
                <h4 className="text-lg font-semibold mb-3">Credentials</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-blue-50 flex-shrink-0">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">PhD in Computer Science</p>
                      <p className="text-sm text-gray-600">Stanford University</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-green-50 flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">10+ Years Industry Experience</p>
                      <p className="text-sm text-gray-600">Google, Microsoft, Amazon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-purple-50 flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Published Author</p>
                      <p className="text-sm text-gray-600">&quot;Python for Data Science&quot; - 50,000+ copies sold</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                  >
                    <User className="h-4 w-4" />
                    View full profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}