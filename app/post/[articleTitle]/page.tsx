// All your imports remain the same
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import Post4 from "@/components/Post4";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
import Breadcrumb from '@/components/Breadcrumb';
import Newsletter from "@/components/Newsletter";
import React from "react";

import { Barlow_Condensed } from 'next/font/google';

const barlow = Barlow_Condensed({
  weight: '600',
  subsets: ['latin'],
});


function getRandomArticles(articles: TArticle[], count: number) {
  const shuffled = [...articles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const randomArticles = getRandomArticles(allArticles, 12);

const formatTitle = (title: string) => title.replace(/[^A-Za-z0-9]+/g, "-");

export function generateStaticParams(): { articleTitle: string }[] {
  return allArticles.map(({ title }) => ({
    articleTitle: formatTitle(title),
  }));
}

const PostPage = async ({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) => {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );

  if (!article) return <h1>Post not found</h1>;

  let headingCount = 0;

  const sameSectionArticles = allArticles.filter(
    (post) => post.section === article.section && post.title !== article.title
  );
  const randomArticlesside = getRandomArticles(sameSectionArticles, 4);

  return (
    <div className="bg-white">
      <div className="mt-10 flex flex-col lg:flex-row gap-10 px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Main Article Section */}
        <div className="flex-1">
          <div className="max-w-7xl text-black mb-4">
            <Breadcrumb />
          </div>

          <Image
            src={`/articles/${article.imgUrl}`}
            width={1000}
            height={1000}
            alt={article.title}
            className="w-full max-w-5xl mx-auto "
          />

          <h1 className={`text-3xl mt-8 text-black ${barlow.className} sm:text-4xl lg:text-5xl font-bold mb-6`}>
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-6">
            <div className="text-gray-800 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between ">
              <div className="flex items-center gap-2">
                <Image
                  src={`/authors/${article.authorName}.jpg`}
                  alt={article.authorName}
                  width={50}
                  height={50}
                  className="rounded-full object-cover object-center size-12"
                />
                <Link href={`/authors/${article.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
                  <p className={`text-lg hover:text-red-500 uppercase tracking-widest ${barlow.className} lg:text-md`}>
                   by {article.authorName}
                  </p>
                </Link>
              </div>

              <div className="w-full flex  items-center lg:mr-14 mt-2 lg:mt-0 lg:w-auto lg:justify-start gap-4 text-sm lg:text-base
               text-gray-500">
                <p>
                  <CreationDate articleNumber={article.articleNumber} />
                </p>
                <p>
                  Read Time: {article.readTime}
                </p>
              </div>
            </div>
          </div>

          

          <div className="text-black/85 tracking-normal text-left mt-6 text-lg leading-relaxed space-y-4 max-w-3xl">
            {article.contents.map((content, index) => {
              const isHeading = content.includes("***");
              if (isHeading) headingCount++;

              return (
                <React.Fragment key={index}>
                  {headingCount === 3 && isHeading && (
                    <div className="mt-12 mb-10 p-6 rounded-xl bg-white ">
                     <div className="border-t-2 border-black font-bold mb-4" />
                     <h2 className="text-3xl font-bold text-black text-left">Want more great  stories from Teen Vogue? Check these
                       out:</h2>
                     <div className="border-b-2 border-black mt-4" />
                      <div className="flex flex-col divide-y divide-gray-200">
                        {allArticles
                          .filter((post) => post.section === article.section && post.title !== article.title)
                          .slice(0, 4)
                          .map((item, idx) => (
                            <Link
                              key={idx}
                              href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                              className="hover:bg-red-100 rounded-lg px-3 py-4 transition"
                            >
                              <p className="text-md font-semibold text-red-600">{item.title}</p>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}

                  {headingCount === 4 && isHeading && (
                    <div className="mt-12 mb-10 p-5 rounded-xl bg-red-50 ">
                      <h3 className="text-xl font-semibold text-red-900 mb-4">
                        💡 Discover More from {article.section}
                      </h3>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        {allArticles
                          .filter((post) => post.section === article.section && post.title !== article.title)
                          .slice(4, 5)
                          .map((item, index) => (
                            <Link
                              key={index}
                              href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                              className="flex items-center gap-4 w-full hover:bg-red-100 transition rounded-lg p-2"
                            >
                              <Image
                                src={`/articles/${item.imgUrl}`}
                                alt={item.title}
                                width={100}
                                height={80}
                                className="rounded-md object-cover w-[100px] h-[80px] shrink-0"
                              />
                              <div className="text-left">
                                <p className="text-sm uppercase text-red-600 font-medium mb-1">
                                  {item.section}
                                </p>
                                <p className="text-base text-gray-800 font-semibold">
                                  {item.title}
                                </p>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}

                  {/\.(jpg)$/i.test(content) ? (
                    <Image
                      width={600}
                      height={400}
                      src={`/articles/${content}`}
                      alt="Image"
                      className="mt-4 w-full rounded-lg"
                    />
                  ) : isHeading ? (
                    <strong className="block text-2xl sm:text-3xl mt-8">
                      {content.replace(/\*\*\*/g, "")}
                    </strong>
                  ) : (
                    <p>{content}</p>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

       

        {/* SIDEBAR STICKY */}
        <div className="mt-16 w-full lg:max-w-sm lg:sticky lg:top-24 self-start">
          <div className="border-t-2 border-black font-bold mb-4" />
          <h2 className="lg:text-xl text-4xl font-bold text-black text-left">Most Popular</h2>
          <div className="border-b-2 border-black mt-4" />

          <div className="grid grid-cols-1 mt-4 lg:mt-0 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {randomArticlesside
             

              .map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                >
                  <div className="w-full">
                    <Post4
                      pimg={`/articles/${post.imgUrl}`}
                      pheading={post.title}
                      pcontent={post.contents}
                      section={post.category}
                      pauthor={post.authorName}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

    
      <Newsletter/>

      <div className="max-w-3xl lg:mx-20 mx-auto mt-16 bg-white/90 backdrop-blur-md border border-red-200 rounded-2xl p-10 ">
  <h2 className="text-4xl font-bold text-gray-900 mb-8 relative">
    Meet the Author
    <span className="absolute left-0 -bottom-2 w-12 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></span>
  </h2>
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
    <Image
      src={`/authors/${article.authorName}.jpg`}
      alt={article.authorName}
      width={120}
      height={120}
      className="rounded-xl object-cover shadow-md border-2 border-red-300"
    />
    <div className="text-gray-700 max-w-xl">
      <h3 className="text-2xl font-semibold text-black hover:text-red-600 hover:cursor-pointer mb-2">
        {article.authorName}
      </h3>
      <p className="text-base mb-4 leading-relaxed text-gray-600">
        {`Bringing words to life, ${article.authorName} crafts compelling narratives that inform, inspire, and ignite curiosity. Their work is a blend of depth, clarity, and creativity.`}
      </p>
      <Link
        href={`/authors/${article.authorName
          .replace(/[^A-Za-z0-9]+/g, "-")
          .toLowerCase()}`}
        className="inline-flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-lg text-sm font-medium shadow transition duration-300"
      >
        Read Full Bio
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  </div>
</div>

     


      {/* EXPLORE MORE SECTION */}
      <div className="max-w-7xl my-20 mx-auto">
        <div className="border-t-2 border-black font-bold mb-4" />
        <h2 className="text-4xl font-bold text-black text-center">EXPLORE MORE</h2>
        <div className="border-b-2 border-black mt-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
          {randomArticles.map((post, index) => (
            <Link
              key={index}
              href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              passHref
            >
              <div className="bg-grey-200 px-4 md:px-0">
                <Posts
                  pimg={`/articles/${post.imgUrl}`}
                  pheading={post.title}
                  pcontent={post.contents}
                  articleNumber={post.articleNumber}
                  section={post.category}
                  pauthor={post.authorName}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
