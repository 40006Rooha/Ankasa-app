import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../Pages/Auth";
import Login from "../Pages/Auth/Login";
import ResetPassword from "../Pages/Auth/ResetPassword";
import SignUp from "../Pages/Auth/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/auth"} element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="resetpass" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;