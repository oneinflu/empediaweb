"use client";

import { useState, useEffect, use } from "react";

import Navbar from "@/app/components/sections/navbar/default";
import FooterSection from "@/app/components/sections/footer/default";
import JobHero from "@/app/components/sections/job/job-hero";
import JobOverview from "@/app/components/sections/job/job-overview";
import JobGrowthLink from "@/app/components/sections/job/growth-link";
import JobCompanySection from "@/app/components/sections/job/company-section";
import RelatedOpportunities from "@/app/components/sections/job/related-opportunities";
import JobApplicationProcess from "@/app/components/sections/job/application-process";
import JobSocialProof from "@/app/components/sections/job/social-proof";
import JobActionBar from "@/app/components/sections/job/action-bar";
import { CategoryCardProps, jobsData } from "@/app/data/category-data";

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Remove the use hook and use params directly
  const { id } = use(params);
  
  const [job, setJob] = useState<CategoryCardProps & {
    experienceLevel?: string;
    jobType?: string;
    description?: string;
    workMode?: string;
    skills?: string[];
  } | null>(null);
  
  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For now, we'll simulate by finding the job in our static data
    const decodedId = decodeURIComponent(id);
    
    // Find the job with the matching title
    const foundJob = jobsData.cards.find(card => card.title === decodedId);
    
    if (foundJob) {
      // Add some additional mock data that would normally come from the API
      setJob({
        ...foundJob,
        experienceLevel: foundJob.experienceLevel || "0-2 years",
        jobType: foundJob.jobType || "Full-time",
        workMode: foundJob.workMode || "Hybrid (3 days in office)",
        skills: foundJob.skills || ["JavaScript", "React", "Node.js", "HTML/CSS", "Git"],
        description: foundJob.description || "Join our team and work on exciting projects that impact millions of users. You'll collaborate with experienced professionals, participate in code reviews, and gain valuable industry experience."
      });
    }
  }, [id]);

  if (!job) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading job details...</p>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <JobHero job={job} />
      <JobOverview job={job} />
      <JobGrowthLink job={job} />
      <JobCompanySection job={job} />
      <JobApplicationProcess job={job} />
      <JobSocialProof job={job} />
      <RelatedOpportunities job={job} />
      <JobActionBar job={job} />
      <FooterSection />
    </div>
  );
}