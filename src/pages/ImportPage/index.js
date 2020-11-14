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
		disabled: true,
	};

	handleImport = () => {
		this.setState({ loading: true });
		axios
			.post('import')
			.then((res) => {
				const data = res.data;
				if(res.status === 200){
					notification.success({
						message: 'Thông báo',
						description: 'Import thành công!',
					});
				}
				if (data && data.errors && data.errors.message) {
					notification['error']({
						message: 'Thông báo',
						description: data.errors.message,
					});
				}
				this.setState({ loading: false });
			})
	};

	changeDisabled = (disabled) => {
		this.setState({ disabled: disabled });
	}

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
					<Col className='gutter-row mb-10' span={24}>
						<Upload changeDisabled={this.changeDisabled}/>
					</Col>
					
				</Row>
			</div>
		);
	}
}

export default withErrorHandler(ImportPage, axios);
