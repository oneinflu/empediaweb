"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";

import { CategoryCardProps } from "@/app/data/category-data";
import { useState } from "react";
import { ClipboardList, CheckCircle, Users, Briefcase, ChevronDown, ChevronUp, HelpCircle, ArrowRight, Clock } from "lucide-react";

type JobApplicationProcessProps = {
  job: CategoryCardProps & {
    experienceLevel?: string;
    jobType?: string;
    description?: string;
    workMode?: string;
    skills?: string[];
  };
};

export default function JobApplicationProcess({ job }: JobApplicationProcessProps) {
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
      title: "Shortlisting",
      description: "Selected candidates will be shortlisted based on their profile",
      icon: CheckCircle,
      color: "green"
    },
    {
      title: "Interview Rounds",
      description: "Multiple rounds of technical and HR interviews",
      icon: Users,
      color: "purple"
    },
    {
      title: "Offer",
      description: "Selected candidates will receive an offer letter",
      icon: Briefcase,
      color: "orange"
    },
    {
      title: "Onboarding",
      description: "Welcome to the team! Complete onboarding process",
      icon: CheckCircle,
      color: "teal"
    }
  ];

  // Expected timeline
  const timeline = {
    applicationClose: "5 days",
    interviewStart: "next week",
    selectionProcess: "2-3 weeks",
    joiningDate: "within 30 days of selection"
  };

  // FAQs about selection
  const faqs = [
    {
      question: "What is the selection process timeline?",
      answer: `The entire selection process typically takes ${timeline.selectionProcess} from application to final decision. Applications close in ${timeline.applicationClose}, and interviews start ${timeline.interviewStart}.`
    },
    {
      question: "What should I prepare for the interview?",
      answer: `For this ${job.title} role, prepare to discuss your relevant experience, technical skills, and problem-solving abilities. Research ${job.company} thoroughly and be ready to explain why you're interested in this position and how your skills align with our requirements.`
    },
    {
      question: "Is there a technical assessment?",
      answer: `Yes, for this ${job.title} position, there is a technical assessment that evaluates your skills related to ${job.skills?.join(", ") || "the job requirements"}. This may include a take-home assignment or a live technical session during the interview process.`
    },
    {
      question: "How many rounds of interviews are there?",
      answer: `The interview process typically consists of 3-4 rounds: an initial HR screening, a technical assessment, a panel interview with the team, and a final discussion with senior management. The exact number may vary based on the position and candidate.`
    },
    {
      question: "What happens after I'm selected?",
      answer: `If selected, you'll receive an offer letter with details about your compensation, benefits, start date, and other terms. After accepting the offer, our HR team will guide you through the onboarding process, which includes document verification and orientation.`
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative">
            {applicationSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-full md:w-auto">
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
                  <div className="hidden md:block absolute top-8" style={{ left: `calc(${(index + 1) * (100 / applicationSteps.length)}% - 12px)` }}>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Expected Timeline */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Expected Timeline</h3>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Applications close in <span className="font-medium">{timeline.applicationClose}</span></li>
              <li>• Interviews start <span className="font-medium">{timeline.interviewStart}</span></li>
              <li>• Selection process takes approximately <span className="font-medium">{timeline.selectionProcess}</span></li>
              <li>• Expected joining date: <span className="font-medium">{timeline.joiningDate}</span></li>
            </ul>
          </div>
          
          {/* Apply Now Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open(`/apply/jobs/${encodeURIComponent(job.title)}`, "_blank")}
            >
              Apply Now
            </Button>
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
                href={`mailto:careers@${job.company.toLowerCase().replace(" ", "")}.com`}
                className="text-blue-600 hover:underline"
              >
                careers@{job.company.toLowerCase().replace(" ", "")}.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}