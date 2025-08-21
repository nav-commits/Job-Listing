"use client";
import { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import jobListings from "../data/data";
import { JobListing } from "../types/data.types";

export default function Home() {
  const [input, setInput] = useState("");     
  const [selected, setSelected] = useState<string[]>([]); 

  // Handle clicking a language/company/position tag
  const handleClick = (item: string) => {
    if (!selected.includes(item)) {
      const newSelected = [...selected, item];
      setSelected(newSelected);
      setInput(newSelected.join(" "));
    }
  };

  // Filter jobs based on input/tags
  const filteredJobs = jobListings.filter((job: JobListing) => {
    const searchTerms = input.split(",").map(term => term.trim().toLowerCase());
    return searchTerms.every(term =>
      job.company.toLowerCase().includes(term) ||
      job.position.toLowerCase().includes(term) ||
      job.languages.some(lang => lang.toLowerCase().includes(term))
    );
  });

  return (
    <>
      {/* Header SVG */}
      <svg
        className="w-full h-auto"
        viewBox="0 0 1440 156"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path id="a" d="M0 0h1440v156H0z" />
        </defs>
        <g fill="hsl(180, 31.40%, 46.90%)" fillRule="evenodd">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <use xlinkHref="#a" />
          <g mask="url(#b)" fill="#63BABA">
            <path d="M495.73 563.419c-51.439-48.795-53.583-130.05-4.788-181.489a128.377 128.377 0 0 1 4.789-4.789l418.16-396.66c55.045-52.215 141.329-52.215 196.374 0 50.418 47.825 53.478 126.835 7.634 178.39l188.06-178.39c55.045-52.215 141.328-52.215 196.373 0 51.44 48.794 53.583 130.049 4.789 181.488a128.377 128.377 0 0 1-4.789 4.789l-418.158 396.658c-55.045 52.215-141.329 52.215-196.374 0-50.418-47.825-53.478-126.835-7.634-178.39L692.104 563.42c-55.045 52.215-141.328 52.215-196.373 0ZM360.464 45.523c-51.44-48.794-53.583-130.05-4.789-181.488a128.377 128.377 0 0 1 4.789-4.79l418.163-396.663c55.046-52.215 141.33-52.215 196.374 0 51.44 48.794 53.583 130.05 4.789 181.488a128.376 128.376 0 0 1-4.789 4.79L556.837 45.522c-55.045 52.215-141.328 52.215-196.373 0Zm-468.795 71.832c-51.439-48.795-53.583-130.05-4.789-181.489a128.377 128.377 0 0 1 4.79-4.788l418.16-396.661c55.045-52.215 141.328-52.215 196.373 0 51.44 48.794 53.583 130.05 4.79 181.488a128.378 128.378 0 0 1-4.79 4.789l-418.16 396.66c-55.045 52.216-141.329 52.216-196.374 0Z" />
          </g>
        </g>
      </svg>

      {/* Search input */}
      <div className="flex justify-center -mt-10 px-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full max-w-4xl bg-white border border-gray-300 placeholder-gray-400 text-base rounded-lg px-6 py-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-[hsl(180,29%,50%)] focus:border-[hsl(180,29%,50%)] z-20"
        />
      </div>

      {/* Cards container */}
      <CardsContainer
        jobs={filteredJobs}
        onTagClick={handleClick}
      />
    </>
  );
}
