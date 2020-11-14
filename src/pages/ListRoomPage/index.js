import { Col, Divider, Row, Typography, Table, DatePicker } from "antd";
import React, { Component } from "react";
import axios from "../../service/config";
import NumberFormat from "react-number-format";
import { v4 as uuidv4 } from "uuid";
import queryString from "query-string";
import moment from "moment";

const { RangePicker } = DatePicker;
const { Title } = Typography;

class ListRoomPage extends Component {
  state = {
    room: [
      {
        id: "all",
        room_code: "All",
      },
    ],
    data: [],
    page: 1,
    per_page: 5,
    total: 0,
    table_loading: false,
  };

  componentDidMount() {
    const { page, per_page } = this.state;
    this.fetchData({ page, per_page });
  }

  fetchData = (params) => {
    this.setState({ table_loading: true });
    const query = queryString.stringify(params);
    axios
      .get(`room/export?${query}`)
      .then((res) => {
        let data = { ...res.data.data };
        this.setState({
          data: data.detail,
          page: data.pagination.currentPage,
          per_page: data.pagination.perPage,
          total: data.pagination.total,
          table_loading: false,
        });
      })
      .catch((err) => {
        this.props.setLoading(false);
      });
  };

  handleTableChange = (pagination, filters, sorter) => {
    this.fetchData({
      page: pagination.current,
      per_page: pagination.pageSize,
    });
  };

  onDateChange = (date, dateString) => {
    const { page, per_page } = this.state;
    if (dateString[0] && dateString[1]) {
      this.fetchData({
        page,
        per_page,
        start_date: dateString[0],
        end_date: dateString[1],
      });
    } else {
      this.fetchData({ page, per_page });
    }
  };

  render() {
    const columns = [
      {
        title: "Mã phòng",
        dataIndex: "room_code",
        sorter: true,
      },
      {
        title: "Giá phòng",
        dataIndex: "sales",
        render: (sale) => (
          <NumberFormat
            value={sale}
            displayType={"text"}
            thousandSeparator={true}
            suffix="đ"
          />
        ),
        align: "right",
      },
      {
        title: "Chi phí",
        dataIndex: "cost",
        render: (cost) => (
          <NumberFormat
            value={cost}
            displayType={"text"}
            thousandSeparator={true}
            suffix="đ"
          />
        ),
        align: "right",
      },
      {
        title: "Lợi nhuận",
        dataIndex: "profit",
        render: (profit) => (
          <NumberFormat
            value={profit}
            displayType={"text"}
            thousandSeparator={true}
            suffix="đ"
          />
        ),
        align: "right",
      },
    ];

    const { table_loading, data, page, per_page, total } = this.state;

    return (
      <div>
        <Row gutter={[36, 24]}>
          <Col xs={24}>
            <Title level={3}>Danh sách phòng</Title>
          </Col>
        </Row>
        <Row gutter={[36, 24]}>
          <Col xs={24} sm={12} md={8}>
            <RangePicker
              defaultValue={moment()}
              onChange={this.onDateChange}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Divider />
        <Row gutter={[36, 24]}>
          <Col xs={24}>
            <Table
              scroll={{ x: 600 }}
              columns={columns}
              rowKey={(record) => uuidv4()}
              dataSource={data}
              pagination={{
                current: page,
                pageSize: per_page,
                total: total,
              }}
              loading={table_loading}
              onChange={this.handleTableChange}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListRoomPage;
