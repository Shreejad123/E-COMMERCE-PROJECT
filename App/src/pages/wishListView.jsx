import styles from "./wishlistView.module.css";
function WishlistView({ Wishlistproduct }) {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.imageSection}>
            <h5 className={styles.headerTitle}>{Wishlistproduct.title}</h5>
            <img
              className={styles.img}
              src={Wishlistproduct.image}
              alt={Wishlistproduct.title}
            />

            <p className={styles.paragraph}>Price:$ {Wishlistproduct.price}</p>
          </div>

          <div>
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

export default WishlistView;
