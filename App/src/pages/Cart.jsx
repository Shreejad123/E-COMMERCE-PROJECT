import { useState } from "react";
function Cart() {
  const storedProduct = JSON.parse(localStorage.getItem("cartProduct"));

  return (
    <div>
      <h2>{storedProduct?.title}</h2>
      <p>Price: ${storedProduct?.price}</p>
    </div>
  );
}

export default Cart;
