import styles from "./product.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { CiStar } from "react-icons/ci";

import { useNavigate } from "react-router-dom";

const Product = ({ productitem }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/view-details/${productitem.id}`);
  };
  function getStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(<span>☆</span>);
      } else {
        stars.push(<span>★</span>);
      }
    }
    return stars;
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageSection}>
          <img src={productitem.image} alt={productitem.title} />
        </div>
        <div className={styles.section}>
          <h5>{productitem.title}</h5>

          <p>${productitem.price}</p>
          <p className="stars">{getStars(productitem.rating.rate)}</p>
          <button
            type="button"
            onClick={handleClick}
            className="btn btn-primary"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
