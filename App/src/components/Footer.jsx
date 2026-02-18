import styles from "./Footer.module.css";
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <article>
        <footer className={styles.footer}>
          <h5 className={styles.Header} onClick={() => navigate("/")}>
            {" "}
            <IoCartSharp size={25} />
            ShopEase
          </h5>
          <ol className={styles.links}>
            <li>All Links</li>
            <li>Men's Category.</li>
            <li>Women's Category.</li>
            <li>Jwelery</li>
            <li>Electronics</li>
          </ol>

          <ol className={styles.links}>
            <li onClick={() => navigate("/cart")}>Cart</li>
            <li>Wishlist.</li>
            <li onClick={() => navigate("/")}>All Products</li>
          </ol>
        </footer>
      </article>
    </>
  );
}

export default Footer;
