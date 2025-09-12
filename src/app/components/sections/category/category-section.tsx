"use client";

import { useState } from "react";
import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, DollarSign, MapPin } from "lucide-react";
import Image from "next/image";

type CategoryCardProps = {
  title: string;
  company: string;
  location: string;
  salary?: string;
  logo?: string;
  isActive?: boolean;
};

type CategorySectionProps = {
  title: string;
  description?: string;
  filters: string[];
  cards: CategoryCardProps[];
};

const CategoryCard = ({ card }: { card: CategoryCardProps }) => {
  // Determine the link based on the card type
  const getDetailLink = () => {
    // This is a simple implementation - you might want to use a more robust approach
    // based on your actual data structure
    if (card.company === "Udemy" || card.company === "Coursera" || card.company === "Skillshare") {
      return `/courses/${encodeURIComponent(card.title)}`;
    } else if (card.location === "Virtual") {
      return `/mentorships/${encodeURIComponent(card.title)}`;
    } else if (card.salary?.includes("/month") || card.salary?.includes("stipend")) {
      return `/internships/${encodeURIComponent(card.title)}`;
    } else {
      return `/jobs/${encodeURIComponent(card.title)}`;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.company}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {card.logo && (
              <Image 
                src={card.logo} 
                alt={card.company} 
                width={32} 
                height={32} 
                className="h-8 w-8 object-contain" 
              />
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <MapPin size={14} />
          <span>{card.location}</span>
        </div>
        
        <div className="flex items-center gap-1 text-xs font-medium text-blue-600 mb-4">
          <DollarSign size={14} />
          <span>{card.salary}</span>
        </div>
        
        <a href={getDetailLink()}>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-1 border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700 group flex items-center justify-center gap-1"
          >
            View details
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default function CategorySection({ title, description, filters, cards }: CategorySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>(filters[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleItems = 4;
  const totalItems = cards.length;
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < totalItems - maxVisibleItems;
  
  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Section className="py-10">
      <div className="mx-auto max-w-container">
        {/* Title and View All row */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{title}</h2>
            {description && <p className="text-gray-600 text-sm md:text-base hidden md:block">{description}</p>}
          </div>
          <Button 
            variant="outline" 
            className="border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700 group flex items-center gap-1"
          >
            View all
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === filter 
                ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'}`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Cards slider */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-hidden">
            {cards.slice(currentIndex, currentIndex + maxVisibleItems).map((card, index) => (
              <div key={index} className="h-full transition-all duration-300 hover:translate-y-[-5px]">
                <CategoryCard card={card} />
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-end gap-3 mt-6">
            <button 
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`p-2.5 rounded-full border transition-all duration-200 ${!canScrollLeft 
                ? 'text-gray-300 border-gray-200 cursor-not-allowed' 
                : 'text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-400'}`}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`p-2.5 rounded-full border transition-all duration-200 ${!canScrollRight 
                ? 'text-gray-300 border-gray-200 cursor-not-allowed' 
                : 'text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-400'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}