import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Auth/Signin";
import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/Users";
import Products from "./pages/Admin/Products";
import Purchase from "./pages/Admin/Purchase";
import Reports from "./pages/Admin/Reports";
import POS from "./pages/POS/POS.jsx";
import { AuthContext } from "./context/Auth";
import Transactions from "./pages/Transactions/Transactions";

function App() {
  const { user } = useContext(AuthContext);

  // Create a function to determine the initial route based on user's status
  const getInitialRoute = () => {
    if (user?.isLogin && user?.role === "admin") {
      return <Navigate to="/admin/users" />;
    } else if (user?.isLogin) {
      return <Navigate to="/pos" />;
    } else {
      return <SignIn />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={getInitialRoute()} />

        {/* Admin routes, protected */}
        <Route
          path="/admin"
          element={
            user?.isLogin && user?.role === "admin" ? (
              <Dashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="purchases" element={<Purchase />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* POS route */}
        <Route
          path="/pos"
          element={user?.isLogin ? <POS /> : <Navigate to="/" />}
        />
         <Route
          path="/transactions"
          element={user?.isLogin ? <Transactions /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
