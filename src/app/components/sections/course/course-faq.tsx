"use client";

import { useState } from "react";
import { Section } from "@/app/components/ui/section";
import { CategoryCardProps } from "@/app/data/category-data";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

type CourseFAQProps = {
  course: CategoryCardProps & {
    level?: string;
    duration?: string;
    format?: string;
    prerequisites?: string[];
  };
};

export default function CourseFAQ({ course }: CourseFAQProps) {
  // State to track which FAQ is expanded
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Toggle FAQ expansion
  const toggleFAQ = (index: number) => {
    if (expandedFAQ === index) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(index);
    }
  };

  // Mock FAQ data
  const faqs = [
    {
      question: "How long does the course take to complete?",
      answer: `The course duration is ${course.duration || "6 Weeks, 40 Hours"}. However, since it's ${course.format || "self-paced"}, you can complete it at your own speed. Most students finish within 2-3 months while balancing other commitments. You'll have access to the course materials for a full year after enrollment.`
    },
    {
      question: "Is the certification valid and recognized by employers?",
      answer: "Yes, our certification is industry-recognized and valued by employers. The certificate includes verification features that allow employers to confirm its authenticity. Many of our graduates have successfully used this certification to demonstrate their skills during job applications and interviews."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied with the course within the first week of enrollment, you can request a full refund with no questions asked. After 7 days, or if you've completed more than 25% of the course content, refunds are not available."
    },
    {
      question: "Do you provide placement support after course completion?",
      answer: "Yes, we provide comprehensive placement support including resume reviews, interview preparation, and connections with our hiring partners. Our career services team works with you for up to 6 months after course completion to help you land relevant opportunities. We also provide access to our exclusive job board featuring openings from partner companies."
    },
    {
      question: "What is the language of instruction for this course?",
      answer: "The primary language of instruction is English. All video lectures, reading materials, and assignments are in English. However, subtitles are available in multiple languages including Hindi, Spanish, and Mandarin. Our support team can also assist students in these languages if needed."
    },
    {
      question: "Are there any prerequisites for joining this course?",
      answer: `This ${course.level || "Beginner to Advanced"} level course is designed to accommodate learners at various skill levels. ${course.prerequisites ? course.prerequisites.join(". ") : "Basic understanding of programming concepts is helpful but not required. No prior Python experience is necessary."}. Our comprehensive curriculum ensures that even complete beginners can follow along and succeed.`
    },
    {
      question: "Will I get access to the instructor for doubt clearing?",
      answer: "Yes, you'll have multiple channels for doubt clearing. We offer weekly live Q&A sessions with the instructor, a dedicated discussion forum where instructors and teaching assistants respond within 24 hours, and monthly 1-on-1 mentoring sessions that you can schedule at your convenience."
    },
    {
      question: "Can I access the course content offline?",
      answer: "Yes, our mobile app allows you to download lectures for offline viewing. While interactive elements like quizzes and assignments require an internet connection, you can download the lecture videos, slides, and reading materials to study offline. This is particularly useful for students with limited internet connectivity."
    }
  ];

  return (
    <Section className="py-10 bg-gray-50">
      <div className="mx-auto max-w-container">
        <div className="flex items-center gap-2 mb-8">
          <HelpCircle className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left p-5 flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-medium text-gray-900">{faq.question}</h3>
                {expandedFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {expandedFAQ === index && (
                <div className="px-5 pb-5 pt-0 text-gray-700">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-5 flex items-start gap-4">
          <div className="p-2 rounded-full bg-blue-100 flex-shrink-0">
            <HelpCircle className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Still have questions?</h3>
            <p className="text-gray-700 mb-3">
              Our support team is here to help. Reach out to us and we&apos;ll get back to you within 24 hours.  
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
              <button className="px-4 py-2 border border-blue-300 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}