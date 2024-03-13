import React from "react";
import Product from "./Product";

const ProductGroup = ({ products }) => {
  // console.log(products);
  return (
    <div id="productGroup" className="p-3">
      {products.map((pro) => (
        <Product key={pro.id} product={pro} />
      ))}
    </div>
  );
};

export default ProductGroup;
