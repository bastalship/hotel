import React, { Component } from 'react';
import { Modal, Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null,
		};

		UNSAFE_componentWillMount() {
			this.reqInterceptor = axios.interceptors.request.use((req) => {
				this.setState({ error: null });
				return req;
			});
			this.resInterceptor = axios.interceptors.response.use(
				null,
				(error) => {
					this.setState({ error: error });
				}
			);
		}

		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}

		confirmErrorHandler = () => {
			this.setState({ error: null });
		};

		render() {
			return (
				<>
					<Modal
						title={
							this.state.error ? this.state.error.message : null
						}
						centered
						onOk={this.confirmErrorHandler}
						onCancel={this.confirmErrorHandler}
						visible={this.state.error}>
						<Result
							status='500'
							title='500'
							subTitle='Xin lỗi, đã xảy ra lỗi'
							extra={
								<Button type='primary'>
									<Link to='/'>Về trang chủ</Link>
								</Button>
							}
						/>
					</Modal>
					<WrappedComponent {...this.props} />
				</>
			);
		}
	};
};

export default withErrorHandler;
