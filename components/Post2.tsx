import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';
import { Barlow_Condensed } from 'next/font/google'

const barlow = Barlow_Condensed({
  weight: '600',
  subsets: ['latin'],
})

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  section: string;
  articleNumber: number
}


const truncateWords = (text: string, wordLimit: number): string => {
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};


const Post2: React.FC<PostProps> = ({ pimg, pheading , articleNumber , section}) => {
 
  
  return (
    <div className=" w-full ">
      
        <div className="bg-white sm:px-4 lg:px-0 px-6  w-full">
          <Image
            src={pimg}
            className="h-[400px]  sm:h-[300px] md:h-[250px] xl:h-[300px]  object-cover"
            width={1000}
            height={1000}
            alt="Post Image"
            
            title="Post"
          />
           <h5 className='text-orange-500 font-bold mt-2 capitalize tex-sm text-center  mb-2 w-[10%]'>{section}</h5>
          <h4 className={`mt-3 text-xl hover:underline sm:text-2xl lg:text-3xl tracking-wide text-left text-black  ${barlow.className} font-bold title-font mb-4`}>
          {truncateWords(pheading, 15)}
          </h4>
          <p className="text-gray-500 text-left text-sm"> <CreationDate articleNumber={articleNumber}/></p>
        </div>
      
    </div>
  );
};

export default Post2;

 