import "./productDetails.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./viewDetails.css";

const ViewDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const handleClick = () => {
    console.log("clicked");
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [id]);
  console.log("ID from URL:", id);
  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="grid-container">
      <div className="card">
        <div className="image-section">
          <img src={products.image} alt={products.title} />
        </div>
        <div className="section">
          <h5>{products.title}</h5>

          <p>${products.price}</p>
          <p>Ratings:{products.rating.rate}⭐</p>
          <p>Category:{products.category}</p>
          <button className="btn btn-primary" onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
