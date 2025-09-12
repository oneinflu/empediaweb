"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { CategoryCardProps, internshipsData, jobsData } from "@/app/data/category-data";
import Link from "next/link";
import { Building, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

type CompanySectionProps = {
  internship: CategoryCardProps;
};

export default function CompanySection({ internship }: CompanySectionProps) {
  // Mock company data (in a real app, this would come from an API)
  const companyData = {
    name: internship.company,
    logo: internship.logo,
    description: `${internship.company} is a leading company in its industry, known for innovation and excellence. We are committed to creating a positive work environment where employees can grow and thrive.`,
    founded: "2005",
    headquarters: internship.location.split(" ")[0], // Just use the city part
    employees: "1,000+",
    industry: "Technology",
    website: `https://${internship.company.toLowerCase().replace(" ", "")}.com`,
  };

  // Get other opportunities from the same company
  const otherInternships = internshipsData.cards.filter(
    (card) => card.company === internship.company && card.title !== internship.title
  );

  const relatedJobs = jobsData.cards.filter(
    (card) => card.company === internship.company
  );

  // Combine other opportunities
  const otherOpportunities = [...otherInternships, ...relatedJobs].slice(0, 3);

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
                  <Image
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

        {/* Other Opportunities */}
        {otherOpportunities.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Other Opportunities at {companyData.name}
                </h3>
              </div>
              <Link
                href={`/company/${encodeURIComponent(companyData.name)}/opportunities`}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
              >
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherOpportunities.map((opportunity, index) => {
                // Determine the link based on the opportunity type
                const link = opportunity.salary?.includes("/month")
                  ? `/internships/${encodeURIComponent(opportunity.title)}`
                  : `/jobs/${encodeURIComponent(opportunity.title)}`;

                return (
                  <Link href={link} key={index}>
                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                      <div className="flex items-start gap-3">
                        {/* Logo */}
                        <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                          {opportunity.logo && (
                            <Image
                              src={opportunity.logo}
                              alt={`${opportunity.company} logo`}
                              className="h-8 w-8 object-contain"
                            />
                          )}
                        </div>

                        {/* Details */}
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {opportunity.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {opportunity.location}
                          </p>
                          <p className="text-sm font-medium text-blue-600 mt-1">
                            {opportunity.salary}
                          </p>
                        </div>
                      </div>

                      {/* Status indicator */}
                      <div className="flex items-center gap-2 mt-3">
                        <span
                          className={`h-2 w-2 rounded-full ${opportunity.isActive ? "bg-green-500" : "bg-red-500"}`}
                        ></span>
                        <span className="text-xs text-gray-500">
                          {opportunity.isActive
                            ? "Actively recruiting"
                            : "Not accepting applications"}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}