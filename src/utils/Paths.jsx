import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Explore,
  History,
  Landing,
  Liked,
  Login,
  Signup,
  Watchlist,
} from "../pages";
import MockAPI from "../pages/Mockman/MockAPI";

export const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/history" element={<History />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/mockapi" element={<MockAPI />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
