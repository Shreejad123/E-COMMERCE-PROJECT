import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ViewDetails from "./pages/viewDetails";
import Login from "./pages/login";

import ErrorMessage from "./pages/errorPage";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="/view-details/:id" element={<ViewDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<ErrorMessage />} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
