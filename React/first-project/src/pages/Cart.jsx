import { useContext, useEffect, useState } from "react";
import {
  deleteItemInLocalStorage,
  getItemsFromLocalStorage,
} from "../utils/localStorage";
import { Button } from "antd";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { setProducts } = useContext(CartContext);
  const [products, setCartProducts] = useState([]);
  const [abc, setAbc] = useState("");

  useEffect(() => {
    console.log("use effect on delete==>");
    let arr = getItemsFromLocalStorage();
    if (arr.length) {
      setCartProducts([...arr]);
      setProducts([...arr]);
    }
  }, [abc]);

  const deleteItemFromStorage = (id) => {
    deleteItemInLocalStorage(id);
    setAbc(abc + "1");
  };

  const totalPrice = products.reduce(
    (total, products) => total + products.quantity * products.price,
    0
  );

  const totalQuantity = products.reduce(
    (total, products) => total + products.quantity,
    0
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold my-4 text-center">Cart Items</h1>
      <div className="flex gap-3 my-2">
        <div className="flex-grow p-2 border-2 rounded-md cursor-pointer flex flex-col justify-center items-center ">
          <h1 className="font-medium">Total Price</h1>
          <h1 className="font-semibold text-3xl my-1">
            {" "}
            {Math.round(totalPrice)}
          </h1>
        </div>
        <div className="flex-grow p-2 border-2 rounded-md cursor-pointer flex flex-col justify-center items-center ">
          <h1 className="font-medium">Total Quantity</h1>
          <h1 className="font-semibold text-3xl my-1">{totalQuantity}</h1>
        </div>
        <div className="flex-grow p-2 border-2 rounded-md cursor-pointer flex justify-center items-center ">
          <h1 className="font-medium">Proceed to Checkout</h1>
        </div>
      </div>
      {products.map((data) => (
        <div
          key={data.id}
          className="p-2 flex-col items-center  lg:flex-row my-3 flex  border rounded-md"
        >
          <img src={data.image} className="h-36 w-36 rounded-md" />
          <div className="pl-6">
            <h1 className="font-medium text-2xl">{data.title}</h1>
            <h1 className="font-medium text-xl">
              Price = {data.price} , Quantity = {data.quantity}{" "}
            </h1>
            <Button
              onClick={() => deleteItemFromStorage(data.id)}
              className="mt-3"
              danger
            >
              Remove item
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
