"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/sections/navbar/default";
import FooterSection from "@/app/components/sections/footer/default";
import InternshipHero from "@/app/components/sections/internship/internship-hero";
import InternshipOverview from "@/app/components/sections/internship/internship-overview";
import GrowthLink from "@/app/components/sections/internship/growth-link";
import CompanySection from "@/app/components/sections/internship/company-section";
import SimilarOpportunities from "@/app/components/sections/internship/similar-opportunities";
import ApplicationProcess from "@/app/components/sections/internship/application-process";
import SocialProof from "@/app/components/sections/internship/social-proof";
import ActionBar from "@/app/components/sections/internship/action-bar";
import { internshipsData, CategoryCardProps } from "@/app/data/category-data";

export default function InternshipDetailPage({ params }: { params: { id: string } }) {
  const [internship, setInternship] = useState<CategoryCardProps & {
    duration?: string;
    deadline?: string;
    description?: string;
    skills?: string[];
    eligibility?: string[];
    perks?: string[];
  } | null>(null);
  
  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For now, we'll simulate by finding the internship in our static data
    const decodedId = decodeURIComponent(params.id);
    
    // Find the internship with the matching title
    const foundInternship = internshipsData.cards.find(card => card.title === decodedId);
    
    if (foundInternship) {
      // Add some additional mock data that would normally come from the API
      setInternship({
        ...foundInternship,
        duration: "3 Months, Full-Time",
        deadline: "2023-12-15", // YYYY-MM-DD format
        description: "Join our team as a Software Engineering Intern and work on real-world projects that impact millions of users. You'll collaborate with experienced engineers, participate in code reviews, and gain valuable industry experience.",
        skills: ["JavaScript", "React", "Node.js", "HTML/CSS", "Git", "Problem Solving"],
        eligibility: [
          "Currently pursuing a Bachelor's or Master's degree in Computer Science or related field",
          "Strong understanding of web technologies and programming concepts",
          "Familiarity with modern JavaScript frameworks (React, Vue, Angular)",
          "Good communication and teamwork skills"
        ],
        perks: [
          "Competitive stipend",
          "Flexible working hours",
          "Certificate of completion",
          "Pre-placement offer opportunity",
          "Mentorship from industry experts",
          "Networking opportunities"
        ]
      });
    }
  }, [params.id]);

  if (!internship) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading internship details...</p>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <InternshipHero internship={internship} />
      <InternshipOverview internship={internship} />
      <GrowthLink internship={internship} />
      <CompanySection internship={internship} />
      <ApplicationProcess internship={internship} />
      <SocialProof internship={internship} />
      <SimilarOpportunities internship={internship} />
      <ActionBar internship={internship} />
      <FooterSection />
    </div>
  );
}