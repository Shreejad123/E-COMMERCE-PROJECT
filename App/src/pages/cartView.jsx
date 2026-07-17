import styles from "./cartView.module.css";
import { MdDelete } from "react-icons/md";

function CartView({ cartView, deleteCart }) {
  const usdPrice = cartView.price;
  const exchangeRate = 95.71;

  const inrPrice = usdPrice * exchangeRate;
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.imageSection}>
            <h5 className={styles.headerTitle}>{cartView.title}</h5>
            <img
              className={styles.img}
              src={cartView.images}
              alt={cartView.title}
            />
            <p className={styles.price}>
              ₹{(cartView.price * 95.71).toFixed(2)}
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => deleteCart(cartView.id)}
              className={`btn btn-primary ${styles.customBtn}`}
            >
              Remove from Cart <MdDelete />
            </button>
            <button
              type="button"
              className={`btn btn-danger ${styles.customBtn}`}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartView;
