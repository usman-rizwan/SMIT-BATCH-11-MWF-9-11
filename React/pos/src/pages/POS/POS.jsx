import { Button, Image, Input, Select } from "antd";
import { signOut } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/Products";
import { DeleteOutlined } from "@ant-design/icons";
import {
  Firestore,
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { AuthContext } from "../../context/Auth";
import { Link } from "react-router-dom";

//1.Get Products
//2.Add to Cart on Click
//3.Add Sale
//4.Stocl se kam bhe hoga

function POS() {
  const { products, updateProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [paymentMode, setPaymentMode] = useState("cash");

  const addToCart = (data) => {
    const productIndex = cart.findIndex((product) => product.id == data.id);
    if (productIndex == -1) {
      setCart([
        ...cart,
        {
          id: data.id,
          price: data.price,
          title: data.title,
          quantity: 1,
          discount: 0,
          totalQuantity: data.quantity,
        },
      ]);
    }
  };

  const updateQuantity = (id, quantity) => {
    // object ka index findout kya jisko mein ne update krna he
    const productIndex = cart.findIndex((product) => product.id == id);
    //array mein us index ke object pe jao , quantity wo krdo jo user ne di he
    cart[productIndex].quantity = quantity;
    //updated object cart mein set krdo
    setCart([...cart]);
  };

  const updateDiscount = (id, quantity) => {
    // object ka index findout kya jisko mein ne update krna he
    const productIndex = cart.findIndex((product) => product.id == id);
    //array mein us index ke object pe jao , quantity wo krdo jo user ne di he
    cart[productIndex].discount = quantity;
    //updated object cart mein set krdo
    setCart([...cart]);
  };
  const removeFromCart = (id, quantity) => {
    // object ka index findout kya jisko mein ne update krna he
    const productIndex = cart.findIndex((product) => product.id == id);
    cart.splice(productIndex, 1);
    setCart([...cart]);
  };

  const totalPrice = cart.reduce(
    (value, obj) => value + obj.quantity * obj.price,
    0
  );
  const totalKg = cart.reduce((value, obj) => value + Number(obj.quantity), 0);
  const totalDiscount = cart.reduce(
    (value, obj) => value + Number(obj.discount),
    0
  );

  const addSale = async () => {
    //1.Sale add krni he
    //2.Stock se maal kam krna he
    try {
      const obj = {
        item: cart,
        price: totalPrice,
        discount: totalDiscount,
        kgs: totalKg,
        createdAt: serverTimestamp(),
        userId: user?.uid,
        paymentMode,
      };
      console.log(obj);

      cart.map(async (data) => {
        const docRef = doc(db, "products", data.id);
        await updateDoc(docRef, {
          quantity: data.totalQuantity - data.quantity,
        }).then(() =>
          updateProduct(data.id, data.totalQuantity - data.quantity)
        );
      });
      const saleRef = collection(db, "sales");
      await addDoc(saleRef, obj);
      console.log("obj->", obj);
      setCart([]);
    } catch (err) {}
  };

  return (
    <div>
      <div className="flex justify-between p-2 border-b shadow">
        <h1>POS</h1>
        <span>
          <Link to={"/transactions"}>
            <Button>Transactions</Button>
          </Link>
          <Button
          onClick={()=> signOut(auth).then(()=> console.log(
            "User Signed Out"
          ))}
          className="ml-4">Logout</Button>
        </span>
      </div>
      <div className="flex flex-grow h-screen w-screen">
        {/* products */}
        <div className="w-1/2 border-r-2 border-r-gray-300 flex-grow">
          <h1 className="text-center my-6 text-2xl">Products</h1>
          <div className="grid grid-cols-3 gap-3 m-2">
            {products.map((data) => {
              const isAdded = cart.find((product) => product.id == data.id);
              return (
                <div
                  onClick={() => addToCart(data)}
                  key={data.id}
                  className={`flex flex-col 
                border cursor-pointer ${isAdded && "bg-blue-200"}
                justify-center items-center`}
                >
                  <h1 className="font-medium mt-2 text-center">{data.title}</h1>
                  <h1 className="font-medium text-center">{data.price} Rs</h1>
                  <h1 className="font-medium text-center">
                    {data.quantity} kg
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        {/* cart */}
        <div className="w-1/2 flex-grow">
          <h1 className="text-center my-6 text-2xl">Cart</h1>

          {cart.length && (
            <div className="flex border-b-2 my-2 p-2">
              <h1 className="w-40">Name</h1>
              <h1 className="w-20 font-medium text-center">Kg</h1>
              <h1 className="w-20 font-medium text-center">Price</h1>
              <h1 className="w-20 font-medium text-center">Disc</h1>
              <h1 className="w-32 font-medium text-center">T.Price</h1>
            </div>
          )}

          {cart.map((product) => {
            return (
              <div className="flex my-2 p-2" key={product.id}>
                <h1 className="w-40">{product.title}</h1>
                <Input
                  type="number"
                  value={product.quantity}
                  className="w-20 text-center"
                  placeholder="Qauntity"
                  onChange={(e) => updateQuantity(product.id, e.target.value)}
                />
                <h1 className="w-20 text-center">{product.price}</h1>
                <Input
                  type="number"
                  value={product.discount}
                  className="w-20 text-center"
                  placeholder="Qauntity"
                  onChange={(e) => updateDiscount(product.id, e.target.value)}
                />
                <h1 className="w-32 text-center">
                  {product.quantity * product.price - product.discount}
                </h1>

                <DeleteOutlined
                  className="cursor-pointer"
                  onClick={() => removeFromCart(product.id)}
                />
              </div>
            );
          })}

          {cart.length && (
            <div className="flex border-t-2 my-2 p-2">
              <h1 className="w-40"></h1>
              <h1 className="w-20 font-medium text-center">{totalKg}</h1>
              <h1 className="w-20 font-medium text-center">-</h1>
              <h1 className="w-20 font-medium text-center">{totalDiscount}</h1>
              <h1 className="w-32 font-medium text-center">
                {totalPrice - totalDiscount}
              </h1>
            </div>
          )}

          <Select
            className=" mx-2"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e)}
          >
            <Select.Option value="cash">Cash</Select.Option>
            <Select.Option value="credit">Credit</Select.Option>
          </Select>
          <div>
            <Button
              onClick={() => addSale()}
              size="large"
              className="w-3/4"
              type="primary"
              block
            >
              Add Sale
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default POS;
