import { message } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../utils/firebase";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsFromDB();
  }, []);

  const getProductsFromDB = async () => {
    try {
      setLoading(true);
      const ref = collection(db, "products");
      const productData = await getDocs(ref);
      if (!productData.empty) {
        const allProducts = [];
        productData.forEach((product) => {
          allProducts.push({ ...product.data(), id: product.id });
        });
        setProducts([...allProducts]);
        setLoading(false);
      }
    } catch (err) {
      message.error(err.message);
      setLoading(false);
    }
  };

  const updateProduct = async (id, quantity) => {
    const productIndex = products.findIndex((data) => data.id == id);
    products[productIndex].quantity = quantity;
    setProducts([...products]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        updateProduct
      }}
    >
      {loading ? "Loading..." : children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
