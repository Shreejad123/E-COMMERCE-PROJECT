import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./product.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ productitem }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/view-details/${productitem.id}`);
  };

  // Load saved language on refresh
  function getStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(
          <span style={{ color: "blue", letterSpacing: "-1px" }}>☆</span>,
        );
      } else {
        stars.push(
          <span style={{ color: "blue", letterSpacing: "-1px" }}>★</span>,
        );
      }
    }
    return stars;
  }
  return (
    <div className={styles.container}>
      <div className={styles.cardLoading}>
        <div className={styles.card}>
          <div className={styles.imageSection}>
            <img src={productitem.images} alt={productitem.title} />
          </div>
          <div className={styles.section}>
            <h6>{productitem.title}</h6>
            <p className={styles.stars}>★{productitem.rating}</p>
            <p>${productitem.price}</p>

            <button
              onClick={handleClick}
              className={`btn btn-primary ${styles.customBtn}`}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
