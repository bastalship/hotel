import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Spin } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import "./style.css";
import UserMenu from "./../../components/UserMenu";

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { collapsed } = this.state;
    const { loading, children } = this.props;
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="lg"
          collapsedWidth="80"
          onCollapse={(collapsed, type) =>
            this.setState({
              collapsed: collapsed,
            })
          }
        >
          <Link className="logo" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UnorderedListOutlined />}>
              <Link to="/list">Danh sách</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/import">Import</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{ marginLeft: collapsed ? 80 : 200 }}
        >
          <Header
            style={{
              width: collapsed ? `calc(100% - 80px)` : `calc(100% - 200px)`,
            }}
            className="site-layout-background"
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <UserMenu />
          </Header>
          <Spin spinning={loading}>
            <Content
              className="site-layout-background"
              style={{
                margin: "84px 16px",
                padding: 24,
                minHeight: 280,
                overflow: "initial",
              }}
            >
              {children}
            </Content>
          </Spin>
          <Footer style={{ textAlign: "center" }}>
            Quản lý khách sạn ©2020 Created by WeTechTeam.com
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    loading: store.loadingReducers.loading,
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
