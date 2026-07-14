import WishlistView from "./wishListView";

import styles from "./wishlistView.module.css";
import { useState } from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { toast, ToastContainer } from "react-toastify";
function Wishlist() {
  const [storedProduct, setStoredProduct] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlistProducts")) || [];
  });

  const deleteWishlist = (id) => {
    const filteredItem = storedProduct.filter((item) => item.id !== id);
    setStoredProduct(filteredItem);
    localStorage.setItem("wishlistProducts", JSON.stringify(filteredItem));
    toast.success("Product removed from wishlist", { autoClose: 1000 });
  };
  return (
    <>
      <NavBar></NavBar>
      <h3 className={styles.header}>All Wishlist Products</h3>
      {storedProduct.map((storedProduct) => (
        <WishlistView
          key={storedProduct.id}
          Wishlistproduct={storedProduct}
          deleteWishlist={deleteWishlist}
          className={styles.card}
        ></WishlistView>
      ))}
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}

export default Wishlist;
