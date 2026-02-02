import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductDetails from "./pages/productdetails";
import ViewDetails from "./pages/viewDetails";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/view-details/:id" element={<ViewDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
