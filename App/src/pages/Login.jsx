import "./Login.css";
function Login() {
  return (
    <>
      <div className="login-wrapper">
        <main className="login-card">
          <header>
            <h1 className="header">Welcome Back</h1>
            <p className="info">Enter your details to access your account.</p>
          </header>
          <form id="loginForm">
            <div className="form-group" id="emailGroup">
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="floating-label">
                  Email Address
                </label>
              </div>
            </div>
            <div className="form-group" id="passwordGroup">
              <div className="input-container">
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="password" className="floating-label">
                  Password
                </label>
                <button
                  type="button"
                  className="password-toggle"
                  id="togglePassword"
                  aria-label="Toggle password visibility"
                ></button>
              </div>
            </div>
            <div className="form-options">
              {" "}
              <a href="#" className="forgot-password">
                {" "}
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-submit">
              Sign In
            </button>

            <div className="create-account">
              Don't have an account? <a href="#">Create an account</a>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;
