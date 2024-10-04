import { NextResponse } from "next/server";

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    desc: "Blog Description",
  },
  {
    id: 2,
    title: "Blog 2",
    desc: "Blog Description 2",
  },
  {
    id: 3,
    title: "Blog 3",
    desc: "Blog Description 3",
  },
  {
    id: 4,
    title: "Blog 4",
    desc: "Blog Description 4",
  },
  {
    id: 5,
    title: "Blog 5",
    desc: "Blog Description 5",
  },
];

export async function GET(req, { params }) {
  const blog = blogs.find((data) => data.id == params.id);

  if (blog) {
    return NextResponse.json(blog);
  } else {
    return NextResponse.json({error : "Blog not found"});
  }
}
