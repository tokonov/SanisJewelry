import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
// import HomePage from "../pages/homePage/HomePage";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      {/* <Footer /> */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
