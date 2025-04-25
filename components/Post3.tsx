import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';
import Link from 'next/link';
import { Barlow_Condensed } from 'next/font/google';

const barlow = Barlow_Condensed({
  weight: '600',
  subsets: ['latin'],
});

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  pauthor: string;
  section: string;
  articleNumber: number;
}

const truncateWords = (text: string, wordLimit: number): string => {
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

const Posts: React.FC<PostProps> = ({
  pimg,
  pheading,
  articleNumber,
  pauthor,
  section,
  pcontent,
}) => {
  return (
    <div className="flex flex-col sm:px-4 lg:px-0 px-6 md:flex-row md:space-x-6 py-6 items-start md:items-start lg:items-center">

      {/* Image on top (mobile) or left (desktop/tablet) */}
      <div className="flex-shrink-0 md:w-60 md:h-52 lg:w-80 lg:h-72 overflow-hidden shadow-md ">
        <Image
          src={pimg}
          className="object-cover w-full h-full"
          width={1000}
          height={1000}
          alt="Post Image"
          title="Post"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col px-2 py-2 md:py-0 md:px-0">
        <h5 className="text-orange-500 font-bold capitalize text-md md:text-lg text-left mb-2">
          {section}
        </h5>
        <h4
          className={`text-2xl md:text-3xl ${barlow.className} hover:underline text-gray-900`}
        >
          {truncateWords(pheading, 100)}
        </h4>
        <p className="text-gray-600 mt-2 text-sm md:text-base line-clamp-2">
          {pcontent[0]}
        </p>

        {/* Author & Date section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mt-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 w-full">
            {/* Author Info */}
            <div className="flex items-center gap-2">
              <Image
                src={`/authors/${pauthor}.jpg`}
                alt={pauthor}
                width={50}
                height={50}
                className="rounded-full object-cover object-center size-8"
              />
              <Link
                href={`/authors/${pauthor
                  .replace(/[^A-Za-z0-9]+/g, '-')
                  .toLowerCase()}`}
              >
                <p
                  className={`${barlow.className} hover:text-red-500 text-base md:text-lg font-medium tracking-widest text-black uppercase`}
                >
                  By {pauthor}
                </p>
              </Link>
            </div>

            {/* Date + Read Time */}
            <div className="text-sm md:text-base text-gray-500 mt-2 lg:mt-0">
              <p className="text-gray-600 font-medium">
                <CreationDate articleNumber={articleNumber} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;



{/* <div className="flex-shrink-0 w-80 h-72 overflow-hidden shadow-md ">
        <Image
          src={pimg}
          className="object-cover w-full h-full"
          width={1000}
          height={1000}
          alt="Post Image"
          title="Post"
        />
      </div> */}