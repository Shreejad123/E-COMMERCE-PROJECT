import styles from "./footer.module.css";
import { IoCartSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      {/* Logo */}
      <div className={styles.column}>
        <h2 className={styles.logo} onClick={() => navigate("/")}>
          <IoCartSharp size={28} />
          ShopEase
        </h2>

        <p>Your one-stop shop for quality products.</p>
      </div>

      {/* Links */}
      <div className={styles.column}>
        <h3>Quick Links</h3>

        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/")}>All Products</p>
        <p onClick={() => navigate("/cart")}>Cart</p>
        <p onClick={() => navigate("/wishlist")}>Wishlist</p>
        <p onClick={() => navigate("/login")}>Login</p>
      </div>

      {/* Social */}
      <div className={styles.column}>
        <h3>Follow Me</h3>

        <p>
          <a
            href="https://github.com/Shreejad123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            &nbsp; Github
          </a>
        </p>

        <p>
          <a
            href="https://www.linkedin.com/in/shreeja-d-kotian-b4639a286/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            &nbsp; LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
