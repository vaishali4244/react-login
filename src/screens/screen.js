import { Link } from "react-router-dom";

const Screen = () => {
  return (
    <main className="main-container">
      <h3>Welcome to PopX</h3>
      <p className="main-p">Lorem ipsum dolor sit amet,</p>
      <p className="main-p">consectetur adipiscing elit,</p>
      <div className="main-btn">
        <Link to="/signup">
          <button className="signup-btn">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="login-btn">Already Registered? Login</button>
        </Link>
      </div>
    </main>
  );
};
export default Screen;
