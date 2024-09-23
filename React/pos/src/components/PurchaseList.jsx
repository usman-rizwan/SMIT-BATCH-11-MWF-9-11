import { Image, Table, message } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function PurchaseList() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductsFromDB();
  }, []);

  const getProductsFromDB = async () => {
    try {
      setLoading(true);
      const ref = collection(db, "purchases");
      const productData = await getDocs(ref);
      if (!productData.empty) {
        const allProducts = [];
        productData.forEach((product) => {
          allProducts.push({ ...product.data(), id: product.id });
        });
        setPurchases([...allProducts]);
        setLoading(false);
      }
    } catch (err) {
      message.error(err.message);
      setLoading(false);
    }
  };
  const columns = [
    {
      title: "Purchase Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Purchase Date",
      dataIndex: "purchaseDate",
      key: "purchaseDate",
    },
    {
      title: "Item",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },

    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <div className="flex gap-5">
            <DeleteOutlined className="text-red-600" />
            <EditOutlined className="text-blue-600" />
          </div>
        );
      },
    },
  ];
  return <Table dataSource={purchases} columns={columns} />;
}

export default PurchaseList;
