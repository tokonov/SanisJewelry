import React from "react";
import ControlledCarousel from "../../components/controlledCarousel/ControlledCarousel";
import Catalog from "../../components/catalog/Catalog";
import ProductCard from "../../components/productCard/ProductCard";

const HomePage = () => {
  return (
    <div>
      <ControlledCarousel />
      <Catalog />
    </div>
  );
};

export default HomePage;
