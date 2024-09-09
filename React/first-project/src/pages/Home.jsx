import { useCallback, useContext, useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const abc = useCallback(() => console.log("abc"), []);

  return (
    <div className={`${theme == 'light' ? "bg-white text-black" : "bg-zinc-700 text-white"}`}>
      <h1 className="text-center my-5 text-3xl font-semibold underline">
        Products
      </h1>
      <div className="mx-10 w-3/4 mx-auto ">
        <input
          placeholder="Search"
          type="search"
          className="w-full border-2  p-3 font-bold"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ProductList a={"aaa"} abc={abc} post={post} />
    </div>
  );
}

export default Home;
