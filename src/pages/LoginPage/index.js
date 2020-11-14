import { Button, Card, Form, Input } from 'antd';
import { Link, Redirect, withRouter } from 'react-router-dom';
import logo from './../../assets/images/logo.png';
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../../service/config';
import { setAuth } from './../../redux/actions/authActions'
import { connect } from 'react-redux';

const Logo = styled.div`
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

class LoginPage extends Component {
	state = {
		loading: false,
	};
	
	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	onFinish = (values) => {
		this.setState({ loading: true }); 
		axios
			.post('login', {
				...values,
			})
			.then((res) => {
				if (!res.errors) {
					localStorage.setItem('token', res.data.data.access_token);
					this.setState({ loading: false });
					this.props.setAuth(res.data.data.access_token);
				} else {
					// message.info('Có lỗi đã xảy ra');
				}
			})
			.catch((err) => {
				// message.error('Có lỗi đã xảy ra');
				this.setState({ loading: false });
			});
	};

	render() {
		const { from } = this.props.location.state || {
			from: { pathname: '/' },
		};
		const { token } = this.props;
		if (token) {
			return <Redirect to={from} />;
		}
		return (
			<Card style={{ width: '100%' }}>
				<Logo>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</Logo>
				<Form
					layout='vertical'
					name='login'
					initialValues={{
						remember: true,
					}}
					onFinish={this.onFinish}>
					<Form.Item
						label='Email'
						name='email'
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập email',
							},
						]}>
						<Input />
					</Form.Item>

					<Form.Item
						label='Mật khẩu'
						name='password'
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập mật khẩu',
							},
							{
								min: 3,
								message: 'Tối thiệu 3 ký tự',
							},
						]}>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							block
							loading={this.state.loading}>
							Đăng nhập
						</Button>
					</Form.Item>
				</Form>
			</Card>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		token: store.authReducers.token,
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		setAuth: (token) => {
			dispatch(setAuth(token));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage)) ;
