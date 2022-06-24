import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (localStorage.getItem("userToken")) {
  //       authDispatch({ type: "STORED_LOCALLY" });
  //     }
  //   }, []);

  const initialState = {
    email: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    userData: "",
    encodedToken: "",
    errorMsg: "",
  };

  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const login = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: authState.email,
        password: authState.password,
      });
      console.log(authState);
      console.log(response, "response");
      const { data, status } = response;
      console.log(status, "checking");
      if (status == 200) {
        localStorage.setItem("userToken", data.encodedToken);
        localStorage.setItem("userDetail", JSON.stringify(data.foundUser));
        authDispatch({ type: "USER_DATA", payload: data });
        authDispatch({ type: "CLEAR_INPUTS" });
        navigate("/");
      } else if (status === 201) {
        authDispatch({ type: "ERROR", payload: "Retry Password" });
      }
    } catch (error) {
      authDispatch({ type: "ERROR", payload: "Invalid Credentials" });
    }
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userDetail");
    authDispatch({ type: "CLEAR_AUTH" });
    navigate("/");
  };

  const signup = async () => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstname: authState.firstname,
        lastname: authState.lastname,
        email: authState.email,
        password: authState.password,
      });
      console.log(response);
      const { status, data } = response;
      console.log(data);
      if (status === 200 || status === 201) {
        localStorage.setItem("userToken", data.encodedToken);
        localStorage.setItem("userDetail", JSON.stringify(data.createdUser));
        authDispatch({ type: "USER_DATA", payload: data });
        authDispatch({ type: "CLEAR_INPUTS" });
        navigate("/");
      }
    } catch (error) {
      authDispatch({ type: "ERROR", payload: "USER ALREADY EXISTS" });
      console.log("Signup ERROR is:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ authState, authDispatch, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
