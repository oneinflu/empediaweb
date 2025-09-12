/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { CategoryCardProps, jobsData } from "@/app/data/category-data";
import Link from "next/link";
import { Building, ExternalLink, ArrowRight, Star, Award, Users } from "lucide-react";

type JobCompanySectionProps = {
  job: CategoryCardProps & {
    experienceLevel?: string;
    jobType?: string;
    description?: string;
    workMode?: string;
    skills?: string[];
  };
};

export default function JobCompanySection({ job }: JobCompanySectionProps) {
  // Mock company data (in a real app, this would come from an API)
  const companyData = {
    name: job.company,
    logo: job.logo,
    description: `${job.company} is a leading company in its industry, known for innovation and excellence. We are committed to creating a positive work environment where employees can grow and thrive.`,
    founded: "2005",
    headquarters: job.location.split(" ")[0], // Just use the city part
    employees: "1,000+",
    industry: "Technology",
    website: `https://${job.company.toLowerCase().replace(" ", "")}.com`,
    culture: [
      "Collaborative and inclusive work environment",
      "Focus on continuous learning and professional development",
      "Work-life balance with flexible scheduling options",
      "Regular team building activities and events"
    ],
    benefits: [
      "Comprehensive health insurance",
      "Retirement plans with company matching",
      "Paid time off and parental leave",
      "Professional development budget",
      "Remote work options"
    ],
    reviews: [
      {
        author: "Former Software Engineer",
        rating: 4.5,
        comment: "Great place to work with lots of learning opportunities. Management is supportive and the work-life balance is excellent."
      },
      {
        author: "Current Product Manager",
        rating: 4.8,
        comment: "Innovative company culture that encourages creativity and ownership. Competitive compensation and excellent benefits."
      }
    ]
  };

  // Get other job opportunities from the same company
  const otherJobs = jobsData.cards.filter(
    (card) => card.company === job.company && card.title !== job.title
  ).slice(0, 3);

  return (
    <Section className="py-8">
      <div className="mx-auto max-w-container">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Company</h2>
        </div>

        {/* Company Profile */}
        <div className="mb-10 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                {companyData.logo && (
                  <img
                    src={companyData.logo}
                    alt={`${companyData.name} logo`}
                    className="h-20 w-20 object-contain"
                  />
                )}
              </div>
            </div>

            {/* Company Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {companyData.name}
                </h3>
                <Link
                  href={`/company/${encodeURIComponent(companyData.name)}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink size={16} />
                </Link>
              </div>

              <p className="text-gray-700 mb-4">{companyData.description}</p>

              {/* Company Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Founded</p>
                  <p className="font-medium">{companyData.founded}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Headquarters</p>
                  <p className="font-medium">{companyData.headquarters}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Employees</p>
                  <p className="font-medium">{companyData.employees}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Industry</p>
                  <p className="font-medium">{companyData.industry}</p>
                </div>
              </div>

              {/* Visit Company Website Button */}
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-500 hover:bg-blue-50"
                  onClick={() => window.open(companyData.website, "_blank")}
                >
                  Visit Company Website
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Company Culture & Benefits */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Culture */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Culture</h3>
            </div>
            <ul className="space-y-2">
              {companyData.culture.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Benefits</h3>
            </div>
            <ul className="space-y-2">
              {companyData.benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Employee Reviews */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Employee Reviews</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">{review.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(review.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">&quot;{review.comment}&quot;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Openings */}
        {otherJobs.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Other Openings at {companyData.name}
                </h3>
              </div>
              <Link
                href={`/company/${encodeURIComponent(companyData.name)}/jobs`}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
              >
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherJobs.map((job, index) => (
                <Link href={`/jobs/${encodeURIComponent(job.title)}`} key={index}>
                  <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="flex items-start gap-3">
                      {/* Logo */}
                      <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                        {job.logo && (
                          <img
                            src={job.logo}
                            alt={`${job.company} logo`}
                            className="h-8 w-8 object-contain"
                          />
                        )}
                      </div>

                      {/* Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {job.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {job.location}
                        </p>
                        <p className="text-sm font-medium text-blue-600 mt-1">
                          {job.salary}
                        </p>
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="flex items-center gap-2 mt-3">
                      <span
                        className={`h-2 w-2 rounded-full ${job.isActive ? "bg-green-500" : "bg-red-500"}`}
                      ></span>
                      <span className="text-xs text-gray-500">
                        {job.isActive
                          ? "Actively recruiting"
                          : "Not accepting applications"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}