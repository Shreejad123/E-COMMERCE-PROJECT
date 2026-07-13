import styles from "./wishlistView.module.css";
function WishlistView({ Wishlistproduct, deleteWishlist }) {
  const usdPrice = Wishlistproduct.price;
  const exchangeRate = 95.71;

  const inrPrice = usdPrice * exchangeRate;
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.imageSection}>
            <h5 className={styles.headerTitle}>{Wishlistproduct.title}</h5>
            <img
              className={styles.img}
              src={Wishlistproduct.images}
              alt={Wishlistproduct.title}
            />

            <p className={styles.paragraph}>
              Price:₹{(Wishlistproduct.price * 95.71).toFixed(2)}
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => deleteWishlist(Wishlistproduct.id)}
              className={`btn btn-danger ${styles.customBtn}`}
            >
              Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishlistView;
