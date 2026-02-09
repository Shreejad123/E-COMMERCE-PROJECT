import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import styles from "./viewDetails.module.css";
import { IoCartSharp } from "react-icons/io5";
import { RiFeedbackFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "./toastmessage";

const ViewDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const handleClick = () => {
    toast.success("Added to cart!", { autoClose: 10000 });
    console.log("cliked on toast");
  };
  const showToastMessage = () => {
    toast.success("Added to Wishlist!", { autoClose: 10000 });
    console.log("cliked on toast");
  };
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

  return (
    <div>
      <div className={styles.card}>
        <h5>{products.title}</h5>

        <div>
          <img
            className={styles.imageSection}
            src={products.image}
            alt={products.title}
          />
        </div>
        <div className={styles.section}>
          <div className={styles.paragraph}>
            <p>${products.price}</p>
            <p>{products.rating.rate}⭐</p>
            <p>Category:{products.category}</p>
            <p>{products.description}</p>
          </div>
          <button
            className={`btn btn-primary ${styles.customBtn}`}
            onClick={handleClick}
          >
            <IoCartSharp size={20} />
            Add to cart
          </button>
          <button
            className={`btn btn-danger ${styles.customBtn}`}
            onClick={showToastMessage}
          >
            <FaRegHeart size={20} /> Add to wishlist
          </button>
          <button className={`btn btn-success ${styles.customBtn}`}>
            <RiFeedbackFill size={20} />
            Rate Now
          </button>
          <ToastProvider></ToastProvider>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
