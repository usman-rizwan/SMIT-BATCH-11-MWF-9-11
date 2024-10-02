import Image from "next/image";

const BlogDetail = async ({ params }) => {
  let news = await fetch(
    `https://api.thenewsapi.com/v1/news/uuid/${params.uuid}?api_token=4kg9t6R9h2j1gFnP6oerJz0h6BHr9ZebTXA3GUl6`
  );
  news = await news.json();
  return (
    <div>
        <Image 
        className="mx-auto my-10"
        src={news.image_url} height={100}
        width={500} objectFit="contain" />
      <h1 className="text-center font-bold text-4xl">{news?.title}</h1>
      <h1 className="text-center">{news?.description}</h1>
    </div>
  );
};

export default BlogDetail;
