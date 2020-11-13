import { Col, Divider, Row, Typography, Table } from 'antd';
import React, { Component } from 'react';
import FormFilter from '../../components/FormFilter';
// import reqwest from 'reqwest';

const { Title } = Typography;

class ListRoomPage extends Component {
	state = {
		room: [],
	};
	render() {
		const columns = [
			{
				title: 'Name',
				dataIndex: 'name',
				sorter: true,
				render: (name) => `${name.first} ${name.last}`,
				width: '20%',
			},
			{
				title: 'Gender',
				dataIndex: 'gender',
				filters: [
					{ text: 'Male', value: 'male' },
					{ text: 'Female', value: 'female' },
				],
				width: '20%',
			},
			{
				title: 'Email',
				dataIndex: 'email',
			},
		];
		return (
			<div>
				<Row gutter={[36, 24]}>
					<Col xs={24}>
						<Title level={3}>Trang chủ</Title>
					</Col>
				</Row>
				<FormFilter
					room={this.state.room}
					handleChange={this.handleChange}
					onChangeDate={this.onChangeDate}
				/>
				<Divider />
				<Row gutter={[36, 24]}>
					<Col xs={24}>
						<Table
							columns={columns}
							rowKey={(record) => record.login.uuid}
							// dataSource={data}
							// pagination={pagination}
							// loading={loading}
							// onChange={this.handleTableChange}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

export default ListRoomPage;
