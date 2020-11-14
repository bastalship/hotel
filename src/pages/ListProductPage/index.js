import { Col, Divider, Row, Typography, Table, DatePicker } from "antd";
import React, { Component } from "react";
import axios from "../../service/config";
import NumberFormat from "react-number-format";
import { v4 as uuidv4 } from "uuid";
import queryString from "query-string";
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Title } = Typography;

class ListProductPage extends Component {
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
      .get(`product/export?${query}`)
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
	  console.log(dateString);
	const { page, per_page } = this.state;
	if(dateString[0] && dateString[1]) {
		this.fetchData({ page, per_page, start_date: dateString[0], end_date: dateString[1] });
	} else {
		this.fetchData({ page, per_page });
	}
  }

  render() {
    const columns = [
      {
        title: "Mã",
        dataIndex: "product_code",
      },
      {
        title: "Tên",
        dataIndex: "product_name",
      },
      {
        title: "ĐVT",
        dataIndex: "product_unit",
      },
      {
        title: "Tồn đầu",
        dataIndex: "product_first_amount",
        render: (product_first_amount) => (
          <NumberFormat
            value={product_first_amount}
            displayType={"text"}
            thousandSeparator={true}
          />
        ),
        align: "right",
      },
      {
        title: "Nhập",
        dataIndex: "product_input",
        render: (product_input) => (
          <NumberFormat
            value={product_input}
            displayType={"text"}
            thousandSeparator={true}
          />
        ),
        align: "right",
      },

      {
        title: "Xuất",
        dataIndex: "product_out",
        render: (product_out) => (
          <NumberFormat
            value={product_out}
            displayType={"text"}
            thousandSeparator={true}
          />
        ),
        align: "right",
      },
      {
        title: "Giá đầu vào",
        dataIndex: "product_input_price",
        render: (product_input_price) => (
          <NumberFormat
            value={product_input_price}
            displayType={"text"}
            thousandSeparator={true}
            suffix="đ"
          />
        ),
        align: "right",
      },
      {
        title: "Giá đầu ra",
        dataIndex: "product_out_price",
        render: (product_out_price) => (
          <NumberFormat
            value={product_out_price}
            displayType={"text"}
            thousandSeparator={true}
            suffix="đ"
          />
        ),
        align: "right",
      },
      {
        title: "Chi phí",
        dataIndex: "product_cost",
        render: (product_cost) => (
          <NumberFormat
            value={product_cost}
            displayType={"text"}
            thousandSeparator={true}
            suffix="đ"
          />
        ),
        align: "right",
      },
      {
        title: "Doanh thu",
        dataIndex: "product_sale_price",
        render: (product_sale_price) => (
          <NumberFormat
            value={product_sale_price}
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
            <Title level={3}>Danh sách sản phẩm</Title>
          </Col>
        </Row>
        <Row gutter={[36, 24]}>
			<Col xs={24} sm={12} md={8}>
				<RangePicker
					defaultValue={moment()}
					onChange={this.onDateChange}
					style={{ width: '100%' }}
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

export default ListProductPage;
