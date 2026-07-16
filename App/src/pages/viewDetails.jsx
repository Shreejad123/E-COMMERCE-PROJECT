import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "./toastmessage";
import Footer from "../components/footer";
import Navbar from "../components/navBar";
import ViewProduct from "./viewPage";
import styles from "./viewDetails.module.css";
import Cart from "./Cart";
import { IoCartSharp } from "react-icons/io5";
import ProductCardSkeleton from "./Skeleton";
const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
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
    return <ProductCardSkeleton />;
  }
  const addtoCart = () => {
    const existingCart = cart.length
      ? cart
      : JSON.parse(localStorage.getItem("cartProduct")) || [];

    const index = existingCart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      const updatedCart = [...existingCart, { ...product, quantity: 1 }];

      setCart(updatedCart);

      localStorage.setItem("cartProduct", JSON.stringify(updatedCart));

      toast.success("Added to Cart!", { autoClose: 1000 });
      console.log("updatedCart", updatedCart);
    } else {
      toast.info("Product is already in your cart", { autoClose: 1000 });
      console.log("Product already exists in cart");
    }
  };
  const addtoWishlist = () => {
    console.log("Product already ");
    const wishlistCart = wishlist.length
      ? wishlist
      : JSON.parse(localStorage.getItem("wishlistProducts")) || [];

    const index = wishlistCart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      const updatedWishlist = [...wishlistCart, { ...product, quantity: 1 }];

      setWishlist(updatedWishlist);

      localStorage.setItem("wishlistProducts", JSON.stringify(updatedWishlist));

      toast.success("Added to Wishlist!", { autoClose: 1000 });
      console.log("updatedWishlist", updatedWishlist);
    } else {
      toast.info("Product is already in your wishlist", { autoClose: 1000 });
      console.log("Product already exists in wishlist");
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.containerCard}>
        <ViewProduct viewitem={product}></ViewProduct>
        <div className={styles.buttonDiv}>
          <button
            className={`btn btn-primary ${styles.customBtn}`}
            onClick={addtoCart}
          >
            <IoCartSharp size={20} /> Add to cart
          </button>
          <button
            className={`btn btn-danger ${styles.customBtn}`}
            onClick={addtoWishlist}
          >
            <FaRegHeart size={20} /> Add to Wishlist
          </button>
        </div>
      </div>
      <ToastProvider></ToastProvider>
      <Footer></Footer>
    </>
  );
};

export default ViewDetails;
