import { FaShieldAlt, FaTruck, FaTag } from "react-icons/fa";

function LeftPanel() {
  return (
    <div className="left-panel">
      <div className="logo">
        <h2>🛒 ShopEase</h2>
      </div>

      <div className="welcome-section">
        <h1>
          Welcome to <span>ShopEase!</span>
        </h1>

        <p>Create your account and start your seamless shopping experience.</p>
      </div>

      <div className="illustration">
        <img src="/shopping-illustration.svg" alt="Shopping Illustration" />
      </div>

      <div className="features">
        <div className="feature">
          <FaShieldAlt className="icon" />
          <div>
            <h4>Secure & Safe</h4>
            <p>Your data is 100% protected</p>
          </div>
        </div>

        <div className="feature">
          <FaTruck className="icon" />
          <div>
            <h4>Fast Delivery</h4>
            <p>Get your orders on time</p>
          </div>
        </div>

        <div className="feature">
          <FaTag className="icon" />
          <div>
            <h4>Best Prices</h4>
            <p>Unbeatable deals for you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
