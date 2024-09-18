import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, message, theme } from "antd";
import { Outlet, useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
const { Header, Content, Footer, Sider } = Layout;

const items2 = [
  {
    label: "Users",
    icon: UserOutlined,
    route: "/admin/users",
  },
  {
    label: "Products",
    icon: LaptopOutlined,
    route: "/admin/products",
  },
  {
    label: "Purchases",
    icon: LaptopOutlined,
    route: "/admin/purchases",
  },
  {
    label: "Reports",
    icon: NotificationOutlined,
    route: "/admin/reports",
  },
].map((data, index) => {
  return {
    key: data.route,
    icon: React.createElement(data.icon),
    label: data.label,
  };
});
const Dashboard = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="bg-white shadow border"
      >
        <div className="demo-logo">
          <h1>Logo</h1>
        </div>

        <Button
          onClick={() =>
            signOut(auth).then(() =>
              message.success("User logout Successfully")
            )
          }
        >
          Logout
        </Button>
      </Header>
      <Content
        style={
          {
            // padding: "0 48px",
          }
        }
      >
        {/* <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultChecked={"/admin/users"}
              onClick={(e) => navigate(e.key)}
              onChange={(e) => console.log("onChange", e)}
              style={{
                height: "100%",
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Dashboard;
