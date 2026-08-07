import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./registrationForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import LeftPanel from "./leftSection";
import loginImage from "../assets/depositphotos_42682071-stock-photo-young-woman-looking-at-the.jpg";
// import loginImage from "../assets/doctorRegister.jpg";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
const Registration = () => {
  const navigate = useNavigate();

  const [fullName, setfullName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [fullNameError, setfullNameError] = useState("");
  // const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const validatefullName = (name) => {
    if (!name.trim()) {
      setfullNameError("Full Name is required.");
      return false;
    }
    if (!nameRegex.test(name)) {
      setfullNameError(
        "Only letters, spaces, hyphens, and apostrophes allowed.",
      );
      return false;
    }
    setfullNameError("");
    return true;
  };

  // const validateLastName = (name) => {
  //   if (!name.trim()) {
  //     setLastNameError("Last name is required.");
  //     return false;
  //   }
  //   if (!nameRegex.test(name)) {
  //     setLastNameError(
  //       "Only letters, spaces, hyphens, and apostrophes allowed.",
  //     );
  //     return false;
  //   }
  //   setLastNameError("");
  //   return true;
  // };

  // const validateContact = (number) => {
  //   if (!number.trim()) {
  //     setContactError("Contact number is required.");
  //     return false;
  //   }
  //   if (!phoneRegex.test(number)) {
  //     setContactError("Contact number must be exactly 10 digits.");
  //     return false;
  //   }
  //   setContactError("");
  //   return true;
  // };
  const validateEmail = (emailtest) => {
    if (!emailtest.trim()) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(emailtest)) {
      setEmailError("Email is invalid");
      return false;
    }
    setEmailError("");
    return true;
  };
  const validatePasswords = (pass, confirmPass) => {
    if (!pass) {
      setPasswordError("Password is required.");
      setConfirmPasswordError("Confirm password is required");
      return false;
    }
    if (pass.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return false;
    }
    setPasswordError("");

    if (pass !== confirmPass) {
      setConfirmPasswordError("Passwords do not match.");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isfullNameValid = validatefullName(fullName);
    const isLastNameValid = validateLastName(lastName);
    const isEmailValid = validateEmail(email);
    // const isvalidateContact = validateContact(contactNumber);
    const arePasswordsValid = validatePasswords(password, confirmPassword);

    if (
      isfullNameValid &&
      isLastNameValid &&
      // isvalidateContact &&
      isEmailValid &&
      arePasswordsValid
    ) {
      console.log("Form submitted:", {
        fullName,
        lastName,
        // contactNumber,
        email,
        password,
        confirmPassword,
      });

      const user = { email, password };

      localStorage.setItem("user", JSON.stringify(user));
      console.log("user", user);

      toast.success("Signup successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);

      console.log("Email", email, "password", password);

      setfullName("");
      setLastName("");
      // setContactNumber("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div>
      <div className={styles.user_details}>
        <h2 className={styles.header}>Register</h2>
        <div className={styles.imageContainer}>
          {/* {!loaded && <Skeleton className={styles.skeletonImage} />} */}
          <img
            src={loginImage}
            alt="Background"
            className={styles.image}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className={styles.branding}></div>

        <div className={styles.imageContainer}>{/* <LeftPanel /> */}</div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.user_form}>
            <div className={styles.input}>
              <label htmlFor="fullNameInput">Full Name</label>
              <input
                type="text"
                id="fullNameInput"
                value={fullName}
                placeholder="Enter your First Name"
                className={`form-control ${styles.inputs}`}
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
              />
              {fullNameError && (
                <p className={styles.errorMessage}>{fullNameError}</p>
              )}
            </div>
            {/* <div className={styles.input}>
              <label htmlFor="lastNameInput">Last Name</label>
              <input
                type="text"
                id="lastNameInput"
                value={lastName}
                className={`form-control ${styles.inputs}`}
                placeholder="Enter your Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              {lastNameError && <p className={styles.errorMessage}></p>}
            </div> */}
            <div className={styles.input}>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                className={`form-control ${styles.inputs}`}
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {emailError && (
                <p className={styles.errorMessage}>{emailError}</p>
              )}
            </div>
            {/* <div className={styles.input}>
              <label htmlFor="contactInput">Contact Number</label>
              <input
                type="text"
                className={`form-control ${styles.inputs}`}
                id="contactInput"
                placeholder="Enter your Contact Number"
                value={contactNumber}
                onChange={(e) => {
                  setContactNumber(e.target.value);
                }}
              />
              {contactError && (
                <p className={styles.errorMessage}>{contactError}</p>
              )}
            </div> */}
            <div className={styles.input}>
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                className={`form-control ${styles.inputs}`}
                id="passwordInput"
                value={password}
                placeholder="Enter your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {passwordError && (
                <p className={styles.errorMessage}>{passwordError}</p>
              )}
            </div>
            <div className={styles.input}>
              <label htmlFor="confirmPasswordInput">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${styles.inputs}`}
                id="confirmPasswordInput"
                value={confirmPassword}
                placeholder="Re-Enter Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              {confirmPasswordError && (
                <p className={styles.errorMessage}>{confirmPasswordError}</p>
              )}
            </div>
          </div>
          <div className={styles.link}>
            Already have an account ? &nbsp;<a href="/login">Login</a>
          </div>
          <div className={styles.button}>
            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
