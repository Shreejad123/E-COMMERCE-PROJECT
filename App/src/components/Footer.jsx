import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <article>
        <footer className={styles.footer}>
          <h5 className={styles.Header}>ShopEase</h5>
          <ol className={styles.links}>
            <li>Links</li>
            <li>Men's Category.</li>
            <li>Women's Category..</li>
            <li>Jwelery</li>
            <li>Electronics</li>
          </ol>

          <ol className={styles.links}>
            <li>Cart</li>
            <li>Wishlist.</li>
            <li>All Products</li>
          </ol>
        </footer>
      </article>
    </>
  );
}

export default Footer;
