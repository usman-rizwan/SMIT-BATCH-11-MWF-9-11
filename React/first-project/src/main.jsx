import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { Toaster } from "sonner";
import ThemeContextProvider from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>

      <NextUIProvider>
        <App />
        <Toaster />
      </NextUIProvider>
      
    </ThemeContextProvider>
  </StrictMode>
);
