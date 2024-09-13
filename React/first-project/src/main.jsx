import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { Toaster } from "sonner";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <ThemeContextProvider>
          <NextUIProvider>
            <App />
            <Toaster />
          </NextUIProvider>
        </ThemeContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  </StrictMode>
);
