"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps } from "@/app/data/category-data";
import { useState } from "react";
import { Star, Quote, Award, ChevronLeft, ChevronRight, ThumbsUp, MessageSquare, User, Users, Clock } from "lucide-react";

type JobSocialProofProps = {
  job: CategoryCardProps & {
    experienceLevel?: string;
    jobType?: string;
    workMode?: string;
  };
};

export default function JobSocialProof({ job }: JobSocialProofProps) {
  // State for testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Mock data for reviews
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer at " + job.company,
      avatar: "/avatars/avatar-1.png",
      rating: 5,
      comment: "Working at " + job.company + " has been an incredible experience. The team is supportive, and there are plenty of opportunities for growth and learning.",
      date: "June 2023",
      helpful: 24
    },
    {
      id: 2,
      name: "Rahul Patel",
      role: "Senior Developer at " + job.company,
      avatar: "/avatars/avatar-2.png",
      rating: 4,
      comment: "Great work environment with supportive leadership. The company truly values work-life balance and professional development.",
      date: "March 2023",
      helpful: 18
    },
    {
      id: 3,
      name: "Aisha Khan",
      role: "Product Manager at " + job.company,
      avatar: "/avatars/avatar-3.png",
      rating: 5,
      comment: "The company culture is excellent with clear goals and expectations. I appreciate the regular feedback sessions and opportunities to lead projects.",
      date: "December 2022",
      helpful: 31
    }
  ];

  // Mock data for success stories
  const successStories = [
    {
      id: 1,
      name: "Vikram Mehta",
      currentRole: "Team Lead at " + job.company,
      avatar: "/avatars/avatar-4.png",
      story: "I joined as a junior developer and within 2 years was promoted to team lead. The company invests in your growth and recognizes hard work.",
      joinedYear: "2021"
    },
    {
      id: 2,
      name: "Neha Gupta",
      currentRole: "Senior Frontend Developer at " + job.company,
      avatar: "/avatars/avatar-5.png",
      story: "The mentorship program here is outstanding. I've grown so much professionally since joining the company.",
      joinedYear: "2020"
    }
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Arjun Singh",
      role: "Engineering Manager at " + job.company,
      quote: "The collaborative culture at " + job.company + " encourages innovation and personal growth. We're constantly pushing boundaries while maintaining a healthy work-life balance.",
      avatar: "/avatars/avatar-6.png"
    },
    {
      id: 2,
      name: "Zara Patel",
      role: "Tech Lead at " + job.company,
      quote: "What I love most about working here is the emphasis on continuous learning and the opportunity to work on challenging projects that make a real impact.",
      avatar: "/avatars/avatar-7.png"
    },
    {
      id: 3,
      name: "Rohan Kapoor",
      role: "Senior Developer at " + job.company,
      quote: "The supportive environment and focus on quality code has helped me become a better developer. The team is amazing and we celebrate our wins together.",
      avatar: "/avatars/avatar-8.png"
    }
  ];

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  // Mock data for application metrics
  const applicationMetrics = {
    recentApplications: 47,
    timeFrame: "7 days",
    averageResponseTime: "3 days",
    interviewRate: "68%"
  };

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <Section className="py-8">
      <div className="mx-auto max-w-container">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Social Proof & Trust</h2>
        </div>

        {/* Application Metrics - Urgency + Trust */}
        <div className="mb-12 bg-blue-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Application Insights</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-5 w-5 text-blue-500" />
                <h4 className="font-medium text-gray-700">Recent Applications</h4>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-blue-600">{applicationMetrics.recentApplications}</span>
                <span className="text-gray-600 text-sm">in the last {applicationMetrics.timeFrame}</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <h4 className="font-medium text-gray-700">Response Time</h4>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-blue-600">{applicationMetrics.averageResponseTime}</span>
                <span className="text-gray-600 text-sm">average</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                <h4 className="font-medium text-gray-700">Interview Rate</h4>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-blue-600">{applicationMetrics.interviewRate}</span>
                <span className="text-gray-600 text-sm">of qualified applicants</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <h4 className="font-medium text-gray-700">Company Rating</h4>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900 mr-2">{averageRating.toFixed(1)}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.round(averageRating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews & Ratings Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-900">Employee Reviews</h3>
              <Badge variant="secondary" className="ml-2 bg-yellow-100 text-yellow-700">
                Verified Employees
              </Badge>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      {review.avatar ? (
                        <div className="relative h-10 w-10">
                          <User className="h-10 w-10 text-gray-400" />
                        </div>
                      ) : (
                        <User className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{review.name}</h4>
                      <p className="text-xs text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{review.comment}</p>
                
                <div className="flex items-center text-xs text-gray-500">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  <span>{review.helpful} found this helpful</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Success Stories</h3>
            </div>
          </div>
          <p className="text-gray-600 mb-6">See how employees have grown their careers at {job.company}</p>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                    {story.avatar ? (
                      <div className="relative h-12 w-12">
                        <User className="h-12 w-12 text-gray-400" />
                      </div>
                    ) : (
                      <User className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-green-600 font-medium mb-3">{story.currentRole}</p>
                    <p className="text-gray-700">&quot;{story.story}&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">Joined in {story.joinedYear}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Quote className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Testimonials</h3>
            </div>
          </div>
          <p className="text-gray-600 mb-6">Hear from our employees in their own words</p>

          {/* Testimonial Carousel */}
          <div className="relative bg-blue-50 rounded-xl p-8 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="h-10 w-10 text-blue-300 mx-auto mb-4" />
              <p className="text-xl text-gray-800 italic mb-6">{testimonials[activeTestimonial].quote}</p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  {testimonials[activeTestimonial].avatar ? (
                    <div className="relative h-12 w-12">
                      <User className="h-12 w-12 text-gray-400" />
                    </div>
                  ) : (
                    <User className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 w-2 rounded-full ${activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-700 mb-4">Ready to join the team at {job.company}?</p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open(`/apply/${encodeURIComponent(job.title)}`, "_blank")}
            >
              Apply for this Position
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}