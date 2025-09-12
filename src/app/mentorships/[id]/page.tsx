"use client";

import { useState, useEffect } from "react";

import Navbar from "@/app/components/sections/navbar/default";
import FooterSection from "@/app/components/sections/footer/default";
import MentorHero from "@/app/components/sections/mentorship/mentor-hero";
import MentorOverview from "@/app/components/sections/mentorship/mentor-overview";
import MentorValueSection from "@/app/components/sections/mentorship/mentor-value-section";

import MentorSuccessStories from "@/app/components/sections/mentorship/mentor-success-stories";
import MentorGrowthLink from "@/app/components/sections/mentorship/mentor-growth-link";
import MentorRelated from "@/app/components/sections/mentorship/mentor-related";
import MentorActionBar from "@/app/components/sections/mentorship/mentor-action-bar";
import MentorTrustSafety from "@/app/components/sections/mentorship/mentor-trust-safety";

export default function MentorshipDetailPage({ params }: { params: { id: string } }) {
  // Remove the use(params) call
  // const unwrappedParams = use(params);
  
  const [mentor, setMentor] = useState<{
    id: string;
    name: string;
    role: string;
    company?: string;
    avatar: string;
    domain: string;
    experience: string;
    rating: number;
    reviewCount: number;
    price: string;
    priceType: "session" | "month" | "package";
    isAvailable: boolean;
    bio: string;
    skills: Array<{
      name: string;
      link: string;
    }>;
    languages: string[];
    availability: Array<{
      date: string;
      slots: Array<{
        time: string;
        isAvailable: boolean;
      }>;
    }>;
  } | null>(null);

  useEffect(() => {
    // This would normally be an API call to fetch mentor data
    // For now, we'll mock the data
    if (params.id) { // Use params.id directly instead of unwrappedParams.id
      setMentor({
        id: params.id, // Use params.id directly
        name: "Dr. Rajesh Kumar",
        role: "Senior Data Scientist",
        company: "Google",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        domain: "AI & Machine Learning",
        experience: "8+ years",
        rating: 4.8,
        reviewCount: 124,
        price: "₹2,999",
        priceType: "session",
        isAvailable: true,
        bio: "Dr. Rajesh Kumar is a Senior Data Scientist at Google with over 8 years of experience in machine learning and artificial intelligence. He has led multiple projects implementing advanced ML algorithms for Fortune 500 companies, resulting in significant business impact. Prior to Google, he worked at Microsoft Research where he contributed to cutting-edge research in natural language processing.\n\nRajesh holds a Ph.D. in Computer Science from IIT Delhi and has published several papers in top-tier conferences like NeurIPS and ICML. He is passionate about mentoring aspiring data scientists and has helped over 100 professionals transition into successful data science careers.",
        skills: [
          { name: "Machine Learning", link: "/jobs?skill=machine-learning" },
          { name: "Python", link: "/courses?skill=python" },
          { name: "Deep Learning", link: "/jobs?skill=deep-learning" },
          { name: "TensorFlow", link: "/courses?skill=tensorflow" },
          { name: "Natural Language Processing", link: "/jobs?skill=nlp" },
          { name: "Data Visualization", link: "/courses?skill=data-visualization" },
          { name: "SQL", link: "/jobs?skill=sql" },
          { name: "Cloud Computing", link: "/courses?skill=cloud-computing" }
        ],
        languages: ["English", "Hindi", "Punjabi"],
        availability: [
          {
            date: "Today, 15 Aug",
            slots: [
              { time: "10:00 AM", isAvailable: false },
              { time: "11:30 AM", isAvailable: false },
              { time: "2:00 PM", isAvailable: true },
              { time: "4:30 PM", isAvailable: true }
            ]
          },
          {
            date: "Tomorrow, 16 Aug",
            slots: [
              { time: "9:00 AM", isAvailable: true },
              { time: "11:00 AM", isAvailable: true },
              { time: "3:00 PM", isAvailable: false },
              { time: "5:30 PM", isAvailable: true }
            ]
          },
          {
            date: "Thursday, 17 Aug",
            slots: [
              { time: "10:30 AM", isAvailable: true },
              { time: "1:00 PM", isAvailable: false },
              { time: "3:30 PM", isAvailable: true }
            ]
          },
          {
            date: "Friday, 18 Aug",
            slots: [
              { time: "11:00 AM", isAvailable: true },
              { time: "2:30 PM", isAvailable: true },
              { time: "4:00 PM", isAvailable: false }
            ]
          },
          {
            date: "Saturday, 19 Aug",
            slots: [
              { time: "9:30 AM", isAvailable: true },
              { time: "12:00 PM", isAvailable: true },
              { time: "3:00 PM", isAvailable: true }
            ]
          }
        ]
      });
    }
  }, [params.id]); // Update dependency array to use params.id

  if (!mentor) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading mentor details...</p>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <MentorHero mentor={mentor} />
      <MentorOverview mentor={mentor} />
      <MentorValueSection mentorName={mentor.name} />
      
      <MentorSuccessStories mentorName={mentor.name} />
      <MentorGrowthLink mentor={mentor} />
      <MentorRelated mentorDomain={mentor.domain} />
       <MentorTrustSafety mentorName={mentor.name} isVerified={true} />
      <FooterSection />
      <MentorActionBar mentor={mentor} />
    </div>
  );
}