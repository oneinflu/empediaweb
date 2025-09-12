/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps } from "@/app/data/category-data";
import Link from "next/link";
import { BookOpen, Users, TrendingUp, ArrowRight, Award, Zap, CheckCircle } from "lucide-react";

type GrowthLinkProps = {
  internship: CategoryCardProps & {
    skills?: string[];
  };
};

export default function GrowthLink({ internship }: GrowthLinkProps) {
  // Mock data for recommended courses based on internship skills
  const recommendedCourses = [
    {
      title: "JavaScript Fundamentals",
      company: "Udemy",
      level: "Beginner",
      duration: "10 hours",
      price: "₹499",
      logo: "https://logo.clearbit.com/udemy.com",
      link: "/courses/javascript-fundamentals"
    },
    {
      title: "React.js Advanced Concepts",
      company: "Coursera",
      level: "Intermediate",
      duration: "20 hours",
      price: "₹1,999",
      logo: "https://logo.clearbit.com/coursera.org",
      link: "/courses/react-advanced-concepts"
    },
    {
      title: "Full Stack Development Masterclass",
      company: "Skillshare",
      level: "Advanced",
      duration: "40 hours",
      price: "₹3,499",
      logo: "https://logo.clearbit.com/skillshare.com",
      link: "/courses/full-stack-masterclass"
    }
  ];

  // Mock data for recommended mentors
  const recommendedMentors = [
    {
      name: "Priya Sharma",
      role: "Ex-Google Engineering Manager",
      experience: "10+ years",
      price: "₹2,999 /month",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      link: "/mentorships/priya-sharma"
    },
    {
      name: "Rahul Verma",
      role: "Senior Developer at Microsoft",
      experience: "8+ years",
      price: "₹2,499 /month",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      link: "/mentorships/rahul-verma"
    }
  ];

  // Mock data for career path
  const careerPath = [
    {
      title: "Current: Software Engineering Intern",
      company: internship.company,
      duration: "3-6 months",
      type: "internship"
    },
    {
      title: "Next: Full Stack Development Course",
      company: "Coursera",
      duration: "2 months",
      type: "course"
    },
    {
      title: "Future: Junior Software Engineer",
      company: "Various Tech Companies",
      salary: "₹5-8 LPA",
      type: "job"
    },
    {
      title: "Future: Senior Software Engineer",
      company: "Top Tech Companies",
      salary: "₹12-20 LPA",
      type: "job"
    }
  ];

  return (
    <Section className="py-8 bg-gray-50">
      <div className="mx-auto max-w-container">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Growth Link</h2>
          <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">
            Empedia Exclusive
          </Badge>
        </div>

        {/* Recommended Courses Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Recommended Courses</h3>
          </div>
          <p className="text-gray-600 mb-6">Complete these courses to increase your chances of selection and performance</p>
          
          {/* Progressive Ladder UI */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[50%] top-8 h-[calc(100%-16px)] w-0.5 bg-gray-200 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
              {recommendedCourses.map((course, index) => (
                <Link href={course.link} key={index} className="block">
                  <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <Badge 
                        variant={index === 0 ? "default" : index === 1 ? "secondary" : "outline"}
                        className={`${index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500 text-white'}`}
                      >
                        {course.level}
                      </Badge>
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img src={course.logo} alt={course.company} className="h-6 w-6 object-contain" />
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-1">{course.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{course.company}</p>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.price}</span>
                    </div>
                    
                    {index < recommendedCourses.length - 1 && (
                      <div className="hidden md:flex justify-center mt-4">
                        <ArrowRight className="h-5 w-5 text-blue-500" />
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">Complete this course to unlock similar internships/jobs</p>
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-500 hover:bg-blue-50">
              View all recommended courses
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mentorship Suggestion */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Mentorship Suggestion</h3>
          </div>
          <p className="text-gray-600 mb-6">Get guidance from industry experts in the same field</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedMentors.map((mentor, index) => (
              <Link href={mentor.link} key={index} className="block">
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-blue-100">
                    <img src={mentor.avatar} alt={mentor.name} className="h-full w-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{mentor.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{mentor.role}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <span>{mentor.experience}</span>
                      <span>•</span>
                      <span>{mentor.price}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-50">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-500 hover:bg-blue-50">
              Find more mentors
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Career Path Mapping */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Career Path Mapping</h3>
          </div>
          <p className="text-gray-600 mb-6">Your potential career progression timeline</p>
          
          {/* Timeline style */}
          <div className="relative pl-8 border-l-2 border-blue-200">
            {careerPath.map((step, index) => (
              <div key={index} className="mb-8 relative">
                {/* Timeline dot */}
                <div className={`absolute left-[-25px] h-12 w-12 rounded-full flex items-center justify-center ${step.type === 'internship' ? 'bg-blue-100' : step.type === 'course' ? 'bg-green-100' : 'bg-purple-100'}`}>
                  {step.type === 'internship' && <Zap className="h-6 w-6 text-blue-600" />}
                  {step.type === 'course' && <BookOpen className="h-6 w-6 text-green-600" />}
                  {step.type === 'job' && <Award className="h-6 w-6 text-purple-600" />}
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm ml-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.company}</p>
                    </div>
                    {index === 0 && (
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> Current
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                    {step.duration && <span>{step.duration}</span>}
                    {step.salary && <span>{step.salary}</span>}
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