function Cart() {
  const storedCart = JSON.parse(localStorage.getItem("cartProduct")) || [];

  console.log("storedCart", storedCart);
  console.log("storedCart Price", storedCart.price);

  return (
    <div>
      {storedCart.map((storedProduct) => (
        <li key={storedProduct.id}>
          <li>Name: {storedProduct.title}</li>
        </li>
      ))}
    </div>
  );
}

export default Cart;
