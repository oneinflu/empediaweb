export type CategoryCardProps = {
  experienceLevel?: string; // Make optional
  jobType?: string; // Make optional
  description: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  logo?: string;
  isActive?: boolean;
  workMode?: string; // Add this
  skills?: string[]; // Add this
};

export type CategoryData = {
  title: string;
  description: string;
  filters: string[];
  cards: CategoryCardProps[];
};

export const internshipsData: CategoryData = {
  title: "Internships",
  description: "Gain valuable work experience",
  filters: ["All", "Engineering", "Marketing", "Design", "Finance", "Data Science"],
  cards: [
    {
        title: "SE Intern",
        company: "Google",
        location: "Bangalore",
        salary: "₹40,000 /month",
        logo: "https://logo.clearbit.com/google.com",
        isActive: true,
        description: ""
    },
    {
        title: "UX Design Intern",
        company: "Microsoft",
        location: "Hyderabad",
        salary: "₹35,000 /month",
        logo: "https://logo.clearbit.com/microsoft.com",
        isActive: true,
        description: ""
    },
    {
        title: "Data Science Intern",
        company: "Amazon",
        location: "Pune",
        salary: "₹45,000 /month",
        logo: "https://logo.clearbit.com/amazon.com",
        isActive: true,
        description: ""
    },
    {
        title: "Marketing Intern",
        company: "Flipkart",
        location: "Bangalore",
        salary: "₹25,000 /month",
        logo: "https://logo.clearbit.com/flipkart.com",
        isActive: false,
        description: ""
    },
    {
        title: "Finance Intern",
        company: "HDFC Bank",
        location: "Mumbai",
        salary: "₹30,000 /month",
        logo: "https://logo.clearbit.com/hdfcbank.com",
        isActive: true,
        description: ""
    },
    {
        title: "Product Management Intern",
        company: "Paytm",
        location: "Noida",
        salary: "₹35,000 /month",
        logo: "https://logo.clearbit.com/paytm.com",
        isActive: false,
        description: ""
    }
  ]
};

export const jobsData: CategoryData = {
  title: "Fresher Jobs",
  description: "Start your career journey",
  filters: ["All", "Big brands", "Work from home", "Part-time", "MBA", "Engineering", "Media", "Design", "Data Science"],
  cards: [
    {
        title: "Sales Executive",
        company: "Lishanth Enterprises",
        location: "Vijayawada (Hybrid)",
        salary: "₹2,15,000 - 2,70,000 /year",
        logo: "https://via.placeholder.com/150",
        isActive: true,
        description: ""
    },
    {
        title: "MIS Executive",
        company: "Ashlana Housing Limited",
        location: "Bhiwadi",
        salary: "₹3,60,000 - 4,20,000 /year",
        logo: "https://via.placeholder.com/150",
        isActive: true,
        description: ""
    },
    {
        title: "Field Fundraiser",
        company: "WWF India",
        location: "Hyderabad",
        salary: "₹5,00,000 - 6,50,000 /year",
        logo: "https://logo.clearbit.com/wwf.org",
        isActive: true,
        description: ""
    },
    {
        title: "Administration Associate",
        company: "RK Enterprise",
        location: "Mumbai",
        salary: "₹2,00,000 /year",
        logo: "https://via.placeholder.com/150",
        isActive: true,
        description: ""
    },
    {
        title: "Software Developer",
        company: "TCS",
        location: "Bangalore",
        salary: "₹3,50,000 - 5,00,000 /year",
        logo: "https://logo.clearbit.com/tcs.com",
        isActive: true,
        description: ""
    },
    {
        title: "Digital Marketing Executive",
        company: "Zomato",
        location: "Gurgaon",
        salary: "₹4,00,000 - 5,50,000 /year",
        logo: "https://logo.clearbit.com/zomato.com",
        isActive: false,
        description: ""
    }
  ]
};

export const coursesData: CategoryData = {
  title: "Courses",
  description: "Upskill yourself",
  filters: ["All", "Technical", "Management", "Design", "Marketing", "Finance", "Free"],
  cards: [
    {
        title: "Full Stack Web Development",
        company: "Udemy",
        location: "Online",
        salary: "₹499",
        logo: "https://logo.clearbit.com/udemy.com",
        isActive: true,
        description: ""
    },
    {
        title: "Data Science Bootcamp",
        company: "Coursera",
        location: "Online",
        salary: "₹3,999",
        logo: "https://logo.clearbit.com/coursera.org",
        isActive: true,
        description: ""
    },
    {
        title: "UI/UX Design Masterclass",
        company: "Skillshare",
        location: "Online",
        salary: "₹1,499",
        logo: "https://logo.clearbit.com/skillshare.com",
        isActive: false,
        description: ""
    },
    {
        title: "Digital Marketing Certification",
        company: "Google",
        location: "Online",
        salary: "Free",
        logo: "https://logo.clearbit.com/google.com",
        isActive: true,
        description: ""
    },
    {
        title: "Project Management Professional",
        company: "PMI",
        location: "Online",
        salary: "₹9,999",
        logo: "https://logo.clearbit.com/pmi.org",
        isActive: true,
        description: ""
    },
    {
        title: "Financial Modeling & Valuation",
        company: "Wall Street Prep",
        location: "Online",
        salary: "₹7,499",
        logo: "https://via.placeholder.com/150",
        isActive: false,
        description: ""
    }
  ]
};

export const mentorshipsData: CategoryData = {
  title: "Mentorships",
  description: "Learn from industry experts",
  filters: ["All", "Tech", "Business", "Design", "Career", "Entrepreneurship"],
  cards: [
    {
        title: "Software Engineering Career Path",
        company: "MentorMe",
        location: "Virtual",
        salary: "₹2,999 /month",
        logo: "https://via.placeholder.com/150",
        isActive: true,
        description: ""
    },
    {
        title: "Product Management Essentials",
        company: "ProductHunt",
        location: "Virtual",
        salary: "₹3,499 /month",
        logo: "https://logo.clearbit.com/producthunt.com",
        isActive: true,
        description: ""
    },
    {
        title: "UX Design Portfolio Review",
        company: "DesignGurus",
        location: "Virtual",
        salary: "₹1,999 /session",
        logo: "https://via.placeholder.com/150",
        isActive: false,
        description: ""
    },
    {
        title: "Startup Founder Mentorship",
        company: "YCombinator",
        location: "Virtual",
        salary: "₹5,999 /month",
        logo: "https://logo.clearbit.com/ycombinator.com",
        isActive: true,
        description: ""
    },
    {
        title: "Data Science Career Guidance",
        company: "DataCamp",
        location: "Virtual",
        salary: "₹2,499 /month",
        logo: "https://logo.clearbit.com/datacamp.com",
        isActive: true,
        description: ""
    },
    {
        title: "Marketing Strategy Consultation",
        company: "MarketingPro",
        location: "Virtual",
        salary: "₹3,999 /session",
        logo: "https://via.placeholder.com/150",
        isActive: false,
        description: ""
    }
  ]
};