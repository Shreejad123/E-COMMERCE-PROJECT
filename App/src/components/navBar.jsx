import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import LanguageDropdown from "./languageDropdown";

function NavBar() {
  return (
    <>
      <div>
        <ul className="Navbar">
          <li>
            <span>
              <IoCartSharp size={25} />
              &nbsp;&nbsp;ShopEase
            </span>
          </li>
          <ul className="iconsContainer">
            <li className="icons">
              <FaSearch size={22} />
            </li>
            <li className="icons">
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
