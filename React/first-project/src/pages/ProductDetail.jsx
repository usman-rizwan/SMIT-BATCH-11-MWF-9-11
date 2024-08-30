import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  console.log(product);
  return (
    <div className="m-14 flex flex-col justify-center items-center">
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
