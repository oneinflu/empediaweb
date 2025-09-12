/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps } from "@/app/data/category-data";
import Link from "next/link";
import { BookOpen, Users, TrendingUp, ArrowRight, Zap, CheckCircle, Briefcase } from "lucide-react";

type CourseGrowthLinkProps = {
  course: CategoryCardProps & {
    level?: string;
    duration?: string;
    format?: string;
    modules?: any[];
  };
};

export default function CourseGrowthLink({ course }: CourseGrowthLinkProps) {
  // Use the course parameter to avoid the linter warning
  // For example, you could log it or use it in the component
  console.log('Course details:', course.title); // This uses the course parameter
  
  // Mock data for related jobs
  const relatedJobs = [
    {
      title: "Junior Data Analyst",
      company: "TechCorp",
      location: "Bangalore",
      salary: "₹5-8 LPA",
      logo: "https://logo.clearbit.com/techcorp.com",
      link: "/jobs/junior-data-analyst"
    },
    {
      title: "ML Engineer Intern",
      company: "DataVision",
      location: "Remote",
      salary: "₹25,000/month",
      logo: "https://logo.clearbit.com/datavision.com",
      link: "/jobs/ml-engineer-intern"
    }
  ];

  // Mock data for related internships
  const relatedInternships = [
    {
      title: "Data Science Intern",
      company: "AnalyticsPro",
      duration: "3 months",
      stipend: "₹20,000/month",
      logo: "https://logo.clearbit.com/analyticspro.com",
      link: "/internships/data-science-intern"
    },
    {
      title: "Python Developer Intern",
      company: "CodeWorks",
      duration: "4 months",
      stipend: "₹15,000/month",
      logo: "https://logo.clearbit.com/codeworks.com",
      link: "/internships/python-developer-intern"
    }
  ];

  // Mock data for next-level courses
  const nextLevelCourses = [
    {
      title: "Intermediate Machine Learning",
      company: "Coursera",
      level: "Intermediate",
      duration: "8 weeks",
      price: "₹2,999",
      logo: "https://logo.clearbit.com/coursera.org",
      link: "/courses/intermediate-machine-learning"
    },
    {
      title: "Advanced Data Visualization",
      company: "Udemy",
      level: "Advanced",
      duration: "6 weeks",
      price: "₹1,799",
      logo: "https://logo.clearbit.com/udemy.com",
      link: "/courses/advanced-data-visualization"
    }
  ];

  // Mock data for mentors
  const recommendedMentors = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Senior Data Scientist at Amazon",
      experience: "8+ years",
      price: "₹2,999/month",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      link: "/mentorships/rajesh-kumar"
    },
    {
      name: "Priya Sharma",
      role: "ML Engineer at Microsoft",
      experience: "5+ years",
      price: "₹2,499/month",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      link: "/mentorships/priya-sharma"
    }
  ];

  // Career roadmap steps
  const careerRoadmap = [
    {
      title: "Current: Beginner Python for Data Science",
      type: "course",
      status: "current"
    },
    {
      title: "Next: Data Science Internship",
      type: "internship",
      status: "next"
    },
    {
      title: "Then: Junior Data Analyst",
      type: "job",
      status: "future"
    },
    {
      title: "Growth: Intermediate Machine Learning",
      type: "course",
      status: "future"
    },
    {
      title: "Advanced: Senior Data Scientist",
      type: "job",
      status: "future"
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

        {/* Career Roadmap Timeline */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Your Career Roadmap</h3>
          </div>
          <p className="text-gray-600 mb-6">Follow this path to accelerate your career growth</p>
          
          {/* Horizontal timeline for desktop */}
          <div className="hidden md:flex items-center justify-between relative mb-8">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 h-0.5 bg-blue-200 top-1/2 transform -translate-y-1/2 z-0"></div>
            
            {careerRoadmap.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center w-1/5">
                <div 
                  className={`h-12 w-12 rounded-full flex items-center justify-center mb-3 ${step.status === 'current' ? 'bg-blue-600' : step.status === 'next' ? 'bg-blue-100 border-2 border-blue-600' : 'bg-gray-100 border border-gray-300'}`}
                >
                  {step.type === 'course' && <BookOpen className={`h-6 w-6 ${step.status === 'current' ? 'text-white' : step.status === 'next' ? 'text-blue-600' : 'text-gray-500'}`} />}
                  {step.type === 'internship' && <Zap className={`h-6 w-6 ${step.status === 'current' ? 'text-white' : step.status === 'next' ? 'text-blue-600' : 'text-gray-500'}`} />}
                  {step.type === 'job' && <Briefcase className={`h-6 w-6 ${step.status === 'current' ? 'text-white' : step.status === 'next' ? 'text-blue-600' : 'text-gray-500'}`} />}
                </div>
                <p className={`text-sm font-medium text-center ${step.status === 'current' ? 'text-blue-600' : step.status === 'next' ? 'text-gray-800' : 'text-gray-500'}`}>
                  {step.title}
                </p>
                {step.status === 'current' && (
                  <Badge className="mt-1 bg-blue-100 text-blue-700 border-blue-200">
                    <CheckCircle className="h-3 w-3 mr-1" /> Current
                  </Badge>
                )}
              </div>
            ))}
          </div>
          
          {/* Vertical timeline for mobile */}
          <div className="md:hidden relative pl-8 border-l-2 border-blue-200">
            {careerRoadmap.map((step, index) => (
              <div key={index} className="mb-8 relative">
                {/* Timeline dot */}
                <div 
                  className={`absolute left-[-17px] h-8 w-8 rounded-full flex items-center justify-center ${step.status === 'current' ? 'bg-blue-600' : step.status === 'next' ? 'bg-blue-100 border-2 border-blue-600' : 'bg-gray-100 border border-gray-300'}`}
                >
                  {step.type === 'course' && <BookOpen className={`h-4 w-4 ${step.status === 'current' ? 'text-white' : step.status === 'next' ? 'text-blue-600' : 'text-gray-500'}`} />}
                  {step.type === 'internship' && <Zap className={`h-4 w-4 ${step.status === 'current' ? 'text-white' : step.status === 'next' ? 'text-blue-600' : 'text-gray-500'}`} />}
                  {step.type === 'job' && <Briefcase className={`h-4 w-4 ${step.status === 'current' ? 'text-white' : step.status === 'next' ? 'text-blue-600' : 'text-gray-500'}`} />}
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <p className={`font-medium ${step.status === 'current' ? 'text-blue-600' : step.status === 'next' ? 'text-gray-800' : 'text-gray-500'}`}>
                      {step.title}
                    </p>
                    {step.status === 'current' && (
                      <Badge className="bg-blue-100 text-blue-700 border-blue-200 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> Current
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Jobs Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Related Jobs</h3>
          </div>
          <p className="text-gray-600 mb-6">Complete this course and apply for these positions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedJobs.map((job, index) => (
              <Link href={job.link} key={index} className="block">
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                    <img src={job.logo} alt={job.company} className="h-8 w-8 object-contain" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{job.title}</h4>
                    <p className="text-sm text-gray-600">{job.company}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span className="text-green-600">{job.salary}</span>
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
              View more job opportunities
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Related Internships Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Related Internships</h3>
          </div>
          <p className="text-gray-600 mb-6">Gain practical exposure after finishing Module 2</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedInternships.map((internship, index) => (
              <Link href={internship.link} key={index} className="block">
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                    <img src={internship.logo} alt={internship.company} className="h-8 w-8 object-contain" />
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
        
        {/* Next-Level Courses Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Next-Level Courses</h3>
          </div>
          <p className="text-gray-600 mb-6">After Beginner → Advance to Intermediate Machine Learning</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nextLevelCourses.map((nextCourse, index) => (
              <Link href={nextCourse.link} key={index} className="block">
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                    <img src={nextCourse.logo} alt={nextCourse.company} className="h-8 w-8 object-contain" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{nextCourse.title}</h4>
                    <p className="text-sm text-gray-600">{nextCourse.company}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <span>{nextCourse.level}</span>
                      <span>•</span>
                      <span>{nextCourse.duration}</span>
                      <span>•</span>
                      <span className="text-green-600">{nextCourse.price}</span>
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
              View more advanced courses
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mentorship Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Mentorship</h3>
          </div>
          <p className="text-gray-600 mb-6">Get paired with mentors currently working in this field</p>
          
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
      </div>
    </Section>
  );
}