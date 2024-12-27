import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";

function App() {
    const headerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    };
    const contentStyle = {
        textAlign: "center",
        minHeight: 120,
        lineHeight: "120px",
        color: "#fff",
        backgroundColor: "#0958d9",
    };
    const siderStyle = {
        textAlign: "center",
        lineHeight: "120px",
        color: "#fff",
        backgroundColor: "#1677ff",
    };
    const footerStyle = {
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#4096ff",
    };
    const layoutStyle = {
        borderRadius: 8,
        overflow: "hidden",
        width: "calc(100% - 8px)",
        maxWidth: "calc(100% - 8px)",
    };
    const items = new Array(16).fill(null).map((_, index) => ({
        key: index + 1,
        label: `nav ${index + 1}`,
    }));
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <div className="demo-logo" style={{ color: "white" }}>
                    Logo-demo
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={items}
                />
            </Header>
            <Layout>
                <Sider width="25%" style={siderStyle}>
                    Sider
                </Sider>
                <Content style={contentStyle}>Content</Content>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    );
}

export default App;
