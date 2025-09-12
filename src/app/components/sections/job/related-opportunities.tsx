/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps, internshipsData, jobsData } from "@/app/data/category-data";
import Link from "next/link";
import { Briefcase, ArrowRight,  Star, GraduationCap } from "lucide-react";

type RelatedOpportunitiesProps = {
  job: CategoryCardProps & {
    experienceLevel?: string;
    jobType?: string;
    skills?: string[];
  };
};

export default function RelatedOpportunities({ job }: RelatedOpportunitiesProps) {
  // Mock data for similar jobs (in the same domain)
  // In a real app, this would be fetched from an API based on the current job's domain/skills
  const similarJobs = jobsData.cards
    .filter(card => 
      card.title !== job.title && 
      (card.title.includes(job.title.split(" ")[0]) || // Match first word in title
       (job.skills && job.skills.some(skill => card.title.includes(skill))))
    )
    .slice(0, 3);

  // Mock data for internship opportunities (stepping stones for underqualified candidates)
  // In a real app, this would be fetched from an API based on the current job's domain/skills
  const relatedInternships = internshipsData.cards
    .filter(card => 
      (job.skills && job.skills.some(skill => 
        card.title.includes(skill) || 
        card.title.includes("SE") || 
        card.title.includes("Software") || 
        card.title.includes("Developer")
      ))
    )
    .slice(0, 3);

  return (
    <Section className="py-8 bg-gray-50">
      <div className="mx-auto max-w-container">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Related Opportunities</h2>
        </div>

        {/* Similar Jobs Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Similar Jobs</h3>
              <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">
                Same Domain
              </Badge>
            </div>
            <Link href="/jobs" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <p className="text-gray-600 mb-6">Other job opportunities in the same domain that match your skills</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarJobs.length > 0 ? (
              similarJobs.map((similarJob, index) => (
                <Link href={`/jobs/${encodeURIComponent(similarJob.title)}`} key={index}>
                  <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <Badge 
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200"
                      >
                        Similar
                      </Badge>
                      <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                        {similarJob.logo && (
                          <img src={similarJob.logo} alt={similarJob.company} className="h-8 w-8 object-contain" />
                        )}
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-1">{similarJob.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{similarJob.company}</p>
                    <p className="text-sm text-gray-600">{similarJob.location}</p>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto pt-3">
                      <span className="font-medium text-blue-600">{similarJob.salary}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <span className={`h-2 w-2 rounded-full ${similarJob.isActive ? "bg-green-500" : "bg-red-500"} mr-1`}></span>
                        <span>{similarJob.isActive ? "Active" : "Closed"}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-8 text-gray-500">
                No similar jobs found. We&apos;re working on adding more opportunities in this domain.
              </div>
            )}
          </div>
        </div>
        
        {/* Internship Opportunities Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Internship Opportunities</h3>
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                Stepping Stone
              </Badge>
            </div>
            <Link href="/internships" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            If you&apos;re not yet qualified for this role, consider these internships to gain relevant experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedInternships.length > 0 ? (
              relatedInternships.map((internship, index) => (
                <Link href={`/internships/${encodeURIComponent(internship.title)}`} key={index}>
                  <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <Badge 
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        Entry Level
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
                      <span className="font-medium text-green-600">{internship.salary}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <span className={`h-2 w-2 rounded-full ${internship.isActive ? "bg-green-500" : "bg-red-500"} mr-1`}></span>
                        <span>{internship.isActive ? "Active" : "Closed"}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-8 text-gray-500">
                No related internships found. We&apos;re working on adding more opportunities.
              </div>
            )}
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