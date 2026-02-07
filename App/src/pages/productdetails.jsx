import styles from "./productDetails.module.css";
import Product from "./product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  function sortByValue(direction) {
    setSortDirection(direction);
    const sortedProducts = [...products].sort((a, b) => {
      if (direction === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setProducts(sortedProducts);
  }
  useEffect(() => {
    if (filterCategory === "") {
      setFilteredData(products);
    } else {
      const newFilteredData = products.filter(
        (item) => item.category === filterCategory,
      );
      setFilteredData(newFilteredData);
    }
  }, [filterCategory, products]);
  return (
    <div>
      <Header></Header>
      <div>
        <select
          className={styles.categoryDropdown}
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          name="fruits"
        >
          <option value="">All Categories</option>
          <option value="men's clothing">Men's Category</option>
          <option value="women's clothing">Women's Category</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
        <select
          className={styles.categoryDropdown}
          aria-label=".form-select-lg example"
          id="sort-direction"
          onChange={(e) => sortByValue(e.target.value)}
          name="fruits"
        >
          <option value="asc">Sort by Price low to High:</option>
          <option value="desc">Sort by Price High to Low:</option>
        </select>
      </div>
      <div className={styles.gridContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Product key={item.id} productitem={item} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
