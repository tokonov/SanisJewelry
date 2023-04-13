import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import ProductListPage from "../pages/productListPage/ProductListPage";
import MainLayout from "../layots/MainLayout";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
