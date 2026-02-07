import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
function ErrorMessage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/product");
  };
  return (
    <>
      <div className={styles.errorContainer}>
        <img className={styles.imageContainer} src={logo} alt="Logo" />
        <h1 className={styles.errorInfo}> 404 </h1>
        <p className={styles.errorMessage}>
          Oops! The page you're looking for is not here.
        </p>
        <button
          onClick={handleClick}
          className={`btn btn-primary ${styles.customBtn}`}
        >
          Go Back to Home
        </button>
      </div>
    </>
  );
}

export default ErrorMessage;
