/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import Link from "next/link";
import { BookOpen, Users, TrendingUp, ArrowRight, Award, Zap, CheckCircle, Briefcase } from "lucide-react";

type MentorGrowthLinkProps = {
  mentor: {
    id: string;
    name: string;
    role: string;
    domain: string;
    experience: string;
  };
};

export default function MentorGrowthLink({ mentor }: MentorGrowthLinkProps) {
  // Mock data for jobs where mentor has helped students
  const relatedJobs = [
    {
      title: "Senior Data Scientist",
      company: "Google",
      location: "Bangalore",
      salary: "₹25-35 LPA",
      logo: "https://logo.clearbit.com/google.com",
      link: "/jobs/senior-data-scientist"
    },
    {
      title: "Machine Learning Engineer",
      company: "Microsoft",
      location: "Hyderabad",
      salary: "₹18-28 LPA",
      logo: "https://logo.clearbit.com/microsoft.com",
      link: "/jobs/ml-engineer"
    }
  ];

  // Mock data for internships mentor can help with
  const relatedInternships = [
    {
      title: "Data Science Intern",
      company: "Amazon",
      duration: "6 months",
      stipend: "₹40,000/month",
      logo: "https://logo.clearbit.com/amazon.com",
      link: "/internships/data-science-amazon"
    },
    {
      title: "ML Research Intern",
      company: "IBM Research",
      duration: "3 months",
      stipend: "₹35,000/month",
      logo: "https://logo.clearbit.com/ibm.com",
      link: "/internships/ml-research-ibm"
    }
  ];

  // Mock data for recommended courses
  const recommendedCourses = [
    {
      title: "Advanced Machine Learning",
      company: "Coursera",
      level: "Advanced",
      duration: "12 weeks",
      price: "₹3,999",
      logo: "https://logo.clearbit.com/coursera.org",
      link: "/courses/advanced-ml"
    },
    {
      title: "Deep Learning Specialization",
      company: "Udemy",
      level: "Intermediate",
      duration: "10 weeks",
      price: "₹2,499",
      logo: "https://logo.clearbit.com/udemy.com",
      link: "/courses/deep-learning-specialization"
    }
  ];

  // Career path mapping steps
  const careerPath = [
    {
      title: "Start: Mentorship with " + mentor.name,
      description: "Get personalized guidance and industry insights",
      type: "mentorship"
    },
    {
      title: "Next: Complete Recommended Courses",
      description: "Build technical skills and knowledge",
      type: "course"
    },
    {
      title: "Then: Secure an Internship",
      description: "Gain practical experience and build portfolio",
      type: "internship"
    },
    {
      title: "Finally: Land Your Dream Job",
      description: "Apply skills and experience to your career",
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

        {/* Jobs Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Jobs</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Mentor has guided 20+ students who landed jobs at top companies
          </p>
          
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
        
        {/* Internships Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Internships</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Get internship-ready with mentor feedback on applications
          </p>
          
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
        
        {/* Courses Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Courses</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Mentor recommends these courses to strengthen your skills
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedCourses.map((course, index) => (
              <Link href={course.link} key={index} className="block">
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                    <img src={course.logo} alt={course.company} className="h-8 w-8 object-contain" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{course.title}</h4>
                    <p className="text-sm text-gray-600">{course.company}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <span>{course.level}</span>
                      <span>•</span>
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span className="text-green-600">{course.price}</span>
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
              View more courses
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
          <p className="text-gray-600 mb-6">Visual roadmap showing your potential career progression</p>
          
          {/* Timeline style */}
          <div className="relative pl-8 border-l-2 border-blue-200">
            {careerPath.map((step, index) => (
              <div key={index} className="mb-8 relative">
                {/* Timeline dot */}
                <div className={`absolute left-[-25px] h-12 w-12 rounded-full flex items-center justify-center ${
                  step.type === 'mentorship' ? 'bg-purple-100' : 
                  step.type === 'course' ? 'bg-green-100' : 
                  step.type === 'internship' ? 'bg-blue-100' : 
                  'bg-orange-100'
                }`}>
                  {step.type === 'mentorship' && <Users className="h-6 w-6 text-purple-600" />}
                  {step.type === 'course' && <BookOpen className="h-6 w-6 text-green-600" />}
                  {step.type === 'internship' && <Zap className="h-6 w-6 text-blue-600" />}
                  {step.type === 'job' && <Award className="h-6 w-6 text-orange-600" />}
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm ml-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    {index === 0 && (
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> Current
                      </Badge>
                    )}
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