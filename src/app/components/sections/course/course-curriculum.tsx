"use client";

import { useState } from "react";
import { Section } from "@/app/components/ui/section";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Clock, ChevronDown, ChevronUp, Play, FileText, Code, Lock, CheckCircle } from "lucide-react";
import { CategoryCardProps } from "@/app/data/category-data";

type Module = {
  id: string;
  title: string;
  description?: string;
  estimatedTime: string;
  lessons: Lesson[];
  isCompleted?: boolean;
};

type Lesson = {
  id: string;
  title: string;
  type: "video" | "reading" | "quiz" | "project";
  duration: string;
  isFreePreview?: boolean;
  isCompleted?: boolean;
};

type CourseCurriculumProps = {
  course: CategoryCardProps & {
    modules?: Module[];
  };
};

export default function CourseCurriculum({ course }: CourseCurriculumProps) {
  // State to track which modules are expanded
  const [expandedModules, setExpandedModules] = useState<string[]>([]);

  // Toggle module expansion
  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  // Mock data for modules if not provided
  const modules = course.modules || [
    {
      id: "module-1",
      title: "Introduction to Python and Data Science",
      description: "Get started with Python basics and understand the data science landscape.",
      estimatedTime: "2 weeks",
      isCompleted: false,
      lessons: [
        {
          id: "lesson-1-1",
          title: "Welcome to the Course",
          type: "video",
          duration: "10 min",
          isFreePreview: true,
          isCompleted: false
        },
        {
          id: "lesson-1-2",
          title: "Setting Up Your Development Environment",
          type: "video",
          duration: "15 min",
          isFreePreview: true,
          isCompleted: false
        },
        {
          id: "lesson-1-3",
          title: "Python Syntax and Variables",
          type: "video",
          duration: "25 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-1-4",
          title: "Data Types and Structures",
          type: "reading",
          duration: "30 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-1-5",
          title: "Module 1 Quiz",
          type: "quiz",
          duration: "20 min",
          isFreePreview: false,
          isCompleted: false
        }
      ]
    },
    {
      id: "module-2",
      title: "Data Manipulation with Pandas",
      description: "Learn how to manipulate and analyze data using the powerful Pandas library.",
      estimatedTime: "3 weeks",
      isCompleted: false,
      lessons: [
        {
          id: "lesson-2-1",
          title: "Introduction to Pandas",
          type: "video",
          duration: "20 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-2-2",
          title: "DataFrames and Series",
          type: "video",
          duration: "30 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-2-3",
          title: "Data Cleaning and Preprocessing",
          type: "reading",
          duration: "45 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-2-4",
          title: "Project: Data Analysis with Pandas",
          type: "project",
          duration: "2 hours",
          isFreePreview: false,
          isCompleted: false
        }
      ]
    },
    {
      id: "module-3",
      title: "Data Visualization",
      description: "Master the art of creating compelling visualizations with Matplotlib and Seaborn.",
      estimatedTime: "2 weeks",
      isCompleted: false,
      lessons: [
        {
          id: "lesson-3-1",
          title: "Introduction to Matplotlib",
          type: "video",
          duration: "25 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-3-2",
          title: "Creating Basic Charts",
          type: "video",
          duration: "35 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-3-3",
          title: "Advanced Visualizations with Seaborn",
          type: "video",
          duration: "40 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-3-4",
          title: "Project: Data Visualization Dashboard",
          type: "project",
          duration: "3 hours",
          isFreePreview: false,
          isCompleted: false
        }
      ]
    },
    {
      id: "module-4",
      title: "Introduction to Machine Learning",
      description: "Understand the fundamentals of machine learning and build your first models.",
      estimatedTime: "4 weeks",
      isCompleted: false,
      lessons: [
        {
          id: "lesson-4-1",
          title: "Machine Learning Fundamentals",
          type: "video",
          duration: "30 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-4-2",
          title: "Supervised vs Unsupervised Learning",
          type: "reading",
          duration: "25 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-4-3",
          title: "Building Your First ML Model",
          type: "video",
          duration: "45 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-4-4",
          title: "Model Evaluation and Validation",
          type: "video",
          duration: "35 min",
          isFreePreview: false,
          isCompleted: false
        },
        {
          id: "lesson-4-5",
          title: "Capstone Project: Predictive Model Development",
          type: "project",
          duration: "8 hours",
          isFreePreview: false,
          isCompleted: false
        }
      ]
    }
  ];

  // Calculate total course content
  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const totalVideos = modules.reduce((acc, module) => 
    acc + module.lessons.filter(lesson => lesson.type === "video").length, 0
  );
  const totalProjects = modules.reduce((acc, module) => 
    acc + module.lessons.filter(lesson => lesson.type === "project").length, 0
  );

  // Helper function to get icon for lesson type
  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4" />;
      case "reading":
        return <FileText className="h-4 w-4" />;
      case "quiz":
        return <FileText className="h-4 w-4" />;
      case "project":
        return <Code className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <Section className="py-10">
      <div className="mx-auto max-w-container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Course Curriculum</h2>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium">{totalLessons}</span> lessons
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">{totalVideos}</span> videos
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">{totalProjects}</span> projects
            </div>
          </div>
        </div>
        
        {/* Course modules accordion */}
        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Module header - always visible */}
              <div 
                className="bg-gray-50 p-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleModule(module.id)}
              >
                <div className="flex items-center gap-3">
                  {module.isCompleted ? (
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                  ) : (
                    <div className="h-6 w-6 rounded-full border-2 border-gray-300"></div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900">{module.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {module.estimatedTime}
                      </div>
                      <span>•</span>
                      <span>{module.lessons.length} lessons</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {expandedModules.includes(module.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </div>
              
              {/* Module content - visible when expanded */}
              {expandedModules.includes(module.id) && (
                <div className="p-4 bg-white">
                  {module.description && (
                    <p className="text-gray-600 mb-4">{module.description}</p>
                  )}
                  
                  {/* Lessons list */}
                  <div className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <div 
                        key={lesson.id} 
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${lesson.isCompleted ? 'bg-green-100' : 'bg-gray-100'}`}>
                            {lesson.isCompleted ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              getLessonIcon(lesson.type)
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                              {lesson.isFreePreview && (
                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                  Free Preview
                                </Badge>
                              )}
                              {lesson.type === "project" && (
                                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                                  Project
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">
                              {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)} • {lesson.duration}
                            </div>
                          </div>
                        </div>
                        
                        {/* Preview button or lock icon */}
                        {lesson.isFreePreview ? (
                          <Button variant="ghost" size="sm" className="text-blue-600">
                            <Play className="h-4 w-4 mr-1" />
                            Preview
                          </Button>
                        ) : (
                          <Lock className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Capstone Project Highlight */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Capstone Project</h3>
          <p className="text-gray-700 mb-4">
            Apply everything you&apos;ve learned to build a complete end-to-end machine learning project. 
            You&apos;ll work with real-world data to solve a practical problem, from data collection and 
            preprocessing to model development and deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-white rounded-lg p-4 flex-1 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Project Deliverables</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Data collection and preprocessing pipeline</li>
                <li>Exploratory data analysis report</li>
                <li>Machine learning model implementation</li>
                <li>Model evaluation and validation documentation</li>
                <li>Final presentation and GitHub repository</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 flex-1 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Skills You&apos;ll Demonstrate</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Data cleaning and feature engineering</li>
                <li>Statistical analysis and visualization</li>
                <li>Machine learning model selection and tuning</li>
                <li>Performance evaluation and interpretation</li>
                <li>Technical documentation and presentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}