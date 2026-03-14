import ProductDetails from "./pages/productdetails";
import Header from "./pages/header";
import NavBar from "./components/navBar";

import "./i18n";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <ProductDetails></ProductDetails>
    </>
  );
}

export default App;
