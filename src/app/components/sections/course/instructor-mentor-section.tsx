/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { CategoryCardProps } from "@/app/data/category-data";
import Link from "next/link";
import { Award, BookOpen, Briefcase, ExternalLink, Star, User } from "lucide-react";

type InstructorMentorSectionProps = {
  course: CategoryCardProps & {
    instructor?: {
      name: string;
      role: string;
      company?: string;
      avatar: string;
      bio: string;
      studentsCount?: number;
      coursesCount?: number;
      rating?: number;
      certifications?: {
        title: string;
        issuer: string;
        icon: "award" | "briefcase" | "book";
      }[];
    };
  };
};

export default function InstructorMentorSection({ course }: InstructorMentorSectionProps) {
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

  // Mock data for certifications if not provided
  const certifications = instructor.certifications || [
    {
      title: "PhD in Computer Science",
      issuer: "Stanford University",
      icon: "award"
    },
    {
      title: "10+ Years Industry Experience",
      issuer: "Google, Microsoft, Amazon",
      icon: "briefcase"
    },
    {
      title: "Published Author",
      issuer: "O'Reilly Media",
      icon: "book"
    }
  ];

  // Mock data for other courses by the instructor
  const otherCourses = [
    {
      title: "Advanced Machine Learning Techniques",
      level: "Advanced",
      duration: "8 weeks",
      enrolledCount: 8750,
      rating: 4.9,
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      link: "/courses/advanced-machine-learning"
    },
    {
      title: "Data Visualization Masterclass",
      level: "Intermediate",
      duration: "4 weeks",
      enrolledCount: 12340,
      rating: 4.7,
      price: "₹1,799",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "/courses/data-visualization-masterclass"
    },
    {
      title: "Statistical Analysis with Python",
      level: "Intermediate",
      duration: "6 weeks",
      enrolledCount: 9870,
      rating: 4.6,
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c",
      link: "/courses/statistical-analysis-python"
    }
  ];

  // Helper function to render the appropriate icon
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "award":
        return <Award className="h-5 w-5 text-blue-600" />;
      case "briefcase":
        return <Briefcase className="h-5 w-5 text-green-600" />;
      case "book":
        return <BookOpen className="h-5 w-5 text-purple-600" />;
      default:
        return <Award className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <Section className="py-10">
      <div className="mx-auto max-w-container">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Meet Your Instructor</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Instructor Profile - Left Column */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-center">
              {/* Instructor avatar */}
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                <img 
                  src={instructor.avatar} 
                  alt={instructor.name} 
                  className="h-full w-full object-cover" 
                />
              </div>
              
              <h3 className="text-xl font-bold text-center mb-1">{instructor.name}</h3>
              <p className="text-gray-600 text-center mb-4">{instructor.role}{instructor.company ? ` at ${instructor.company}` : ''}</p>
              
              <div className="grid grid-cols-3 w-full gap-2 text-center mb-6">
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
              
              <Button 
                variant="outline" 
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50" 
                size="lg"
              >
                <User className="mr-2 h-4 w-4" />
                Connect with Instructor
              </Button>
            </div>
          </div>
          
          {/* Instructor Bio and Certifications - Right Column */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-full">
              {/* Bio */}
              <h4 className="text-lg font-semibold mb-3">About</h4>
              <p className="text-gray-700 mb-6">{instructor.bio}</p>
              
              {/* Certifications */}
              <h4 className="text-lg font-semibold mb-3">Certifications & Experience</h4>
              <div className="space-y-4 mb-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${
                      cert.icon === 'award' ? 'bg-blue-50' : 
                      cert.icon === 'briefcase' ? 'bg-green-50' : 'bg-purple-50'
                    } flex-shrink-0`}>
                      {renderIcon(cert.icon)}
                    </div>
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Teaching style or approach */}
              <h4 className="text-lg font-semibold mb-3">Teaching Approach</h4>
              <p className="text-gray-700">
                {instructor.name} focuses on practical, hands-on learning with real-world examples. 
                Students appreciate the clear explanations and industry-relevant projects that help 
                bridge the gap between theory and application.
              </p>
            </div>
          </div>
        </div>
        
        {/* Other Courses by Instructor - Cross-sell section */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">More Courses by {instructor.name}</h3>
            <Link href={`/instructors/${instructor.name.toLowerCase().replace(/ /g, '-')}`}>
              <Button variant="ghost" className="text-blue-600 hover:bg-blue-50">
                View all courses
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCourses.map((course, index) => (
              <Link href={course.link} key={index} className="block">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                  {/* Course image */}
                  <div className="h-40 w-full overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  
                  {/* Course details */}
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">{course.title}</h4>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-xs text-gray-500">({course.enrolledCount.toLocaleString()} students)</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{course.level}</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                      </div>
                      <span className="text-sm font-medium text-green-600">{course.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}