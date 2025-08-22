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
    }
  };

  const filteredJobs = jobListings.filter((job: JobListing) => {
    const searchTerms = [...selected, input]
      .map((term) => term.trim().toLowerCase())
      .filter((t) => t.length > 0);
    return searchTerms.every(
      (term) =>
        job.company.toLowerCase().includes(term) ||
        job.position.toLowerCase().includes(term) ||
        job.languages.some((lang) => lang.toLowerCase().includes(term))
    );
  });

  const removeItem = (index: number) => {
    setSelected((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <HeaderSVG />
      <div className="flex justify-center -mt-10 px-4">
        <div className="flex flex-wrap items-center w-full max-w-4xl bg-white border border-gray-200 rounded-lg px-2 py-2 shadow-lg">
          {selected.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-[hsl(180,52%,96%)] text-[hsl(180,29%,50%)] font-semibold rounded mr-1 mb-1"
            >
              <span className="px-2 py-1">{tag}</span>
              <button
                onClick={() => removeItem(index)}
                className="cursor-pointer flex items-center justify-center px-2 py-1 bg-[hsl(180,29%,50%)] text-white rounded-r"
              >
                ✕
              </button>
            </div>
          ))}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow outline-none text-base placeholder-gray-400 bg-transparent min-w-[150px] py-4 px-4"
          />
        </div>
      </div>
      <CardsContainer jobs={filteredJobs} onTagClick={handleClick} />
    </>
  );
}
