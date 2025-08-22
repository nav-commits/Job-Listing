"use client";
import Card from "./Card";
import { JobListing } from "@/types/data.types";

interface CardsContainerProps {
  jobs: JobListing[];
  onTagClick: (item: string) => void;
}

export default function CardsContainer({ jobs, onTagClick }: CardsContainerProps) {
  return (
    <div className="flex flex-col items-center px-4 mt-8">
      <div className="space-y-4 w-full max-w-4xl">
        {jobs.map((job: JobListing) => (
          <Card
            key={job.id}
            company={job.company}
            logo={job.logo}
            new={job.new}
            featured={job.featured}
            position={job.position}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            role={job.role}
            level={job.level}
            onClick={onTagClick}
          />
        ))}
        {jobs.length === 0 && <p>No jobs found.</p>}
      </div>
    </div>
  );
}
