import React, { Component } from "react";
import { PageHeader, Row, Col, Statistic } from "antd";
import "./style.less";

const routes = [
  {
    path: "/",
    breadcrumbName: "Trang chủ",
  },
];

class HomePage extends Component {
  render() {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="Trang chủ"
          breadcrumb={{ routes }}
        />
        <Row gutter={[16, 24]}>
          <Col className="gutter-row mb-10" xl={6} md={8} sm={12} xs={24}>
            <div  className="red-5">
            <Statistic title="Active Users" value={112893}/>
            </div>
          </Col>
          </Row>
      </div>
    );
  }
}

export default HomePage;
