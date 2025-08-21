"use client";
import Image from "next/image";

interface CardProps {
  company: string;
  logo: string;
  new?: boolean;
  featured?: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  onClick?: (item: string) => void;
}

const Card: React.FC<CardProps> = ({
  company,
  logo,
  new: isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
  languages,
  onClick
}) => {
 
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center gap-8">
        <div className="flex items-start gap-6 flex-1">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={100}
            height={100}
            className="rounded-full flex-shrink-0"
          />
          <div className="flex flex-col gap-2">
            <div className="flex space-x-3">
              <h2 className="text-lg text-[hsl(180,29%,50%)] font-bold">
                {company}
              </h2>
              {isNew && (
                <span className="bg-[hsl(180,29%,50%)] text-white text-sm font-bold px-2 py-1 rounded-full">
                  NEW!
                </span>
              )}
              {featured && (
                <span className="bg-gray-800 text-white text-sm font-bold px-2 py-1 rounded-full">
                  FEATURED
                </span>
              )}
            </div>
            <p className="font-bold text-xl">{position}</p>
            <div className="flex flex-wrap gap-8 text-gray-600 mt-3">
              <span>{postedAt}</span>
              <span>{contract}</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          {languages.map((lang) => (
            <span
              key={lang}
              className="cursor-pointer bg-[hsl(180,52%,96%)] text-[hsl(180,29%,50%)] text-sm font-bold px-3 py-1 rounded"
              onClick={() => onClick?.(lang)}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
