import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "./toastmessage";
import Footer from "../components/Footer";
import Navbar from "../components/navBar";
import ViewProduct from "./viewPage";
import styles from "./viewDetails.module.css";
import Cart from "./Cart";
import { IoCartSharp } from "react-icons/io5";
const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);
  console.log("ID from URL:", id);
  if (!product) {
    return <h2>Loading...</h2>;
  }
  const addtoCart = () => {
    // 1. Load existing cart from state or localStorage
    const existingCart = cart.length
      ? cart
      : JSON.parse(localStorage.getItem("cartProduct")) || [];

    // 2. Check if product already exists
    const index = existingCart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      // Product does not exist → add it
      const updatedCart = [...existingCart, { ...product, quantity: 1 }];

      // 3. Update React state
      setCart(updatedCart);

      // 4. Save entire cart to localStorage
      localStorage.setItem("cartProduct", JSON.stringify(updatedCart));

      toast.success("Added to Cart!", { autoClose: 1000 });
      console.log("updatedCart", updatedCart);
    } else {
      toast.info("Product is already in your cart", { autoClose: 1000 });
      console.log("Product already exists in cart");
    }
  };

  return (
    <>
      <div>
        <Navbar></Navbar>
        <ViewProduct viewitem={product}></ViewProduct>
        <div className={styles.buttonDiv}>
          <button
            className={`btn btn-primary ${styles.customBtn}`}
            onClick={addtoCart}
          >
            <IoCartSharp size={20} /> Add to cart
          </button>
          <button className={`btn btn-danger ${styles.customBtn}`}>
            <FaRegHeart size={20} /> Add to Wishlist
          </button>
          <button className={`btn btn-success ${styles.customBtn}`}>
            <RiFeedbackFill size={20} />
            Rate Now
          </button>
        </div>
        <ToastProvider></ToastProvider>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ViewDetails;
