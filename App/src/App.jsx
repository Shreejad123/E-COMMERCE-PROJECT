import ProductDetails from "./pages/productdetails";
import Header from "./pages/header";
import NavBar from "./components/navBar";
import styles from "./App.module.css";
import "./i18n";

function App() {
  return (
    <>
      <div className={styles.container}>
        <NavBar></NavBar>
        <Header></Header>
        <ProductDetails></ProductDetails>
      </div>
    </>
  );
}

export default App;
