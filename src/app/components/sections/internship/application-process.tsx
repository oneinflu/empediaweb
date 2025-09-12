"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";

import { CategoryCardProps } from "@/app/data/category-data";
import { useState } from "react";
import { ClipboardList, CheckCircle, Users, Briefcase, ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";

type ApplicationProcessProps = {
  internship: CategoryCardProps;
};

export default function ApplicationProcess({ internship }: ApplicationProcessProps) {
  // State to track which FAQ is open
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Toggle FAQ open/close
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Application process steps
  const applicationSteps = [
    {
      title: "Apply",
      description: "Submit your application with resume and cover letter",
      icon: ClipboardList,
      color: "blue"
    },
    {
      title: "Shortlist",
      description: "Selected candidates will be shortlisted based on their profile",
      icon: CheckCircle,
      color: "green"
    },
    {
      title: "Interview",
      description: "Shortlisted candidates will be called for an interview",
      icon: Users,
      color: "purple"
    },
    {
      title: "Join",
      description: "Selected candidates will receive an offer letter",
      icon: Briefcase,
      color: "orange"
    }
  ];

  // FAQs about selection
  const faqs = [
    {
      question: "What is the selection process timeline?",
      answer: `The entire selection process typically takes 2-3 weeks from application to final decision. Applications are reviewed within 5-7 business days, followed by interviews for shortlisted candidates in the following week.`
    },
    {
      question: "What should I prepare for the interview?",
      answer: `For technical roles, prepare to discuss your projects, technical skills, and solve coding problems. For non-technical roles, focus on your relevant experience and skills. All candidates should research ${internship.company} and be ready to explain why you're interested in this specific internship.`
    },
    {
      question: "Is there a technical assessment?",
      answer: `Yes, for technical roles like ${internship.title}, there is typically a technical assessment that evaluates your coding skills and problem-solving abilities. This may include a take-home assignment or a live coding session during the interview.`
    },
    {
      question: "How many rounds of interviews are there?",
      answer: `Most internship positions have 2 rounds of interviews: an initial screening and a final interview with the team you'll be working with. Some technical roles may have an additional technical assessment round.`
    },
    {
      question: "What happens after I'm selected?",
      answer: `If selected, you'll receive an offer letter with details about your internship, including start date, duration, stipend, and other terms. You'll need to accept the offer within the specified timeframe to secure your position.`
    }
  ];

  return (
    <Section className="py-8">
      <div className="mx-auto max-w-container">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Application Process</h2>
        </div>

        {/* Application Steps */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Step number with icon */}
                <div className={`h-16 w-16 rounded-full bg-${step.color}-100 flex items-center justify-center mb-3`}>
                  <step.icon className={`h-8 w-8 text-${step.color}-600`} />
                </div>
                
                {/* Step title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                
                {/* Step description */}
                <p className="text-sm text-gray-600">{step.description}</p>
                
                {/* Arrow connecting steps (except for the last step) */}
                {index < applicationSteps.length - 1 && (
                  <div className="hidden md:block absolute right-[-30px] top-[30px]">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Apply Now Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open(`/apply/${encodeURIComponent(internship.title)}`, "_blank")}
            >
              Apply Now
            </Button>
            <p className="text-sm text-gray-500 mt-2">Application Deadline: December 15, 2023</p>
          </div>
        </div>

        {/* FAQs Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* FAQ Question (clickable header) */}
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {/* FAQ Answer (collapsible content) */}
                {openFaqIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Contact for more questions */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Have more questions? Contact our recruitment team at{" "}
              <a 
                href={`mailto:careers@${internship.company.toLowerCase().replace(" ", "")}.com`}
                className="text-blue-600 hover:underline"
              >
                careers@{internship.company.toLowerCase().replace(" ", "")}.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}