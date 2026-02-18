import WishlistView from "./wishListView";

import styles from "./wishlistView.module.css";
import { useState } from "react";
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
      <h3 className={styles.header}>All Cart Products</h3>
      {storedProduct.map((storedProduct) => (
        <WishlistView
          key={storedProduct.id}
          Wishlistproduct={storedProduct}
        ></WishlistView>
      ))}
    </>
  );
}

export default Wishlist;
