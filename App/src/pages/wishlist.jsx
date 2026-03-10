import WishlistView from "./wishListView";

import styles from "./wishlistView.module.css";
import { useState } from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
function Wishlist() {
  const [storedProduct, setStoredProduct] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlistProducts")) || [];
  });

  // const deleteWishlist = (id) => {
  //   const filteredItem = storedProduct.filter((item) => item.id !== id);
  //   setStoredProduct(filteredItem);
  //   localStorage.setItem("wishlistProducts", JSON.stringify(filteredItem));
  // };
  return (
    <>
      <NavBar></NavBar>
      <h3 className={styles.header}>All Wishlist Products</h3>
      {storedProduct.map((storedProduct) => (
        <WishlistView
          key={storedProduct.id}
          Wishlistproduct={storedProduct}
        ></WishlistView>
      ))}
      <Footer></Footer>
    </>
  );
}

export default Wishlist;
