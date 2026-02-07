import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ViewDetails from "./pages/viewDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorMessage from "./pages/ErrorPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<App />} />
        <Route path="/view-details/:id" element={<ViewDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
