import { Image, Table, message } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ProductContext } from "../context/Products";

function ProductsList() {
  const { products, setProducts } = useContext(ProductContext);
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductsFromDB();
  }, []);

  const getProductsFromDB = async () => {
    try {
      setLoading(true);
      const ref = collection(db, "products");
      const productData = await getDocs(ref);
      if (!productData.empty) {
        const allProducts = [];
        productData.forEach((product) => {
          allProducts.push({ ...product.data(), id: product.id });
        });
        setProducts([...allProducts]);
        setLoading(false);
      }
    } catch (err) {
      message.error(err.message);
      setLoading(false);
    }
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (data) => <Image src={data} height={50} width={50} />,
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
  return <Table dataSource={products} columns={columns} />;
}

export default ProductsList;
