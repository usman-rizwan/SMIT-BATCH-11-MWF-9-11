import { Drawer, Button, Checkbox, Radio, Form, Input, message } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";

function AddProductDrawer({ open, onClose }) {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoading(true);
      const ref = collection(db, "products");
      await addDoc(ref, values);
      form.resetFields();
      setLoading(false);
      onClose();
      message.success("Product ADDED Successfully");
    } catch (err) {
      message.error(err.message);
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Drawer title="Product Form" width={800} onClose={onClose} open={open}>
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Product Desc"
          name="desc"
          rules={[
            {
              required: true,
              message: "Please input your product Description",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[
            {
              required: true,
              message: "Please input image link",
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

export default AddProductDrawer;
