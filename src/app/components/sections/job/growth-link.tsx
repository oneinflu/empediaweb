"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps } from "@/app/data/category-data";
import Link from "next/link";
import { BookOpen, Users, TrendingUp, ArrowRight, Award, Zap, CheckCircle, Briefcase } from "lucide-react";
import Image from "next/image";

type JobGrowthLinkProps = {
  job: CategoryCardProps & {
    experienceLevel?: string;
    jobType?: string;
    skills?: string[];
  };
};

export default function JobGrowthLink({ job }: JobGrowthLinkProps) {
  // Mock data for recommended courses based on job skills
  const recommendedCourses = [
    {
      title: "React JS Beginner Course",
      company: "Udemy",
      level: "Beginner",
      duration: "15 hours",
      price: "₹599",
      logo: "https://logo.clearbit.com/udemy.com",
      link: "/courses/react-js-beginner"
    },
    {
      title: "Advanced Frontend Development",
      company: "Coursera",
      level: "Intermediate",
      duration: "25 hours",
      price: "₹2,499",
      logo: "https://logo.clearbit.com/coursera.org",
      link: "/courses/advanced-frontend"
    },
    {
      title: "System Design Basics",
      company: "Educative",
      level: "Advanced",
      duration: "30 hours",
      price: "₹3,999",
      logo: "https://logo.clearbit.com/educative.io",
      link: "/courses/system-design-basics"
    }
  ];

  // Mock data for recommended mentors
  const recommendedMentors = [
    {
      name: "Vikram Mehta",
      role: "Ex-Google Engineer",
      experience: "12+ years",
      price: "₹3,499 /session",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      link: "/mentorships/vikram-mehta",
      specialization: "Mock Interviews & Resume Review"
    },
    {
      name: "Ananya Patel",
      role: "Senior Developer at Amazon",
      experience: "8+ years",
      price: "₹2,999 /month",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      link: "/mentorships/ananya-patel",
      specialization: "Career Guidance & Technical Mentorship"
    }
  ];

  // Mock data for recommended internships (for candidates lacking experience)
  const recommendedInternships = [
    {
      title: "Frontend Developer Intern",
      company: "TechStart",
      duration: "3 months",
      stipend: "₹15,000 /month",
      logo: "https://via.placeholder.com/150",
      link: "/internships/frontend-developer-techstart"
    },
    {
      title: "Web Development Intern",
      company: "CodeCraft",
      duration: "4 months",
      stipend: "₹20,000 /month",
      logo: "https://via.placeholder.com/150",
      link: "/internships/web-development-codecraft"
    }
  ];

  // Mock data for career path
  const careerPath = [
    {
      title: "Internship: Web Development Intern",
      company: "Various Tech Companies",
      duration: "3-6 months",
      type: "internship"
    },
    {
      title: "Course: Advanced Frontend Development",
      company: "Coursera",
      duration: "2 months",
      type: "course"
    },
    {
      title: "Current: Software Developer",
      company: job.company,
      salary: job.salary,
      type: "job"
    },
    {
      title: "Future: Senior Software Engineer",
      company: "Top Tech Companies",
      salary: "₹15-25 LPA",
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
          <p className="text-gray-600 mb-6">Upskill yourself with these courses to accelerate your career growth</p>
          
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
                        <Image src={course.logo} alt={course.company} width={24} height={24} className="h-6 w-6 object-contain" />
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
            <h3 className="text-xl font-semibold text-gray-900">Mentorship Suggestions</h3>
          </div>
          <p className="text-gray-600 mb-6">Get mock interview guidance and career advice from industry experts</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedMentors.map((mentor, index) => (
              <Link href={mentor.link} key={index} className="block">
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-blue-100">
                    <Image src={mentor.avatar} alt={mentor.name} width={64} height={64} className="h-full w-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{mentor.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{mentor.role}</p>
                    <p className="text-xs text-gray-700 mt-1">{mentor.specialization}</p>
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
        
        {/* Internship Prep - For candidates lacking experience */}
        {job.experienceLevel === "0-2 years" && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Internship Prep</h3>
            </div>
            <p className="text-gray-600 mb-6">Apply to these internships first to gain practical skills needed for this job</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedInternships.map((internship, index) => (
                <Link href={internship.link} key={index} className="block">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                      <Image src={internship.logo} alt={internship.company} width={32} height={32} className="h-8 w-8 object-contain" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{internship.title}</h4>
                      <p className="text-sm text-gray-600">{internship.company}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <span>{internship.duration}</span>
                        <span>•</span>
                        <span className="text-green-600">{internship.stipend}</span>
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
                View more internships
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Career Path Timeline */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Career Path Timeline</h3>
          </div>
          <p className="text-gray-600 mb-6">Your potential career progression roadmap</p>
          
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
                    {index === 2 && (
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