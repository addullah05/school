import React, { useState } from "react";

import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Checkbox,
  Form,
  Input,
} from "antd";
import { Link } from "react-router-dom";
import Navigation from "./main/Navigation";
import AntFooter from "./main/AntFooter";
import AntHeader from "./main/AntHeader";
import AntModal from "./AntModal";
const { Header, Content, Sider } = Layout;

  const Dashboard = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    //form depended methods
    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />

        <Navigation />
      </Sider>

      <Layout>
        <AntHeader>
          {/* <Button type="primary" style={{float:'right',marginTop:'14px'}}>Add School</Button> */}
          <AntModal>
          <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
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
          message: 'Please input your username!',
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
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

          </AntModal>
        </AntHeader>

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <AntFooter />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
