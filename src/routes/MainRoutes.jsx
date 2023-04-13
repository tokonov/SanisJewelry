import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import ProductListPage from "../pages/productListPage/ProductListPage";
import MainLayout from "../layots/MainLayout";
import ProductList from "../components/ProductList";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
