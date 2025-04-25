import allArticles from "@/constants/all";
import Image from "next/image";
import Link from "next/link";
import CreationDate from "@/components/Date";


const formatName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const AuthorPage = async ({
  params,
}: {
  params: Promise<{ authorName: string }>;
}) => {
  const { authorName } = await params;

  const authorArticles = allArticles.filter(
    (article) => formatName(article.authorName) === authorName
  );

  if (authorArticles.length === 0) {
    return (
        
      <div className="mt-20 text-center text-3xl font-bold text-gray-800">
        Author Not Found
      </div>
    );
  }

  const author = authorArticles[0];

  return (

    <>
    <div className="px-6 md:px-10  lg:px-16 xl:px-24 mt-10">
      {/* Author Info Section */}
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md border border-red-200 rounded-3xl px-8 py-10 mb-16 shadow-2xl">
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
    <Image
      src={`/authors/${author.authorName}.jpg`}
      alt={author.authorName}
      width={120}
      height={120}
      className="rounded-full shadow-xl object-cover size-28 border-4 border-red-300"
    />
    <div className="text-center sm:text-left">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
        {author.authorName}
      </h1>
      <div className="w-20 h-1 bg-red-500 rounded-full mx-auto sm:mx-0 mb-5"></div>
      <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
        With a passion for storytelling and a deep understanding of the subject,{" "}
        <span className="font-semibold">{author.authorName}</span> brings insightful, engaging content to life.
        Their writing blends clarity with creativity, making complex topics approachable.
        Always curious, always learning — they aim to inspire and inform with every article.
      </p>
    </div>
  </div>
</div>


      {/* Articles List */}
      <div className="border-t-2 border-black font-bold mb-4" />
        <h2 className="text-4xl font-bold text-black text-center">Meet the Mind Behind the Words</h2>
        <div className="border-b-2 border-black mt-4" />
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {authorArticles.map((post, index) => (
          <Link
            key={index}
            href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}>

             <Image
              src={`/articles/${post.imgUrl}`}
              width={1000}
              height={1000}
              alt={post.title}
              className='h-[250px] xl:h-[200px] w-full  shadow-md object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110'
              />
            <h2 className='mt-3 text-xl text-left font-bold text-black'>{post.title}</h2>
            <p className="text-gray-500  mt-2 text-sm ">
                    <CreationDate articleNumber={post.articleNumber} />
                  </p>    
          
            
          </Link>
        ))}
      </div>
    </div>

 
     

    </>
  );
};

export default AuthorPage;
