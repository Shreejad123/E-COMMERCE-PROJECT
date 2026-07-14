import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./productDetails.module.css";
import Product from "./product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import axios from "axios";
import Footer from "../components/footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        //https://fakestoreapi.com/products
        setProducts(response.data.products);
        console.log("response", response.data.products);
        console.log("category", response.data.products[0].category);
        setFilteredData(response.data.products);

        setFilteredProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const hiddenIds = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 28];
  const visibleProducts = products.filter(
    (product) => !hiddenIds.includes(product.id),
  );
  const categories = [...new Set(visibleProducts.map((item) => item.category))];
  function sortByValue(direction) {
    setSortDirection(direction);
    const sortedProducts = [...visibleProducts].sort((a, b) => {
      if (direction === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setProducts(sortedProducts);
  }
  const filteredProduct = useMemo(() => {
    let result = visibleProducts;

    if (filterCategory !== "") {
      result = result.filter((item) => item.category === filterCategory);
    }

    if (searchInput !== "") {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase()),
      );
    }

    return result;
  }, [visibleProducts, filterCategory, searchInput]);
  return (
    <div className={styles.products}>
      <div className={styles.filter}>
        <select
          className={`filter-group ${styles.categoryDropdown}`}
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          className={styles.categoryDropdown}
          aria-label=".form-select-lg example"
          id="sort-direction"
          onChange={(e) => sortByValue(e.target.value)}
        >
          <option value="asc">Sort by Price low to High:</option>
          <option value="desc">Sort by Price High to Low:</option>
        </select>

        <input
          className={`form-control me-2 ${styles.SearchBar}`}
          value={searchInput}
          placeholder="Search Products..."
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className={styles.gridContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : filteredProduct.length > 0 ? (
          filteredProduct.map((item) => (
            <Product key={item.id} productitem={item} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      <div className={styles.footerSection}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ProductDetails;
