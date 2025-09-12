"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { Clock, Users, FileText, Calendar, Briefcase } from "lucide-react";

interface MentorSessionTypesProps {
  mentorName?: string;
  price?: string;
}

export default function MentorSessionTypes({ mentorName = "mentor", price = "₹2,999" }: MentorSessionTypesProps) {
  const sessionTypes = [
    {
      title: "1:1 Session (30 mins)",
      description: "One-on-one personalized guidance session to address specific questions and get expert advice.",
      price: `₹${parseInt(price.replace(/[^0-9]/g, '')) / 2}`,
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      popular: false
    },
    {
      title: "1:1 Session (60 mins)",
      description: "Extended one-on-one session for in-depth discussion, career planning, and detailed feedback.",
      price: price,
      icon: <Calendar className="w-10 h-10 text-blue-600" />,
      popular: true
    },
    {
      title: "Mock Interview Session",
      description: "Practice with real interview questions specific to your target role and receive detailed feedback.",
      price: `₹${parseInt(price.replace(/[^0-9]/g, '')) * 1}`,
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      popular: false
    },
    {
      title: "Resume/LinkedIn Review",
      description: "Get expert feedback on your resume and LinkedIn profile to stand out to recruiters.",
      price: price,
      icon: <FileText className="w-10 h-10 text-blue-600" />,
      popular: false
    },
    {
      title: "Long-term Mentorship Plan",
      description: "Weekly sessions for continuous guidance, accountability, and accelerated career growth.",
      price: `₹${parseInt(price.replace(/[^0-9]/g, '')) * 3}/month`,
      icon: <Calendar className="w-10 h-10 text-blue-600" />,
      popular: false
    },
    {
      title: "Group Sessions",
      description: "Affordable learning with peers, sharing insights and networking opportunities.",
      price: `₹${parseInt(price.replace(/[^0-9]/g, '')) / 2}/person`,
      icon: <Users className="w-10 h-10 text-blue-600" />,
      popular: false
    }
  ];

  return (
    <Section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Session Types & Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the session type that best fits your needs and schedule a time with {mentorName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sessionTypes.map((session, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col relative border ${session.popular ? 'border-blue-400' : 'border-gray-200'}`}
            >
              {session.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
              <div className="mb-4 p-3 bg-blue-50 rounded-full self-center">
                {session.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{session.title}</h3>
              <p className="text-gray-600 mb-4 text-center flex-grow">{session.description}</p>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-gray-900">{session.price}</span>
              </div>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                size="lg"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}