import { ReloadOutlined } from '@ant-design/icons';
import { Card, Col, Divider, Empty, Row, Typography } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FormFilter from '../../components/FormFilter';
import StatisticList from '../../components/StatisticList';
import { setLoading } from '../../redux/actions/loadingActions';
import ChartColumn from './../../components/ChartColumn';
import ChartPie from './../../components/ChartPie';
import ChartTop from './../../components/ChartTop';
import axios from './../../service/config';
import './style.css';
import { connect } from 'react-redux';
import withErrorHandler from '../../withErrorHandler';

const { Title } = Typography;

class HomePage extends Component {
	_isMounted = false;
	
	state = {
		room: ['All'],
		data: null,
		type: 'all',
		date: moment().format('yyyy-MM-DD'),
	};

	componentDidMount() {
		this._isMounted = true;
		const defaultDate = `full?date=${moment().format('yyyy-MM-DD')}`;
		this.fetchRoom();
		this.fetchData(defaultDate);
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	fetchRoom = (params = null) => {
		axios
			.get('room/list', {
				params,
			})
			.then((res) => {
				let data = { ...res.data.data };
				let list_room = [];
				for (let i in data.detail) {
					list_room.push(i);
				}
				this.setState({
					room: [...this.state.room, ...list_room],
				});
			})
			.catch((err) => {
				this.props.setLoading(false);
			});
	};

	fetchData = (params) => {
		this.props.setLoading(true);
		axios
			.get(`date/${params}`)
			.then((res) => {
				this.setState({ data: res.data.data });
				this.props.setLoading(false);
			})
			.catch((err) => {
				this.props.setLoading(false);
			});
	};

	handleChange = (value) => {
		let param = '';
		if (value.toLowerCase() === 'all') {
			value = 'all';
			param = `full?room=${value}&date=${this.state.date}`;
		} else {
			param = `room?room=${value}&date=${this.state.date}`;
		}
		this.setState({ type: value });
		this.fetchData(param);
	};

	onChangeDate = (date, dateString) => {
		let param = '';

		if (this.state.type.toLowerCase() === 'all') {
			param = `full?room=${this.state.type}&date=${dateString}`;
		} else {
			param = `room?room=${this.state.type}&date=${dateString}`;
		}
		this.setState({ date: dateString });
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
				<Row gutter={[36, 24]}>
					<Col xs={24}>
						<Title level={3}>Trang chủ</Title>
					</Col>
				</Row>

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

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, props) => {
	return {
		setLoading: (loading) => {
			dispatch(setLoading(loading));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(withErrorHandler(HomePage, axios)));
