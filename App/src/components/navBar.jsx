import "./navbar.css";
function NavBar() {
  return (
    <>
      <div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">Products</a>
          </li>

          <li>
            <div className="search-container">
              <input
                className="form-control search-input"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
