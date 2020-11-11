import { Col, Row, Statistic } from 'antd';
import React from 'react';

const StatisticList = (props) => {
    const data = props.data;
	return (
		<Row gutter={[36, 24]}>
			<Col className='gutter-row mb-10' xl={8} md={8} sm={12} xs={24}>
				<div className='ant-statistic-wrapper ant-statistic-red'>
					<Statistic title='Transactions' value={data.transactions} />
				</div>
			</Col>
			<Col className='gutter-row mb-10' xl={8} md={8} sm={12} xs={24}>
				<div className='ant-statistic-wrapper ant-statistic-green'>
					<Statistic title='Voided' value={data.voided} />
				</div>
			</Col>
			<Col className='gutter-row mb-10' xl={8} md={8} sm={12} xs={24}>
				<div className='ant-statistic-wrapper ant-statistic-purple'>
					<Statistic title='Customers' value={data.customers} />
				</div>
			</Col>
			<Col className='gutter-row mb-10' xl={8} md={8} sm={12} xs={24}>
				<div className='ant-statistic-wrapper ant-statistic-dark'>
					<Statistic title='Net Sales' value={data.netsale} />
				</div>
			</Col>
			<Col className='gutter-row mb-10' xl={8} md={8} sm={12} xs={24}>
				<div className='ant-statistic-wrapper ant-statistic-light-blue'>
					<Statistic title='Taxes' value={data.taxes} />
				</div>
			</Col>
			<Col className='gutter-row mb-10' xl={8} md={8} sm={12} xs={24}>
				<div className='ant-statistic-wrapper ant-statistic-blue'>
					<Statistic title='Discount' value={data.discounts} />
				</div>
			</Col>
		</Row>
	);
};

export default StatisticList;
