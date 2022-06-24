import React from "react";
import { NavLink } from "react-router-dom";
import "./auth.css";

export const Login = () => {
  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form action="#">
            <div className="field input-field">
              <label htmlFor="input">Email</label>
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="line"></div>
            <div className="field input-field">
              <label htmlFor="input">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <i className="bx bx-hide eye-icon" />
            </div>
            <div className="line"></div>
            <div className="form-link">
              <a href="#" className="forgot-pass">
                Forgot password?
              </a>
            </div>
            <div className="field button-field">
              <button>Login</button>
            </div>
            <div className="field button-field">
              <button>Guest Login</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <NavLink to="/signup" className="link signup-link">
                Signup
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
