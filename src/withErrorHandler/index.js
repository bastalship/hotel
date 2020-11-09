import React, { Component } from 'react';
import { message } from 'antd';

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
				<WrappedComponent {...this.props} />
			);
		}
	};
};

export default withErrorHandler;
