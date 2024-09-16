import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Auth/Signin";
import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/Users";
import Products from "./pages/Admin/Products";
import Purchase from "./pages/Admin/Purchase";
import Reports from "./pages/Admin/Reports";
import POS from "./pages/POS/POS.JSX";
import { AuthContext } from "./context/Auth";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user.isLogin && user.role == "admin" ? (
              <Navigate to={"/admin/users"} />
            ) : user.isLogin ? (
              <Navigate to={"/pos"} />
            ) : (
              <SignIn />
            )
          }
        />

        <Route path="/admin" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="purchases" element={<Purchase />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="/pos" element={<POS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
