import {
  Drawer,
  Button,
  Checkbox,
  Radio,
  Form,
  Input,
  message,
  Select,
} from "antd";
import { db } from "../utils/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { ProductContext } from "../context/Products";

function AddPurchaseDrawer({ open, onClose }) {
  const { products } = useContext(ProductContext);
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoading(true);
      const ref = collection(db, "purchases");
      const product = products.find((data) => data.title === values.title);
      const docRef = doc(db, "products", product.id);
      await addDoc(ref, values);
      await updateDoc(docRef , {quantity: Number(product.quantity) + Number(values.quantity)})
      form.resetFields();
      setLoading(false);
      onClose();
      message.success("Purchase Added Successfully");
    } catch (err) {
      message.error(err.message);
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Drawer title="Purchase Form" width={800} onClose={onClose} open={open}>
      <Form
        name="basic"
        form={form}
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Select>
            {products.map((data) => (
              <Select.Option key={data.title} value={data.title}>
                {data.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Supplier"
          name="desc"
          rules={[
            {
              required: true,
              message: "Please input supplier",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Purchase Date "
          name="purchaseDate"
          rules={[
            {
              required: true,
              message: "Please input purchase date",
            },
          ]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item
          label="Bill Amount"
          name="billAmount"
          rules={[
            {
              required: true,
              message: "Please input bill Amount",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[
            {
              required: true,
              message: "Please input quantity",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Unit"
          name="unit"
          rules={[
            {
              required: true,
              message: "Please input quantity",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="kg"> Kg </Radio>
            <Radio value="pack"> Pack </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default AddPurchaseDrawer;
