export interface JobListing {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: "Frontend" | "Backend" | "Fullstack";
  level: "Junior" | "Midweight" | "Senior";
  postedAt: string;
  contract: "Full Time" | "Part Time" | "Contract";
  location: string;
  languages: string[];
  tools: string[];
}
