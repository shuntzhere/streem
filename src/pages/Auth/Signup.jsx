import React from "react";
import { NavLink } from "react-router-dom";
import "./auth.css";

export const Signup = () => {
  return (
    <section className="container forms">
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form action="#">
            <div className="field input-field">
              <input
                type="text"
                name="firstName"
                autoComplete="on"
                required
                className="input"
                placeholder="Enter first name"
              />
            </div>
            <div className="field input-field">
              <input
                type="text"
                name="lastName"
                autoComplete="on"
                required
                className="input"
                placeholder="Enter last name"
              />
            </div>
            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="input"
                name="email"
                autoComplete="on"
                required
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                name="password"
                required
                placeholder="Create password"
                className="password"
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm password"
                className="password"
              />
            </div>
            <section className="input-check">
              <section className="input-check-left">
                <input type="checkbox" name="check" />
                <label for="check">I accept all terms and condition</label>
              </section>
            </section>
            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Already have an account?{" "}
              <NavLink to="/login" className="link login-link">
                Login
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
