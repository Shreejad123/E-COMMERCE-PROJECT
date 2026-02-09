import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import styles from "./viewDetails.module.css";
import { IoCartSharp } from "react-icons/io5";
import { RiFeedbackFill } from "react-icons/ri";

const ViewDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const handleClick = () => {
    console.log("clicked");
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
        <div>
          <img
            className={styles.image}
            src={products.image}
            alt={products.title}
          />
        </div>
        <div className={styles.section}>
          <h5>{products.title}</h5>
          <div className={styles.paragraph}>
            <p>${products.price}</p>
            <p>Ratings:{products.rating.rate}⭐</p>
            <p>Category:{products.category}</p>
          </div>
          <button
            className={`btn btn-primary ${styles.customBtn}`}
            onClick={handleClick}
          >
            <IoCartSharp size={20} />
            Add to cart
          </button>
          <button className={`btn btn-danger ${styles.customBtn}`}>
            <FaRegHeart size={20} /> Add to wishlist
          </button>
          <button className={`btn btn-success ${styles.customBtn}`}>
            <RiFeedbackFill size={20} />
            Rate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
