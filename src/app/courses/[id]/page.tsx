"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/sections/navbar/default";
import FooterSection from "@/app/components/sections/footer/default";
import CourseHero from "@/app/components/sections/course/course-hero";
import CourseOverview from "@/app/components/sections/course/course-overview";
import CourseCurriculum from "@/app/components/sections/course/course-curriculum";
import CourseGrowthLink from "@/app/components/sections/course/course-growth-link";
import CourseAudience from "@/app/components/sections/course/course-audience";
import CourseOutcomes from "@/app/components/sections/course/course-outcomes";
import InstructorMentorSection from "@/app/components/sections/course/instructor-mentor-section";
import CourseFAQ from "@/app/components/sections/course/course-faq";
import CourseActionBar from "@/app/components/sections/course/course-action-bar";
import { CategoryCardProps } from "@/app/data/category-data";

type Module = {
  id: string;
  title: string;
  description?: string;
  estimatedTime: string;
  lessons: {
    id: string;
    title: string;
    type: "video" | "reading" | "quiz" | "project";
    duration: string;
    isFreePreview?: boolean;
    isCompleted?: boolean;
  }[];
  isCompleted?: boolean;
};

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const [course, setCourse] = useState<CategoryCardProps & {
    level?: string;
    duration?: string;
    format?: string;
    rating?: number;
    enrolledCount?: number;
    description?: string;
    originalPrice?: string;
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
    modules?: Module[];
  } | null>(null);

  useEffect(() => {
    // This would normally be an API call to fetch course data
    // For now, we'll mock the data
    if (params.id) {
      setCourse({
        title: "Python for Data Science – Beginner to Advanced",
        company: "Udemy",
        location: "Online",
        salary: "₹1,999",
        originalPrice: "₹3,999",
        logo: "https://logo.clearbit.com/udemy.com",
        isActive: true,
        level: "Beginner to Advanced",
        duration: "6 Weeks, 40 Hours",
        format: "Self-paced",
        rating: 4.7,
        enrolledCount: 15420,
        description: "Master Python for data science with this comprehensive course covering everything from basic syntax to advanced machine learning concepts. Perfect for beginners and intermediate learners looking to advance their data science skills.",
        experienceLevel: "Beginner to Advanced", // Add this required field
        jobType: "Course", // Add this required field
        shortDescription: "Kickstart your data science career with hands-on Python projects.",
        highlights: [
          "Industry-recognized certificate upon completion",
          "Placement assistance with partner companies",
          "8 hands-on projects with real-world datasets",
          "24/7 mentor support throughout the course",
          "Access to exclusive community forums",
          "Lifetime access to course materials"
        ],
        prerequisites: [
          "Basic understanding of programming concepts",
          "Familiarity with mathematical concepts (algebra, statistics)",
          "No prior Python experience required",
          "A computer with internet access"
        ],
        instructor: {
          name: "Dr. Sarah Johnson",
          role: "Senior Data Scientist",
          company: "Google",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          bio: "Dr. Sarah Johnson has over 10 years of experience in data science and machine learning. She has worked on projects for Fortune 500 companies and has published several research papers on advanced ML techniques.",
          studentsCount: 15420,
          coursesCount: 8,
          rating: 4.8
        }
        // Modules will be provided by the CourseCurriculum component with mock data
      });
    }
  }, [params.id]);

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading course details...</p>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <CourseHero course={course} />
      <CourseOverview course={course} />
      <CourseCurriculum course={course} />
      <CourseAudience course={course} />
      <CourseOutcomes course={course} />
      <InstructorMentorSection course={course} />
      <CourseFAQ course={course} />
      <CourseGrowthLink course={course} />
      <FooterSection />
      <CourseActionBar course={course} />
    </div>
  );
}