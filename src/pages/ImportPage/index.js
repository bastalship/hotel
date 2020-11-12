import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, notification, Row, Typography } from 'antd';
import React, { Component } from 'react';
import Upload from './../../components/Upload';
import withErrorHandler from './../../withErrorHandler';
import axios from './../../service/config';

const { Title } = Typography;

class ImportPage extends Component {
	state = {
		loading: false,
		disabled: false,
	};

	handleImport = () => {
		this.setState({ loading: true });
		axios
			.post('import')
			.then((res) => {
				const data = res.data;
				if (data.errors.message) {
					console.log('Vào đây');
					notification['error']({
						message: 'Notification',
						description: data.errors.message,
					});
				} else {
					notification.success({
						message: 'Notification',
						description: 'Import successfully!',
					});
				}

				this.setState({ loading: false });
			})
			.catch((err) => {
				this.setState({ loading: false });
			});
	};

	render() {
		const { loading, disabled } = this.state;
		return (
			<div>
				<Row gutter={[36, 24]}>
					<Col xs={24}>
						<Title level={3}>Import</Title>
					</Col>
				</Row>
				<Row gutter={[16, 24]}>
					<Col className='gutter-row mb-10' span={24}>
						<Upload />
					</Col>
					<Col className='gutter-row' span={24}>
						<Button
							type='primary'
							icon={<UploadOutlined />}
							block
							onClick={this.handleImport}
							loading={loading}
							disabled={disabled}>
							Import
						</Button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default withErrorHandler(ImportPage, axios);
