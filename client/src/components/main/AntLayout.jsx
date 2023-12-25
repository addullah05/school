import { Layout } from 'antd';
import React, { useState } from 'react';
import AntFooter from './AntFooter';
import { theme } from 'antd';
const { Header, Content} = Layout;

const AntLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
    return(
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
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
    </>
    )
}

export default AntLayout;