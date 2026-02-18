import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ViewDetails from "./pages/viewDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorMessage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import Wishlist from "./pages/wishlist";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="/view-details/:id" element={<ViewDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<ErrorMessage />} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
