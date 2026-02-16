import styles from "./navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import LanguageDropdown from "./languageDropdown";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <ul className={styles.Navbar}>
          <li>
            <span className={styles.shopEase}>
              <IoCartSharp size={25} />
              &nbsp;&nbsp;ShopEase
            </span>
          </li>
          <ul className={styles.iconsContainer}>
            <li className="icons" onClick={() => navigate("/login")}>
              <IoPersonSharp size={22} />
            </li>
            <li className="icons">
              <IoCartSharp size={22} />
            </li>
            <li>
              <MdGTranslate size={22} />
            </li>
            <li>
              <LanguageDropdown />
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
