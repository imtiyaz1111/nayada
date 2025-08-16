import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/nayadalogo.png";
import loginImg from "../../assets/login.png";

const Login = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 h-100 g-0">
        {/* Left Side - Form */}
        <div
          className="col-12 col-md-6 text-dark p-5 d-flex flex-column justify-content-center"
          style={{ backgroundColor: "rgb(243, 243, 243)" }}
        >
          <h3 className="fw-bold text-center mb-2 text-black">Sign In</h3>
          <p className="text-black text-center mb-4">
            Sign in to your account to start using Dompact
          </p>

          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label fw-semibold text-black">Email</label>
            <input
              type="email"
              className="form-control rounded-pill"
              placeholder="hello@example.com"
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label className="form-label fw-semibold text-black">Password</label>
            <div className="input-group">
              <input
                type="password"
                className="form-control rounded-start-pill"
                placeholder="••••••••"
              />
              <span className="input-group-text rounded-end-pill bg-white">
                <i className="bi bi-eye-slash"></i>
              </span>
            </div>
          </div>

          {/* Remember + Forgot Password */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
            <div className="d-flex align-items-center mb-2 mb-md-0">
              <input type="checkbox" className="form-check-input me-2" />
              <label className="form-check-label text-black small">
                Remember my preference
              </label>
            </div>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "#5bcfc5" }}
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            className="btn text-white rounded-pill w-100 mb-3"
            style={{ backgroundColor: "#5bcfc5" }}
          >
            Sign In
          </button>

          {/* Social Login */}
          <div className="text-center mb-2 text-black">Or continue with</div>
          <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap">
            <button
              className="btn rounded-circle"
              style={{ backgroundColor: "#4267B2", color: "white" }}
            >
              <FaFacebookF />
            </button>
            <button
              className="btn rounded-circle"
              style={{ backgroundColor: "#DB4437", color: "white" }}
            >
              <FaGooglePlusG />
            </button>
            <button
              className="btn rounded-circle"
              style={{ backgroundColor: "#0077B5", color: "white" }}
            >
              <FaLinkedinIn />
            </button>
            <button
              className="btn rounded-circle"
              style={{ backgroundColor: "#1DA1F2", color: "white" }}
            >
              <FaTwitter />
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-black">
            Not registered?{" "}
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "#5bcfc5" }}
            >
              Register
            </a>
          </p>
        </div>

        {/* Right Side - Image & Logo */}
        <div className="col-12 col-md-6 h-100 p-5 text-center d-flex flex-column justify-content-center bg-white">
          <img
            src={logo}
            alt="Dompet Logo"
            width="100"
            className="mx-auto mb-3"
          />
          <p className="text-muted px-3">
            Your true value is determined by how much more you give in value
            than you take in payment.
          </p>
          <img
            src={loginImg}
            alt="Secure Login"
            className="img-fluid mt-4"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
