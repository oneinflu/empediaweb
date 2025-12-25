"use client";

import { Section } from "@/app/components/ui/section";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps } from "@/app/data/category-data";
import { Award, Briefcase, ChevronRight, DollarSign, TrendingUp, Users, Zap } from "lucide-react";
import Image from "next/image";

type CourseOutcomesProps = {
  course: CategoryCardProps & {
    level?: string;
    duration?: string;
    format?: string;
  };
};

export default function CourseOutcomes({ course }: CourseOutcomesProps) {
 console.log('Course details:', course.title); // Mock data for career path
  const careerPath = [
    {
      title: "Entry Level: Data Analyst",
      timeframe: "0-1 years",
      salary: "₹4-7 LPA",
      description: "Apply data cleaning, basic analysis, and visualization skills",
      icon: "analyst"
    },
    {
      title: "Mid Level: Senior Data Analyst",
      timeframe: "2-4 years",
      salary: "₹8-12 LPA",
      description: "Lead complex analyses and provide actionable insights",
      icon: "senior"
    },
    {
      title: "Advanced: Data Scientist",
      timeframe: "4-6 years",
      salary: "₹12-18 LPA",
      description: "Develop machine learning models and advanced analytics",
      icon: "scientist"
    },
    {
      title: "Expert: Lead Data Scientist",
      timeframe: "6+ years",
      salary: "₹18-30+ LPA",
      description: "Direct data strategy and lead cross-functional teams",
      icon: "lead"
    }
  ];

  // Mock data for salary insights
  const salaryInsights = [
    {
      role: "Junior Data Analyst",
      timeframe: "0-1 years",
      salaryRange: "₹4-7 LPA",
      growth: "+12% YoY"
    },
    {
      role: "Data Analyst",
      timeframe: "1-3 years",
      salaryRange: "₹7-10 LPA",
      growth: "+15% YoY"
    },
    {
      role: "Senior Data Analyst",
      timeframe: "3-5 years",
      salaryRange: "₹10-15 LPA",
      growth: "+10% YoY"
    },
    {
      role: "Data Scientist",
      timeframe: "4+ years",
      salaryRange: "₹12-25 LPA",
      growth: "+18% YoY"
    }
  ];

  // Mock data for success stories
  const successStories = [
    {
      name: "Priya Sharma",
      previousRole: "Marketing Associate",
      currentRole: "Data Analyst at Amazon",
      achievement: "Secured job within 4 months of course completion",
      salary: "₹8 LPA",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      name: "Rahul Verma",
      previousRole: "Business Graduate",
      currentRole: "Junior Data Scientist at Flipkart",
      achievement: "Built portfolio of 5 projects that impressed recruiters",
      salary: "₹9.5 LPA",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Ananya Patel",
      previousRole: "Customer Support",
      currentRole: "Business Intelligence Analyst at Myntra",
      achievement: "Career transition with no prior technical background",
      salary: "₹7.2 LPA",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    }
  ];

  // Mock data for alumni stats
  const alumniStats = {
    placementRate: "94%",
    averageSalary: "₹8.5 LPA",
    networkSize: "15,000+"
  };

  return (
    <Section className="py-10 bg-white">
      <div className="mx-auto max-w-container">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Outcomes & Career Mapping</h2>
        </div>

        {/* Career Path Visual */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Career Path After This Course</h3>
          </div>
          <p className="text-gray-600 mb-6">Your potential career progression in data science</p>

          {/* Desktop timeline */}
          <div className="hidden md:block relative mb-8">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 h-0.5 bg-blue-200 top-16 z-0"></div>
            
            <div className="flex justify-between relative z-10">
              {careerPath.map((step, index) => (
                <div key={index} className="flex flex-col items-center w-1/4 px-2">
                  {/* Icon */}
                  <div 
                    className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-green-100' : index === 2 ? 'bg-purple-100' : 'bg-orange-100'}`}
                  >
                    {index === 0 && <Briefcase className={`h-6 w-6 ${index === 0 ? 'text-blue-600' : ''}`} />}
                    {index === 1 && <Award className={`h-6 w-6 ${index === 1 ? 'text-green-600' : ''}`} />}
                    {index === 2 && <Zap className={`h-6 w-6 ${index === 2 ? 'text-purple-600' : ''}`} />}
                    {index === 3 && <Users className={`h-6 w-6 ${index === 3 ? 'text-orange-600' : ''}`} />}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <div className="flex items-center justify-center gap-1 text-sm">
                      <span className="text-gray-500">{step.timeframe}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-green-600 font-medium">{step.salary}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden relative pl-8 border-l-2 border-blue-200">
            {careerPath.map((step, index) => (
              <div key={index} className="mb-8 relative">
                {/* Timeline dot */}
                <div 
                  className={`absolute left-[-17px] h-8 w-8 rounded-full flex items-center justify-center ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-green-100' : index === 2 ? 'bg-purple-100' : 'bg-orange-100'}`}
                >
                  {index === 0 && <Briefcase className={`h-4 w-4 ${index === 0 ? 'text-blue-600' : ''}`} />}
                  {index === 1 && <Award className={`h-4 w-4 ${index === 1 ? 'text-green-600' : ''}`} />}
                  {index === 2 && <Zap className={`h-4 w-4 ${index === 2 ? 'text-purple-600' : ''}`} />}
                  {index === 3 && <Users className={`h-4 w-4 ${index === 3 ? 'text-orange-600' : ''}`} />}
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-gray-500">{step.timeframe}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-green-600 font-medium">{step.salary}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Insights */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Salary Insights</h3>
          </div>
          <p className="text-gray-600 mb-6">Expected compensation at different career stages</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {salaryInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <h4 className="font-semibold text-gray-900">{insight.role}</h4>
                <p className="text-sm text-gray-500">{insight.timeframe} experience</p>
                <div className="mt-3 flex items-end justify-between">
                  <span className="text-xl font-bold text-green-600">{insight.salaryRange}</span>
                  <Badge className="bg-green-50 text-green-700 border-green-100">
                    {insight.growth}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Success Stories</h3>
          </div>
          <p className="text-gray-600 mb-6">Real outcomes from our alumni</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-blue-100">
                    <Image 
                      src={story.avatar} 
                      alt={story.name} 
                      width={48}
                      height={48}
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-blue-600">{story.currentRole}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Previously: {story.previousRole}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{story.achievement}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Current package: <span className="text-green-600 font-medium">{story.salary}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Stats */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Alumni Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Placement Rate</p>
              <p className="text-3xl font-bold text-blue-600">{alumniStats.placementRate}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Average Starting Salary</p>
              <p className="text-3xl font-bold text-green-600">{alumniStats.averageSalary}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Alumni Network</p>
              <p className="text-3xl font-bold text-purple-600">{alumniStats.networkSize}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}