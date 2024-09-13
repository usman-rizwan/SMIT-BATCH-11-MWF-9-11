import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
  message,
} from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link as MyLink, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../utils/firebase";
import { InboxOutlined } from "@ant-design/icons";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const SignupForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const onFinish = async (values) => {
    console.log("DOB:", new Date(values.dob).toLocaleDateString());
    console.log("File:", values.dragger[0].originFileObj);
    console.log("values:", values);
    setloading(true);
    try {
      const signupUser = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.info("Signup hogya");
      const storageRef = ref(storage, "users/");
      const uploadImage = await uploadBytes(
        storageRef,
        values.dragger[0].originFileObj
      );
      console.info("Image upload hogya");
      const url = await getDownloadURL(storageRef);
      console.info("Image url aagya");
      const obj = {
        email: values.email,
        dob: new Date(values.dob).toLocaleDateString(),
        name: values.username,
        photoUrl: url,
      };

      const dbRef = doc(db, "users", signupUser.user.uid);
      await setDoc(dbRef, obj);
      console.info("db mein data chalagya");
      setloading(false);
      message.success("User Registered Successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      message.error("Kuch Galat hogya , Aap khud search krlo");
      setloading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="container mx-auto my-8">
      <Form
        name="basic"
        layout="vertical"
        style={{
          maxWidth: 600,
          margin: "0px auto",
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
          label="User Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input valid email!",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          name={"dob"}
          rules={[{ required: true, message: "Aane ka din batado" }]}
          label="Dunya mein aane ka din"
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Gender"
          name={"gender"}
          rules={[
            {
              required: true,
              message: "Please select gender",
            },
          ]}
        >
          <Select>
            <Select.Option value="">Select Gender</Select.Option>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
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

        <Form.Item label="Dragger">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button loading = {loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <p className="text-center text-small">
        Need to create an account?{" "}
        <MyLink className="text-blue-600" to={"/signin"} size="sm">
          Sign in
        </MyLink>
      </p>
    </div>
  );
};

export default SignupForm;
