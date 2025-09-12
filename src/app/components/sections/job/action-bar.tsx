"use client";

import { Button } from "@/app/components/ui/button";
import { CategoryCardProps } from "@/app/data/category-data";
import { BookOpen, User, CheckCircle } from "lucide-react";
import Link from "next/link";

type ActionBarProps = {
  job: CategoryCardProps & {
    experienceLevel?: string;
    jobType?: string;
    workMode?: string;
  };
};

export default function JobActionBar({ job }: ActionBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-3 px-4 z-50">
      <div className="max-w-container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Apply Now Button */}
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            onClick={() => window.open(`/apply/${encodeURIComponent(job.title)}`, "_blank")}
          >
            <CheckCircle className="h-4 w-4" />
            Apply Now
          </Button>
          
          {/* Upskill for this job Button */}
          <Link href="/courses">
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-300 text-blue-700 hover:bg-blue-50 flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Upskill for this job
            </Button>
          </Link>
          
          {/* Talk to Mentor Button */}
          <Link href="/mentorships">
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              Talk to Mentor
            </Button>
          </Link>
        </div>
        
        {/* Application Deadline */}
        <div className="text-sm text-gray-600">
          <span className="font-medium">Application Deadline:</span> December 15, 2023
        </div>
      </div>
    </div>
  );
}