
import FooterSection from "./components/sections/footer/default";
import CareerHero from "./components/sections/hero/career-slider";
import Navbar from "./components/sections/navbar/default";
import TrendingSection from "./components/sections/trending/trending-section";
import CategorySection from "./components/sections/category/category-section";
import { internshipsData, jobsData, coursesData, mentorshipsData } from "./data/category-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <CareerHero />
      <TrendingSection />
      <div className="bg-light-blue w-full">
      <CategorySection {...internshipsData} />
      </div>
      <CategorySection {...jobsData} />
      <div className="bg-light-blue w-full">
      <CategorySection {...coursesData} />
      </div>
      <CategorySection {...mentorshipsData} />
      <FooterSection />
    </div>
  );
}
