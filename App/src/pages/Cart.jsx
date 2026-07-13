import Navbar from "../components/navBar";
import CartView from "./cartView";
import Footer from "../components/footer";
import { useState } from "react";
import styles from "./cartView.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "./toastmessage";
function Cart() {
  const [storedProduct, setStoredProduct] = useState(() => {
    return JSON.parse(localStorage.getItem("cartProduct")) || [];
  });

  const deleteCart = (id) => {
    toast.success("Product removed from cart!", { autoClose: 1000 });
    console.log("sucess");

    const filteredItem = storedProduct.filter((item) => item.id !== id);
    setStoredProduct(filteredItem);

    localStorage.setItem("cartProduct", JSON.stringify(filteredItem));
  };
  return (
    <div>
      <Navbar></Navbar>
      <ToastProvider></ToastProvider>
      <h3 className={styles.header}>All Cart Products</h3>
      {storedProduct.map((storedProduct) => (
        <CartView
          key={storedProduct.id}
          cartView={storedProduct}
          deleteCart={deleteCart}
        ></CartView>
      ))}

      <Footer></Footer>
    </div>
  );
}

export default Cart;
