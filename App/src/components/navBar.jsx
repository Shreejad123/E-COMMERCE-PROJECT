import styles from "./navbar.module.css";
import { IoCartSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import LanguageDropdown from "./languageDropdown";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <nav className={styles.Navbar}>
          <span className={styles.shopEase} onClick={() => navigate("/")}>
            <IoCartSharp size={25} />
            &nbsp;&nbsp;ShopEase
          </span>
          <div className={styles.hamburger} onClick={() => setOpen(!open)}>
            ☰
          </div>
          <ul className={`${styles.menu} ${open ? styles.active : ""}`}>
            <li>
              &nbsp;&nbsp;
              <FaHome
                className={styles.icons}
                size={25}
                onClick={() => navigate("/")}
              />
            </li>

            <li className={styles.icons} onClick={() => navigate("/login")}>
              <IoPersonSharp size={22} />
            </li>
            <li className={styles.icons}>
              <IoCartSharp
                size={22}
                className={styles.icons}
                onClick={() => navigate("/cart")}
              />
            </li>
            <li>
              <FaRegHeart size={20} onClick={() => navigate("/Wishlist")} />
            </li>
            <li>
              <MdGTranslate size={22} />
            </li>
            <li>
              <LanguageDropdown />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
