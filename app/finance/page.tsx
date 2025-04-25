'use client';

import React, { useState } from 'react';
import Post3 from '@/components/Post3';
import Post2 from '@/components/Post2';
import entertainment from '@/constants/entertainment';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';


const Finance = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Initial visible posts after index 14
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4); // Load 4 more
      setIsLoading(false);
    }, 500); // Optional delay to simulate loading
  };

  return (
    <>
      <div className="max-w-7xl lg:p-4 mx-auto">
        <div className="text-black">
          <Breadcrumb />
        </div>

        <div className="text-center mb-10 px-4">
          <Link href="/etfs">
            <span className="inline-block text-2xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-wider text-gray-900 border-b-4 border-red-600 pb-2 transition-colors duration-300">
              FINANCE
            </span>
          </Link>
        </div>

        {/* First 4 Posts */}
        <div className="grid grid-cols-1 max-w-full">
          {entertainment.slice(0, 4).map((post, index) => (
            <Link
              key={index}
              href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              passHref
            >
              <div className="w-full">
                <Post3
                  pimg={`/articles/${post.imgUrl}`}
                  pheading={post.title}
                  pcontent={post.contents}
                  pauthor={post.authorName}
                  section={post.category}
                  articleNumber={post.articleNumber}
                />
              </div>
              <div className="w-[90%] py-2 border-b-[1px] border-black"></div>
            </Link>
          ))}
        </div>

        {/* Post2 Grid (Index 4 to 10) */}
        <div className="grid mt-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4">
          {entertainment.slice(4, 10).map((post, index) => (
            <Link
              key={index}
              href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              passHref
            >
              <div className="bg-white mt-4">
                <Post2
                  pimg={`/articles/${post.imgUrl}`}
                  pheading={post.title}
                  pcontent={post.contents}
                  section={post.category}
                  articleNumber={post.articleNumber}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="w-[90%] my-20 border-b-[1px] border-black"></div>

       

        {/* Load More Section (Starting from index 14) */}
        <div className="grid grid-cols-1 max-w-full">
          {entertainment.slice(10, 10 + visibleCount).map((post, index) => (
            <Link
              key={index}
              href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              passHref
            >
              <div className="w-full">
                <Post3
                  pimg={`/articles/${post.imgUrl}`}
                  pheading={post.title}
                  pcontent={post.contents}
                  pauthor={post.authorName}
                  section={post.category}
                  articleNumber={post.articleNumber}
                />
              </div>
              <div className="w-[90%] py-2 border-b-[1px] border-black"></div>
            </Link>
          ))}
        </div>

        {/* Load More Button or Loading... */}
        {14 + visibleCount < entertainment.length && (
          <div className="flex justify-center mt-10">
          {isLoading ? (
  <div className="flex justify-center items-center space-x-2 h-20">
    <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
    <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
    <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
  </div>
) : (
  <button
    onClick={loadMore}
    className="bg-red-600 text-white px-10 py-4 rounded-md 
           hover:bg-red-700 hover:scale-105 
           transition-transform duration-300 ease-in-out 
           shadow-md hover:shadow-lg hover:cursor-pointer 
           uppercase tracking-wider"
  >
    Load More
  </button>
)}
          </div>
        )}
      </div>
    </>
  );
};

export default Finance;
