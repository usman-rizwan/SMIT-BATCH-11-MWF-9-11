import React, { useState } from "react";
import { Button, Drawer } from "antd";
import AddProductDrawer from "../../components/AddProductDrawer";
import ProductssList from "../../components/ProductsList";
import AddPurchaseDrawer from "../../components/AddPurchaseDrawer";
import PurchaseList from "../../components/PurchaseList";

function Purchase() {
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
        <h1>All Purchase</h1>
        <Button type="primary" onClick={showDrawer}>
          Add Purchases
        </Button>
      </div>

      <AddPurchaseDrawer onClose={onClose} open={open} />

      <PurchaseList />
    </div>
  );
}

export default Purchase;
