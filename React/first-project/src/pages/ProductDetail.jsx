import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Button } from "antd";
import {
  addItemToLocalStorage,
  getItemsFromLocalStorage,
  isItemAddedToCart,
} from "../utils/localStorage";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { setProducts } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addToCart = () => {
    addItemToLocalStorage({ ...product, quantity: 1 });

    const allProducts = getItemsFromLocalStorage();
    setProducts([...allProducts]);
  };

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

          <Button color="primary" size="large" onClick={addToCart}>
            {isItemAddedToCart(id) ? "Add More" : "Add to Cart"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetail;
