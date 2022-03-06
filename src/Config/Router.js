import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../Pages/Auth";
import Login from "../Pages/Auth/Login";
import ResetPassword from "../Pages/Auth/ResetPassword";
import SignUp from "../Pages/Auth/SignUp";
import Booking from "../Pages/Main/Booking";
import BookingDetail from "../Pages/Main/BookingDetail"
import SearchPage from "../Pages/Main/SearchFlight";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/auth"} element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="resetpass" element={<ResetPassword />} />
        </Route>
        <Route path={"/main"}>
          <Route path="booking" element={<Booking />} />
          <Route path="booking-detail" element={<BookingDetail />} />
          <Route path="search-result" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
