"use client";
import { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import jobListings from "../data/data";
import { JobListing } from "../types/data.types";
import HeaderSVG from "./components/HeaderSvg";

export default function Home() {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = (item: string) => {
    if (!selected.includes(item)) {
      const newSelected = [...selected, item];
      setSelected(newSelected);
      setInput(newSelected.join("  "));
    }
  };

  const filteredJobs = jobListings.filter((job: JobListing) => {
    const searchTerms = input
      .split(",")
      .map((term) => term.trim().toLowerCase());
    return searchTerms.every(
      (term) =>
        job.company.toLowerCase().includes(term) ||
        job.position.toLowerCase().includes(term) ||
        job.languages.some((lang) => lang.toLowerCase().includes(term))
    );
  });

  return (
    <>
    <HeaderSVG />
      <div className="flex justify-center -mt-10 px-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full max-w-4xl bg-white border border-gray-200 placeholder-gray-400 text-base rounded-lg px-6 py-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-[hsl(180,29%,50%)] focus:border-[hsl(180,29%,50%)] z-20"
        />
      </div>
      <CardsContainer jobs={filteredJobs} onTagClick={handleClick} />
    </>
  );
}
