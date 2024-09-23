import { Image, Table, Tag, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function TransactionsList({ sales }) {
  const columns = [
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (data) => {
        return <h1>{data.toDate().toDateString()}</h1>;
      },
    },
    {
      title: "Items",
      dataIndex: "item",
      key: "item",
      render: (data) =>
        data?.map((item) => {
          return <Tag>{item.title}</Tag>;
        }),
    },
    {
      title: "kgs",
      dataIndex: "kgs",
      key: "kgs",
      render: (data) => <h1>{data} kg</h1>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Payment Mode",
      dataIndex: "paymentMode",
      key: "paymentMode",
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
  return <Table dataSource={sales} columns={columns} />;
}

export default TransactionsList;
