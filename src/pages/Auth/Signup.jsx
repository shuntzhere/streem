import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import "./auth.css";

export const Signup = () => {
  const [msg, setMsg] = useState(false);
  const { signup, authState, authDispatch } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    if (authState.password === authState.confirmpassword) {
      signup();
    } else {
      setMsg(true);
    }
  };
  return (
    <section className="container forms">
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form onSubmit={submitHandler}>
            <div className="field input-field">
              <input
                type="text"
                name="firstName"
                autoComplete="on"
                required
                className="input"
                placeholder="Enter first name"
                value={authState.firstname}
                onChange={(e) =>
                  authDispatch({ type: "FIRSTNAME", payload: e.target.value })
                }
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
                value={authState.lastname}
                onChange={(e) =>
                  authDispatch({ type: "LASTNAME", payload: e.target.value })
                }
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
                value={authState.email}
                onChange={(e) =>
                  authDispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                name="password"
                required
                placeholder="Create password"
                className="password"
                value={authState.password}
                onChange={(e) =>
                  authDispatch({ type: "PASSWORD", payload: e.target.value })
                }
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm password"
                className="password"
                value={authState.confirmpassword}
                onChange={(e) =>
                  authDispatch({
                    type: "CONFIRM_PASSWORD",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <section className="input-check">
              <section className="input-check-left">
                <input type="checkbox" name="check" required />
                <label htmlFor="check">I accept all terms and condition</label>
              </section>
            </section>
            <div className="field button-field">
              <button type="submit">Signup</button>
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
