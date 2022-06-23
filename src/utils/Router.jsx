import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Explore,
  History,
  Liked,
  Login,
  Mockman,
  Signup,
  Watchlist,
} from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/" element={<History />} />
      <Route path="/" element={<Liked />} />
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Signup />} />
      <Route path="/" element={<Mockman />} />
      <Route path="/" element={<Watchlist />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
