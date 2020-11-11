import { ReloadOutlined } from '@ant-design/icons';
import { Card, Col, Divider, Empty, PageHeader, Row } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import FormFilter from '../../components/FormFilter';
import StatisticList from '../../components/StatisticList';
import ChartColumn from './../../components/ChartColumn';
import ChartPie from './../../components/ChartPie';
import ChartTop from './../../components/ChartTop';
import axios from './../../service/config';
import './style.css';

const routes = [
	{
		path: '/',
		breadcrumbName: 'Trang chủ',
	},
];

class HomePage extends Component {
	state = {
		room: [
			{
				id: 0,
				room_code: 'All room',
			},
		],
		data: null,
		type: null,
		date: null,
	};

	componentDidMount() {
		const defaultDate = `full?date=${moment().format('yyyy-MM-DD')}`;
		this.fetchRoom();
		this.fetchData(defaultDate);
	}

	fetchRoom = (params = null) => {
		axios
			.get('mobile/room', {
				params,
			})
			.then((res) => {
				let list_room = [];
				list_room = [...this.state.room, ...res.data.data];
				this.setState({
					room: list_room,
				});
			})
			.catch((err) => console.log(err));
	};

	fetchData = (params) => {
		axios
			.get(`mobile/date/${params}`)
			.then((res) => {
				this.setState({ data: res.data.data });
			})
			.catch((err) => console.log(err));
	};

	handleChange = (value) => {
		// console.log(value);

	};

	onChangeDate = (date, dateString) => {
		const param = `full?date=${dateString}`;
		this.fetchData(param);
	};

	render() {
		const { room, data } = this.state;
		let statistic = null;
		if (data) {
			statistic = <StatisticList data={data} />;
		}
		let sale_chart =
			data &&
			data.sales_data &&
			data.sales_data.data &&
			data.sales_data.data.length > 0 ? (
				<ChartColumn chart={data.sales_data} />
			) : (
				<Empty />
			);
		let top_five_sales =
			data && data.top_five_sales.length > 0 ? (
				<ChartTop chart={data.top_five_sales} />
			) : (
				<Empty />
			);
		let sales_by_order_type =
			data && data.sales_by_order_type.length > 0 ? (
				<ChartPie chart={data.sales_by_order_type} />
			) : (
				<Empty />
			);
		return (
			<div>
				<PageHeader
					className='site-page-header'
					title='Trang chủ'
					breadcrumb={{ routes }}
				/>
				<FormFilter
					room={room}
					handleChange={this.handleChange}
					onChangeDate={this.onChangeDate}
				/>
				<Divider />
				{statistic}
				<Row gutter={[36, 24]}>
					<Col xs={24} sm={12} md={8}>
						<Card
							size='small'
							title='Sales Chart'
							extra={<ReloadOutlined />}
							style={{ width: '100%' }}>
							{sale_chart}
						</Card>
					</Col>
					<Col xs={24} sm={12} md={8}>
						<Card
							size='small'
							title='Sales By Order Type'
							extra={<ReloadOutlined />}
							style={{ width: '100%' }}>
							{sales_by_order_type}
						</Card>
					</Col>
					<Col xs={24} sm={12} md={8}>
						<Card
							size='small'
							title='Top 5 Sales'
							extra={<ReloadOutlined />}
							style={{ width: '100%' }}>
							{top_five_sales}
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default HomePage;
