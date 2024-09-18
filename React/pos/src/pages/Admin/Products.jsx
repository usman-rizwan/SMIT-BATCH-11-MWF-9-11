import React, { useState } from "react";
import { Button, Drawer } from "antd";
import AddProductDrawer from "../../components/AddProductDrawer";
import ProductssList from "../../components/ProductsList";

function Products() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1>All Products</h1>
        <Button type="primary" onClick={showDrawer}>
          Add Product
        </Button>
      </div>

      <AddProductDrawer onClose={onClose} open={open} />

      <ProductssList />
    </div>
  );
}

export default Products;
