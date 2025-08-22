"use client";
import Image from "next/image";
import clsx from "clsx";

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
  role: string;
  level: string;
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
  role,
  level,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        "bg-white shadow-lg rounded-md p-6 flex flex-col gap-6",
        isNew && featured && "border-l-4 border-[hsl(180,29%,50%)]"
      )}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h2 className="text-md text-[hsl(180,29%,50%)] font-bold">
                {company}
              </h2>
              {isNew && (
                <span className="bg-[hsl(180,29%,50%)] text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW!
                </span>
              )}
              {featured && (
                <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full">
                  FEATURED
                </span>
              )}
            </div>
            <p className="font-bold text-lg hover:text-[hsl(180,29%,50%)] cursor-pointer ">
              {position}
            </p>
            <div className="flex items-center text-gray-600 text-sm">
              <span>{postedAt}</span>
              <span className="before:content-['•'] before:text-gray-400 before:mx-2">
                {contract}
              </span>
              <span className="before:content-['•'] before:text-gray-400 before:mx-2">
                {location}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <span
            onClick={() => onClick?.(role)}
            className="hover:bg-[hsl(180,29%,50%)] hover:text-white  cursor-pointer bg-[hsl(180,52%,96%)] text-[hsl(180,29%,50%)] text-xs font-bold px-3 py-1 rounded"
          >
            {role}
          </span>
          <span
            onClick={() => onClick?.(level)}
            className="hover:bg-[hsl(180,29%,50%)] hover:text-white  cursor-pointer bg-[hsl(180,52%,96%)] text-[hsl(180,29%,50%)] text-xs font-bold px-3 py-1 rounded"
          >
            {level}
          </span>
          {languages.map((lang) => (
            <span
              key={lang}
              className="hover:bg-[hsl(180,29%,50%)] hover:text-white  cursor-pointer bg-[hsl(180,52%,96%)] text-[hsl(180,29%,50%)] text-xs font-bold px-3 py-1 rounded"
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
