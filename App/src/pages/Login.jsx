import "./Login.css";
function Login() {
  return (
    <>
      <div class="login-wrapper">
        <main class="login-card">
          <header>
            <h1>Welcome Back</h1>
            <p>Enter your details to access your account.</p>
          </header>

          <form id="loginForm" novalidate>
            <div class="form-group" id="emailGroup">
              <div class="input-container">
                <input
                  type="email"
                  id="email"
                  class="form-input"
                  placeholder=" "
                  required
                />
                <label for="email" class="floating-label">
                  Email Address
                </label>
              </div>
              <span class="error-message" id="emailError">
                Please enter a valid email address.
              </span>
            </div>

            <div class="form-group" id="passwordGroup">
              <div class="input-container">
                <input
                  type="password"
                  id="password"
                  class="form-input"
                  placeholder=" "
                  required
                />
                <label for="password" class="floating-label">
                  Password
                </label>
                <button
                  type="button"
                  class="password-toggle"
                  id="togglePassword"
                  aria-label="Toggle password visibility"
                >
                  <i class="bi bi-eye"></i>
                </button>
              </div>
              <span class="error-message" id="passwordError">
                Password must be at least 6 characters.
              </span>
            </div>

            <div class="form-options">
              <label class="remember-me">
                <input type="checkbox" id="rememberMe" />
                <span>Remember me</span>
              </label>
              <a href="#" class="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" class="btn-submit">
              Sign In
            </button>

            <div class="create-account">
              Don't have an account? <a href="#">Create an account</a>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;
