import { notFound } from "next/navigation";

const BlogDetail = async ({ params }) => {
  let news = await fetch(`http://localhost:3000/api/blogs/${params.uuid}`, {
    cache: "no-cache",
  });
  news = await news.json();

  if (news.error) return notFound();
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">{news?.title}</h1>
      <h1 className="text-center">{news?.desc}</h1>
    </div>
  );
};

export default BlogDetail;
