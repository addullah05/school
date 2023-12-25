import React from "react";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
const { Header, Content, Sider } = Layout;

const AntHeader = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        marginBottom: "30px",
      }}
    >
      {children}
    </Header>
  );
};

export default AntHeader;
