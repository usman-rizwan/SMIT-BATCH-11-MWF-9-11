import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function ProductDetail() {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div
      className="p-14 flex h-screen flex-col justify-center items-center"
      style={{
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
      }}
    >
      <h1 className="text-4xl"> Product Detail</h1>
      {product ? (
        <div className="m-14 w-1/2 flex flex-col justify-center items-center">
          <img className="h-52 w-52" src={product.image} />
          <h1 className="my-3 text-center  text-4xl underline font-semibold">
            {product.title}
          </h1>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetail;
