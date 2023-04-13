import React from "react";
import cl from "./ProductCard.module.css";
import sergi from "../../media/catalog/sergi.svg";

const ProductCard = () => {
  return (
    <div className={cl.product_card}>
      <div className={cl.product_card_inner}>
        <img src={sergi} alt="" />
      </div>
      <div className={cl.product_card_info}>
        <span className={cl.descr}>Описание</span>
        <h4 className={cl.product_card_price}>1212$</h4>
      </div>
    </div>
  );
};

export default ProductCard;
