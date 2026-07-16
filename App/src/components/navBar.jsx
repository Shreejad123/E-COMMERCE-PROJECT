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
  return (
    <>
      <div className={styles.header}>
        <div className={styles.mobileMenu} onClick={handleClick}>
          {click ? (
            <XMarkIcon className={styles.menuIcon} />
          ) : (
            <Bars4Icon className={styles.menuIcon} />
          )}
        </div>
        <ul
          className={
            click ? `${styles.navOptions} ${styles.active}` : styles.navOptions
          }
        >
          <li className={styles.logo}>
            <span className={styles.shopEase} onClick={() => navigate("/")}>
              <IoCartSharp size={20} />
              &nbsp;ShopEase
            </span>
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/")}>
              <FaHome className={styles.icons} size={20} />
              Home
            </span>
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/login")}>
              <IoPersonSharp size={20} className={styles.icons} /> Login
            </span>
          </li>

          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/cart")}>
              <IoCartSharp size={22} className={styles.icons} />
              Cart
            </span>
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/Wishlist")}>
              <FaRegHeart size={20} className={styles.icons} />
              &nbsp;Wishlist
            </span>
          </li>
          <li onClick={closeMobileMenu}>
            <MdGTranslate size={22} />

            <LanguageDropdown />
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
