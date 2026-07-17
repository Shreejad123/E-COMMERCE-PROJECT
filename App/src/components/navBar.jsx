import styles from "./navBar.module.css";
import { IoCartSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import LanguageDropdown from "./languageDropdown";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
function NavBar() {
  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  console.log(click);
  return (
    <>
      <div className={styles.NavBar}>
        <h4 className={styles.header}>
          <IoCartSharp /> ShopEase
        </h4>
        <ul
          className={`${styles.navOptions} ${click ? styles.active : "navOptions"}`}
        >
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/")}>
              <FaHome className={styles.icons} />
              &nbsp;Home
            </span>
          </li>

          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/login")}>
              <IoPersonSharp className={styles.icons} /> &nbsp; Login
            </span>
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/cart")}>
              <IoCartSharp className={styles.icons} />
              &nbsp;Cart
            </span>
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/Wishlist")}>
              <FaRegHeart className={styles.icons} />
              &nbsp;Wishlist
            </span>
          </li>
          <li onClick={closeMobileMenu}>
            <MdGTranslate className={styles.icons} />

            <LanguageDropdown />
          </li>
        </ul>
      </div>
      <div className={styles.header}>
        <div className={styles.mobileMenu} onClick={handleClick}>
          {click ? (
            <XMarkIcon className={styles.menuIcon} />
          ) : (
            <Bars4Icon className={styles.menuIcon} />
          )}
        </div>
      </div>
    </>
  );
}
export default NavBar;
