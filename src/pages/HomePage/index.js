import React, { Component } from 'react';
import { PageHeader, Row, Col, Statistic } from 'antd';
import './style.css';

const routes = [
	{
		path: '/',
		breadcrumbName: 'Trang chủ',
	},
];

class HomePage extends Component {
	render() {
		return (
			<div>
				<PageHeader
					className='site-page-header'
					title='Trang chủ'
					breadcrumb={{ routes }}
				/>
				<Row gutter={[16, 16]}>
					<Col
						className='gutter-row mb-10'
						xl={8}
						md={8}
						sm={12}
						xs={24}>
						<div className='ant-statistic-wrapper ant-statistic-red'>
							<Statistic title='Active Users' value={112893} />
						</div>
					</Col>
					<Col
						className='gutter-row mb-10'
						xl={8}
						md={8}
						sm={12}
						xs={24}>
						<div className='ant-statistic-wrapper ant-statistic-green'>
							<Statistic title='Voided' value={112893} />
						</div>
					</Col>
					<Col
						className='gutter-row mb-10'
						xl={8}
						md={8}
						sm={12}
						xs={24}>
						<div className='ant-statistic-wrapper ant-statistic-purple'>
							<Statistic title='Customers' value={112893} />
						</div>
					</Col>
					<Col
						className='gutter-row mb-10'
						xl={8}
						md={8}
						sm={12}
						xs={24}>
						<div className='ant-statistic-wrapper ant-statistic-dark'>
							<Statistic title='Net Sales' value={112893} />
						</div>
					</Col>
					<Col
						className='gutter-row mb-10'
						xl={8}
						md={8}
						sm={12}
						xs={24}>
						<div className='ant-statistic-wrapper ant-statistic-light-blue'>
							<Statistic title='Net Sales' value={112893} />
						</div>
					</Col>
					<Col
						className='gutter-row mb-10'
						xl={8}
						md={8}
						sm={12}
						xs={24}>
						<div className='ant-statistic-wrapper ant-statistic-blue'>
							<Statistic title='Discount' value={112893} />
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default HomePage;
