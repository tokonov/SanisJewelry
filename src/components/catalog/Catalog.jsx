import React from "react";
import cl from "./Catalog.module.css";
import "./Catalog.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Catalog = () => {
  return (
    <div>
      <div className={cl.catalog}>
        <div className={cl.catalog_title}>
          <h2>КАТАЛОГ</h2>
          <div className={cl.line_catalog}></div>
        </div>
        <div className="container">
          <div className={cl.catalog_items}>
            <div className="catalog_item ">
              <span>Религиозные</span>
            </div>
            <div className="catalog_item catalog_item2">
              <span>Изделия из дерева</span>
            </div>
            <div className="catalog_item catalog_item3">
              <span>Коллекции</span>
            </div>
            <div className="catalog_item catalog_item4">
              <span>Броши</span>
            </div>
            <div className="catalog_item catalog_item5">
              <span>Пирсинг</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
