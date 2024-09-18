import { Drawer, Button, Checkbox, Form, Input, message } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { useState } from "react";

function AddUserDrawer({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const docRef = doc(db, "users", user.user.uid);
      await setDoc(docRef, { ...values, uid: user.user.uid });
      setLoading(false);

      onClose();
      message.success("User account created Successfully");
    } catch (err) {
      message.error(err.message);
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Drawer title="User Form" onClose={onClose} open={open}>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
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
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
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

export default AddUserDrawer;
