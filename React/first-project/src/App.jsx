import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import SigninForm from "./pages/Signin";
import SignupForm from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/signup" element={<SignupForm />} />


        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
