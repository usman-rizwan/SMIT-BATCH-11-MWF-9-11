import { createContext } from "react";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  <ProductContext.Provider>{children}</ProductContext.Provider>;
}

export default ProductContextProvider;
