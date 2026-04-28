import "./Login.css";
import LoginForm from "../components/LoginForm";
import ring from "../assets/Login_Ring.jpg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">

        {/* LEFT IMAGE */}
        <div className="login-left">
          <img src={ring} alt="ring" />

          <div className="overlay-text">
            <p>THE ARTISAN COLLECTION</p>
            <h1>
              Crafting moments <br /> into eternity.
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <LoginForm />
        </div>

      </div>
    </div>
  );
};

export default Login;