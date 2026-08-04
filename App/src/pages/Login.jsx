// LoginForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import loginImage from "../assets/shopping.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaHandPointDown } from "react-icons/fa";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const viewDemo = () => {
    const demoUser = {
      name: "Demo User",
      role: "demo",
    };

    localStorage.setItem("user", JSON.stringify(demoUser));
    localStorage.setItem("isLoggedIn", "true");
    setErrors({});
    toast.success("logging in as demo user!", { autoClose: 500 });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      // console.log(storedUser);
      // console.log(storedUser.email);
      if (!storedUser || storedUser.email !== email) {
        toast.error("No user found. Please signup first.");
        console.log("email");
        return;
      }

      if (storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("isLoggedIn", "true");
        console.log("logged in");
        console.log(storedUser.email);
        toast.success("logging in!", { autoClose: 10000 });
        setTimeout(() => {
          navigate("/");
        }, 2000);

        console.log("Logging in with:", { email, password });
      } else {
        toast.error("Invalid email or password", { autoClose: 1000 });
      }
    }
  };
  return (
    <div>
      <div id="loginView" className={styles.loginContainer}>
        <div className={styles.branding}>
          <h3 className={styles.loginHeader}>Shopping Cart </h3>
          <div className={styles.imageContainer}>
            {!loaded && <Skeleton className={styles.skeletonImage} />}
            <img
              src={loginImage}
              alt="Background"
              className={styles.image}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.auth}>
            <h3 className={styles.header}>Login</h3>
            <div>
              <div className={styles.email}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
                {errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>
            </div>
            <div className={styles.password}>
              <div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              {" "}
              <button
                type="submit"
                className={`btn btn-primary ${styles.loginBtn}`}
              >
                Sign In
              </button>
            </div>
            <p className={styles.signup}>
              Don't have an account? <Link to="/registration">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
