import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";

export const revalidate = 60;
export const dynamicParams = true;

const Blogs = async () => {
  let news = await prisma.blog.findMany();

  async function addBlog(formData) {
    "use server";
    const blog = {
      title: formData.get("title"),
      description: formData.get("description"),
    };
    await prisma.blog.create({ data: blog });
    revalidatePath("/blogs");
  }
  return (
    <div className="">
      {news.map((data) => (
        <Link
          href={`/blogs/${data.id}`}
          key={data.id}
          className="border m-2 rounded p-4 flex"
        >
          <div className="ml-2">
            <h1 className="font-bold">{data?.title}</h1>
            <h1 className="my-2">{data?.desc}</h1>
          </div>
        </Link>
      ))}

      <form action={addBlog} className="flex gap-2 mx-auto">
        <input
          className={"border p-2 mx-2"}
          placeholder={"Title"}
          name={"title"}
        />
        <input
          className={"border p-2 mx-2"}
          placeholder={"Description"}
          name={"description"}
        />
        <input
          className={"bg-pink-300 p-2 px-4 rounded text-white"}
          type={"submit"}
        />
      </form>
    </div>
  );
};

export default Blogs;
