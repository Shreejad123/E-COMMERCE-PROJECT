import styles from "./cartView.module.css";
function CartView({ cartView, deleteCart }) {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.imageSection}>
            <h5 className={styles.header}>{cartView.title}</h5>
            <img
              className={styles.img}
              src={cartView.image}
              alt={cartView.title}
            />

            <p className={styles.paragraph}>Price:$ {cartView.price}</p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => deleteCart(cartView.id)}
              className={`btn btn-primary ${styles.customBtn}`}
            >
              Remove from Cart
            </button>
            <button
              type="button"
              className={`btn btn-primary ${styles.customBtn}`}
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
