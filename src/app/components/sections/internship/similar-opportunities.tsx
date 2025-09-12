/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps, internshipsData, jobsData } from "@/app/data/category-data";
import Link from "next/link";
import { Briefcase, ArrowRight, TrendingUp, Star } from "lucide-react";

type SimilarOpportunitiesProps = {
  internship: CategoryCardProps & {
    skills?: string[];
  };
};

export default function SimilarOpportunities({ internship }: SimilarOpportunitiesProps) {
  // Mock data for similar internships (in the same domain)
  // In a real app, this would be fetched from an API based on the current internship's domain/skills
  const similarInternships = internshipsData.cards
    .filter(card => 
      card.title !== internship.title && 
      (card.title.includes("SE") || card.title.includes("Software") || card.title.includes("Developer"))
    )
    .slice(0, 3);

  // Mock data for related jobs (next step in career ladder)
  // In a real app, this would be fetched from an API based on the current internship's domain/skills
  const relatedJobs = jobsData.cards
    .filter(card => 
      card.title.includes("Software") || 
      card.title.includes("Developer") || 
      card.title.includes("Engineer")
    )
    .slice(0, 3);

  return (
    <Section className="py-8 bg-gray-50">
      <div className="mx-auto max-w-container">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Similar & Recommended Opportunities</h2>
        </div>

        {/* Similar Internships Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Similar Internships</h3>
              <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">
                Same Domain
              </Badge>
            </div>
            <Link href="/internships" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <p className="text-gray-600 mb-6">Other internship opportunities in the same domain that match your skills</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarInternships.map((internship, index) => (
              <Link href={`/internships/${encodeURIComponent(internship.title)}`} key={index}>
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <Badge 
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200"
                    >
                      Similar
                    </Badge>
                    <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                      {internship.logo && (
                        <img src={internship.logo} alt={internship.company} className="h-8 w-8 object-contain" />
                      )}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-1">{internship.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{internship.company}</p>
                  <p className="text-sm text-gray-600">{internship.location}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto pt-3">
                    <span className="font-medium text-blue-600">{internship.salary}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <span className={`h-2 w-2 rounded-full ${internship.isActive ? "bg-green-500" : "bg-red-500"} mr-1`}></span>
                      <span>{internship.isActive ? "Active" : "Closed"}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Related Jobs Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Related Jobs</h3>
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                Career Ladder
              </Badge>
            </div>
            <Link href="/jobs" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <p className="text-gray-600 mb-6">Full-time positions that could be your next step after this internship</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedJobs.map((job, index) => (
              <Link href={`/jobs/${encodeURIComponent(job.title)}`} key={index}>
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <Badge 
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      Next Step
                    </Badge>
                    <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                      {job.logo && (
                        <img src={job.logo} alt={job.company} className="h-8 w-8 object-contain" />
                      )}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-1">{job.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                  <p className="text-sm text-gray-600">{job.location}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto pt-3">
                    <span className="font-medium text-green-600">{job.salary}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <span className={`h-2 w-2 rounded-full ${job.isActive ? "bg-green-500" : "bg-red-500"} mr-1`}></span>
                      <span>{job.isActive ? "Active" : "Closed"}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-500 hover:bg-blue-50">
              Explore more career opportunities
              <Star className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}