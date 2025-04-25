"use client"
import React from 'react'
import Image from 'next/image'
import CreationDate from '@/components/Date'
import entertainment from '@/constants/entertainment'
import Posts from '../components/Posts'
import allArticles from '@/constants/all'
import money from '@/constants/money'
import politics from '@/constants/politics'
import usNews from '@/constants/usnews'
import Link from "next/link";
import Post2 from '@/components/Post2'
import Post3 from '@/components/Post3'
import { Barlow_Condensed } from 'next/font/google'

const barlow = Barlow_Condensed({
  weight: '600',
  subsets: ['latin'],
})

function getRandomArticles(articles: TArticle[], count: number) {
  const shuffled = [...articles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const randomArticles = getRandomArticles(allArticles, 12);


const page = () => {

  


  return (
  <>

      <div className='max-w-7xl lg:w-[1400px]  mx-auto'>

        {/* // 1 section */}

     {/* <div className="my-20">
      <div className="border-t-2 border-black font-bold  mb-4" />
      <h2 className="text-4xl font-bold text-black text-center">ETFS</h2>
      <div className="border-b-2 border-black  mt-4" />
    </div> */}

        

      
   

<div className="flex flex-col sm:px-4 lg:px-0 px-6 lg:flex-row justify-between my-20 gap-8">

{/* LEFT: Image with overlay (only sticky on lg+) */}
<div className="w-full lg:w-[700px] relative lg:sticky lg:top-0 lg:h-[800px]">
  {politics.slice(0, 1).map((post, index) => (
    <Link
      key={index}
      href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
      className="block bg-white  shadow hover:shadow-lg transition w-full h-[700px] relative overflow-hidden"
    >
      <Image
        src={`/articles/${post.imgUrl}`}
        alt="Top Story"
        height={500}
        width={1000}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      <div className="absolute bottom-4 left-4 p-4 bg-opacity-60 text-white rounded">
        <h5 className="text-orange-500 font-bold bg-white text-center py-1 mb-4 w-fit px-3">
          Etfs
        </h5>
        <h2 className={`${barlow.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:underline font-bold`}>
          {post.title}
        </h2>
        <div className="mt-3 flex items-center">
          <Image
            src={`/authors/${post.authorName}.jpg`}
            alt={post.authorName}
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <div className="ml-3">
            <Link href={`/authors/${post.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
              <p className={`${barlow.className} hover:text-red-500 text-base sm:text-lg text-white tracking-widest uppercase`}>
                By {post.authorName}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

{/* RIGHT: Posts Grid */}

<div className="w-full lg:w-[700px] grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0">
  {politics.slice(1, 7).map((post, index) => {
    // Desktop-specific heights
    let heightClass = "lg:h-[450px]"; 
    if (index === 0 || index === 3) heightClass = "lg:h-[350px]";
    if (index === 1 || index === 2) heightClass = "lg:h-[450px]";

    return (
      <React.Fragment key={index}>
        {(index === 2 || index === 4) && (
          <div className="col-span-full w-full border-t-2 border-gray-300 my-4" />
        )}

        <Link
          href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          className="bg-white  w-full block"
        >
          <Image
            src={`/articles/${post.imgUrl}`}
            width={1000}
            height={1000}
            alt={post.title}
            className={`w-full object-cover mb-2 h-[300px] sm:h-[350px] ${heightClass}`}
          />
          <h5 className="text-orange-500 font-bold bg-white text-sm text-center mb-2 w-fit ">Etfs</h5>
          <h2 className={`text-2xl sm:text-3xl font-semibold hover:underline tracking-wide text-black ${barlow.className}`}>
            {post.title}
          </h2>

          <div className="w-[30%] mt-2 border-t-[1px] border-red-500" />
          <div className="mt-3 flex items-center">
            <Image
              src={`/authors/${post.authorName}.jpg`}
              alt={post.authorName}
              width={32}
              height={32}
              className="rounded-full object-cover size-8"
            />
            <div className="ml-3">
              <Link href={`/authors/${post.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
                <p className={`${barlow.className} hover:text-red-500 text-base sm:text-lg font-medium tracking-widest text-black uppercase`}>
                  By {post.authorName}
                </p>
              </Link>
              <p className="text-sm text-gray-500">
                <CreationDate articleNumber={post.articleNumber} />
              </p>
            </div>
          </div>
        </Link>
      </React.Fragment>
    );
  })}
</div>

</div>


{/* 2 nd section */}

<div className="my-20">
      <div className="border-t-2 border-black font-bold  mb-4" />
      <h2 className="text-4xl font-bold text-black text-center">FINANCE</h2>
      <div className="border-b-2 border-black  mt-4" />
    </div>

    <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3  w-full  gap-4">
  {entertainment.slice(0,6).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white mt-2">
        <Post2  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
          section={post.category}
        />
      </div>
      
    </Link>
  ))}
</div>

{/* 3rd section */}

<div className="my-20">
      <div className="border-t-2 border-black font-bold  mb-4" />
      <h2 className="text-4xl font-bold text-black text-center">STOCK</h2>
      <div className="border-b-2 border-black  mt-4" />
    </div>

    <div className="grid grid-cols-1  max-w-full">
    {money.slice(0, 3).map((post, index) => (
      <Link
        key={index}
        href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
        passHref
      >
        <div className=" w-full">
          <Post3
            pimg={`/articles/${post.imgUrl}`}
            pheading={post.title}
            pcontent={post.contents}
            pauthor={post.authorName}
            section = {post.category}
            articleNumber={post.articleNumber}
          />
        </div>

        { index!== 2 ? <div className='w-[90%] py-2 border-b-[1px] border-black'></div> : <div></div>}
      </Link>
    ))}
  </div>

  {/* 4th section */}

  <div className="my-20">
      <div className="border-t-2 border-black font-bold  mb-4" />
      <h2 className="text-4xl font-bold text-black text-center">TRADING</h2>
      <div className="border-b-2 border-black  mt-4" />
    </div>

    <div className="flex flex-col sm:px-4 lg:px-0 px-6 lg:flex-row justify-between my-20 gap-8">

{/* LEFT: Image with overlay (only sticky on lg+) */}
<div className="w-full lg:w-[700px] relative lg:sticky lg:top-0 lg:h-[800px]">
  {usNews.slice(0, 1).map((post, index) => (
    <Link
      key={index}
      href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
      className="block bg-white  shadow hover:shadow-lg transition w-full h-[700px] relative overflow-hidden"
    >
      <Image
        src={`/articles/${post.imgUrl}`}
        alt="Top Story"
        height={500}
        width={1000}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      <div className="absolute bottom-4 left-4 p-4 bg-opacity-60 text-white rounded">
        <h5 className="text-orange-500 font-bold bg-white text-center py-1 mb-4 w-fit px-3">
          Trading
        </h5>
        <h2 className={`${barlow.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:underline font-bold`}>
          {post.title}
        </h2>
        <div className="mt-3 flex items-center">
          <Image
            src={`/authors/${post.authorName}.jpg`}
            alt={post.authorName}
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <div className="ml-3">
            <Link href={`/authors/${post.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
              <p className={`${barlow.className} hover:text-red-500 text-base sm:text-lg text-white tracking-widest uppercase`}>
                By {post.authorName}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

{/* RIGHT: Posts Grid */}

<div className="w-full lg:w-[700px] grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0">
  {usNews.slice(1, 7).map((post, index) => {
    // Desktop-specific heights
    let heightClass = "lg:h-[450px]"; 
    if (index === 0 || index === 3) heightClass = "lg:h-[350px]";
    if (index === 1 || index === 2) heightClass = "lg:h-[450px]";

    return (
      <React.Fragment key={index}>
        {(index === 2 || index === 4) && (
          <div className="col-span-full w-full border-t-2 border-gray-300 my-4" />
        )}

        <Link
          href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          className="bg-white  w-full block"
        >
          <Image
            src={`/articles/${post.imgUrl}`}
            width={1000}
            height={1000}
            alt={post.title}
            className={`w-full object-cover mb-2 h-[300px] sm:h-[350px] ${heightClass}`}
          />
          <h5 className="text-orange-500 font-bold bg-white text-sm text-center mb-2 w-fit ">Trading</h5>
          <h2 className={`text-2xl sm:text-3xl font-semibold hover:underline tracking-wide text-black ${barlow.className}`}>
            {post.title}
          </h2>

          <div className="w-[30%] mt-2 border-t-[1px] border-red-500" />
          <div className="mt-3 flex items-center">
            <Image
              src={`/authors/${post.authorName}.jpg`}
              alt={post.authorName}
              width={32}
              height={32}
              className="rounded-full object-cover size-8"
            />
            <div className="ml-3">
              <Link href={`/authors/${post.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
                <p className={`${barlow.className} hover:text-red-500 text-base sm:text-lg font-medium tracking-widest text-black uppercase`}>
                  By {post.authorName}
                </p>
              </Link>
              <p className="text-sm text-gray-500">
                <CreationDate articleNumber={post.articleNumber} />
              </p>
            </div>
          </div>
        </Link>
      </React.Fragment>
    );
  })}
</div>

</div>


{/* 5 section */}

    <div className="my-20">
      <div className="border-t-2 border-black font-bold  mb-4" />
      <h2 className="text-4xl font-bold text-black text-center">EXPLORE MORE</h2>
      <div className="border-b-2 border-black  mt-4" />
    </div>

    <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6  justify-items-center  ">
            {randomArticles
              .map((post, index) => (
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
                      section= {post.category}
                      pauthor= {post.authorName}
                    />
                  </div>
                </Link>
              ))}
          </div>

</div>


































































{/* <main className='mt-16 p-4'>
   
  <Slider/>
    
</main> */}

{/* <div className="bg-white">
<div className="max-w-7xl mx-auto lg:p-4">


<div className='pt-10'>


 
<div className="flex justify-between mb-4 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/etfs"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer text-black font-bold">
      ETFS
    </span>
  </Link>
  <Link href="/etfs">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300  "
    >
      See all
    </button>
  </Link>
</div>

<div className='bg-white mt-8 '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-2  w-full  gap-4">
  {politics.slice(5,7).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white ">
        <Post2  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>

<div className='bg-white mt-4'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full  mx-auto">
  {politics.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>

<div className='mt-10 '>


<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/finance"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:text-blue-700 hover:underline cursor-pointer text-black font-bold">
      FINANCE
    </span>
  </Link>
  <Link href="/finance">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300 "
    >
      See all
    </button>
  </Link>
</div>


<div className='bg-white '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3  w-full  gap-4">
  {money.slice(5,8).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white ">
        <Post2  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>

<div className='bg-white mt-4'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full ">
  {money.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>

<div className='mt-10'>


<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/stock"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:text-blue-700 hover:underline cursor-pointer text-black font-bold">
      STOCK
    </span>
  </Link>
  <Link href="/stock">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300  "
    >
      See all
    </button>
  </Link>
</div>

<div className='bg-white'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full  mx-auto">
  {usNews.slice(0, 4).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>

<div className='mt-10'>


<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/trading"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer text-black font-bold">
      TRADING
    </span>
  </Link>
  <Link href="/trading">
    <button
      className= "px-6 py-2 hover:cursor-pointer  rounded-lg transition duration-300 text-black hover:text-blue-700 "
    >
      See all
    </button>
  </Link>
</div>


<div className='bg-white '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full ">
  {entertainment.slice(1, 13).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>
</div>
</div> */}
{/* <div className='h-20 bg-white'></div> */}



    </>


  )
}


export default page


