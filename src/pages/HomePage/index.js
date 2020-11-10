import React, { Component } from "react";
import {
  PageHeader,
  Row,
  Col,
  Statistic,
  Divider,
  Select,
  DatePicker,
  Card,
} from "antd";
import "./style.css";

import { Column } from "@ant-design/charts";
import ChartColumn from './../../components/ChartColumn';
import ChartPie from './../../components/ChartPie';
import ChartTop from './../../components/ChartTop';

const routes = [
  {
    path: "/",
    breadcrumbName: "Trang chủ",
  },
];
const { Option } = Select;

class HomePage extends Component {
  handleChange = (value) => {
    console.log(value);
  };

  onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="Trang chủ"
          breadcrumb={{ routes }}
        />
        <Row gutter={[36, 24]}>
          <Col xs={24} sm={12} md={8}>
            <Select
              defaultValue="room_service"
              style={{ width: "100%" }}
              onChange={this.handleChange}
              allowClear
            >
              <Option value="room_service">Room Service</Option>
              <Option value="eat_service">Eat Service</Option>
              <Option value="swimming_pool">Swiming Pool</Option>
            </Select>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <DatePicker
              onChange={this.onChangeDate}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Divider />
        <Row gutter={[36, 24]}>
          <Col className="gutter-row mb-10" xl={8} md={8} sm={12} xs={24}>
            <div className="ant-statistic-wrapper ant-statistic-red">
              <Statistic title="Active Users" value={112893} />
            </div>
          </Col>
          <Col className="gutter-row mb-10" xl={8} md={8} sm={12} xs={24}>
            <div className="ant-statistic-wrapper ant-statistic-green">
              <Statistic title="Voided" value={112893} />
            </div>
          </Col>
          <Col className="gutter-row mb-10" xl={8} md={8} sm={12} xs={24}>
            <div className="ant-statistic-wrapper ant-statistic-purple">
              <Statistic title="Customers" value={112893} />
            </div>
          </Col>
          <Col className="gutter-row mb-10" xl={8} md={8} sm={12} xs={24}>
            <div className="ant-statistic-wrapper ant-statistic-dark">
              <Statistic title="Net Sales" value={112893} />
            </div>
          </Col>
          <Col className="gutter-row mb-10" xl={8} md={8} sm={12} xs={24}>
            <div className="ant-statistic-wrapper ant-statistic-light-blue">
              <Statistic title="Net Sales" value={112893} />
            </div>
          </Col>
          <Col className="gutter-row mb-10" xl={8} md={8} sm={12} xs={24}>
            <div className="ant-statistic-wrapper ant-statistic-blue">
              <Statistic title="Discount" value={112893} />
            </div>
          </Col>
        </Row>
        <Row gutter={[36, 24]}>
          <Col xs={24} sm={12} md={8}>
            <ChartColumn />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ChartPie />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ChartTop />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
