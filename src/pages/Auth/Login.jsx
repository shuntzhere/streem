import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "./auth.css";

export const Login = () => {
  const { login, authState, authDispatch } = useAuth();

  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <div className="field input-field">
              <label htmlFor="input">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input"
                required
                value={authState?.email}
                onChange={(e) =>
                  authDispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </div>
            <div className="line"></div>
            <div className="field input-field">
              <label htmlFor="input">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="password"
                required
                value={authState?.password}
                onChange={(e) =>
                  authDispatch({ type: "PASSWORD", payload: e.target.value })
                }
              />
              <i className="bx bx-hide eye-icon" />
            </div>
            <div className="line"></div>
            <div className="form-link">
              <Link to="#" className="forgot-pass">
                Forgot password?
              </Link>
            </div>
            <div className="field button-field">
              <button type="submit">Login</button>
            </div>
            <div className="field button-field">
              <button onClick={() => authDispatch({ type: "TEST_INPUT" })}>
                Guest Login
              </button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <Link to="/signup" className="link signup-link">
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
