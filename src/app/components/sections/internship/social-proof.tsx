"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { CategoryCardProps } from "@/app/data/category-data";
import { useState } from "react";
import { Star, Quote, Award, ChevronLeft, ChevronRight, ThumbsUp,  User } from "lucide-react";


type SocialProofProps = {
  internship: CategoryCardProps;
};

export default function SocialProof({ internship }: SocialProofProps) {
  // State for testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Mock data for reviews
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Former Software Engineering Intern",
      avatar: "/avatars/avatar-1.png",
      rating: 5,
      comment: "This internship was a game-changer for my career. I learned so much about modern development practices and got to work on real projects that impacted users.",
      date: "June 2023",
      helpful: 24
    },
    {
      id: 2,
      name: "Rahul Patel",
      role: "Former Software Engineering Intern",
      avatar: "/avatars/avatar-2.png",
      rating: 4,
      comment: "Great learning experience with supportive mentors. The team was always willing to help and guide me through complex problems.",
      date: "March 2023",
      helpful: 18
    },
    {
      id: 3,
      name: "Aisha Khan",
      role: "Former Software Engineering Intern",
      avatar: "/avatars/avatar-3.png",
      rating: 5,
      comment: "The internship program is well-structured with clear goals and expectations. I appreciated the regular feedback sessions and opportunities to present my work.",
      date: "December 2022",
      helpful: 31
    }
  ];

  // Mock data for success stories
  const successStories = [
    {
      id: 1,
      name: "Vikram Mehta",
      currentRole: "Software Engineer at Google",
      avatar: "/avatars/avatar-4.png",
      story: "This internship helped me land a job at Google. The skills I gained in system design and collaborative coding were exactly what they were looking for in their interview process.",
      internshipYear: "2022"
    },
    {
      id: 2,
      name: "Neha Gupta",
      currentRole: "Frontend Developer at Microsoft",
      avatar: "/avatars/avatar-5.png",
      story: "After completing this internship, I received three job offers! The project I worked on became a key talking point in all my interviews.",
      internshipYear: "2021"
    }
  ];

  // Mock data for testimonials (video-friendly in future)
  const testimonials = [
    {
      id: 1,
      name: "Arjun Singh",
      role: "Now Product Manager at Amazon",
      quote: "The mentorship I received during this internship shaped my entire career trajectory. I learned not just technical skills but also how to think about product development holistically.",
      avatar: "/avatars/avatar-6.png"
    },
    {
      id: 2,
      name: "Zara Patel",
      role: "Now Tech Lead at Flipkart",
      quote: "This internship gave me the confidence to take on leadership roles. The collaborative environment taught me how to work effectively in diverse teams.",
      avatar: "/avatars/avatar-7.png"
    },
    {
      id: 3,
      name: "Rohan Kapoor",
      role: "Now Senior Developer at Infosys",
      quote: "The hands-on experience with cutting-edge technologies during this internship fast-tracked my career growth. Within a year of joining Infosys, I was promoted to a senior role.",
      avatar: "/avatars/avatar-8.png"
    }
  ];

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

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
          <div className="h-8 w-1 bg-purple-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Social Proof & Engagement</h2>
        </div>

        {/* Reviews & Ratings Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-900">Reviews & Ratings</h3>
              <Badge variant="secondary" className="ml-2 bg-yellow-100 text-yellow-700">
                From Past Interns
              </Badge>
            </div>
          </div>

          {/* Average Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-50 rounded-lg p-3 flex items-center">
              <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < Math.round(averageRating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
            <span className="text-gray-600">{reviews.length} reviews from verified interns</span>
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
          <p className="text-gray-600 mb-6">See how this internship has helped launch successful careers</p>

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
                    <p className="text-sm text-gray-500 mt-2">Interned in {story.internshipYear}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section (Video-friendly in future) */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Quote className="h-5 w-5 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">Testimonials</h3>
            </div>
          </div>
          <p className="text-gray-600 mb-6">Hear from our past interns in their own words</p>

          {/* Testimonial Carousel */}
          <div className="relative bg-purple-50 rounded-xl p-8 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="h-10 w-10 text-purple-300 mx-auto mb-4" />
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
                  className={`h-2 w-2 rounded-full ${activeTestimonial === index ? 'bg-purple-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-700 mb-4">Ready to start your journey with {internship.company}?</p>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => window.open(`/apply/${encodeURIComponent(internship.title)}`, "_blank")}
            >
              Apply for this Internship
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}