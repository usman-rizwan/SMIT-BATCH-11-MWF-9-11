import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
