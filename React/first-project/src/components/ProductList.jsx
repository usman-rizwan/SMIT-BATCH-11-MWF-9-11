import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ post, abc, a }) => {
  useEffect(() => {
    console.log("ABC FUNCTION CHANGED");
  }, [abc]);

  console.log("Product re rendered");
  return (
    <div className="flex flex-wrap m-4">
      {post.map((data) => (
        <Link
          to={`/product/${data.id}`}
          key={data.id}
          className="lg:w-1/4 md:w-1/2 p-2 w-full"
        >
          <div className="border  rounded-md overflow-hidden">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={data.image}
              />
            </a>
            <div className="mt-4 p-2">
              <h3 className=" text-xs tracking-widest title-font mb-1">
                {data.category}
              </h3>
              <h2 className=" title-font text-lg font-medium">{data.title}</h2>
              <p className="mt-1">${data.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
