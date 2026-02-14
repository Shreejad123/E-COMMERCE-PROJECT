import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { RiFeedbackFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "./toastmessage";
import Footer from "../components/Footer";
import Navbar from "../components/navBar";
import ViewProduct from "./viewPage";
import styles from "./viewDetails.module.css";
import Cart from "./Cart";
const ViewDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [id]);
  console.log("ID from URL:", id);
  if (!products) {
    return <h2>Loading...</h2>;
  }
  const addtoCart = () => {
    toast.success("Added to Wishlist!", { autoClose: 1000 });
    localStorage.setItem("cartProduct", JSON.stringify(products));

    console.log("Saved to localStorage");
  };

  return (
    <>
      <Navbar></Navbar>
      <ViewProduct viewitem={products}></ViewProduct>

      <button
        className={`btn btn-danger ${styles.customBtn}`}
        onClick={addtoCart}
      >
        <FaRegHeart size={20} /> Add to cart
      </button>
      <button className={`btn btn-success ${styles.customBtn}`}>
        <RiFeedbackFill size={20} />
        Rate Now
      </button>
      <ToastProvider></ToastProvider>

      <Footer></Footer>
    </>
  );
};

export default ViewDetails;
