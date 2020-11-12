import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	UnorderedListOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Spin } from 'antd';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ImportPage from './pages/ImportPage';
import logo from './assets/images/logo.png';
import { connect } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	render() {
		const { collapsed } = this.state;
		const { loading } = this.props;
		return (
			<Router>
				<Layout>
					<Sider
						style={{
							overflow: 'auto',
							height: '100vh',
							position: 'fixed',
							left: 0,
						}}
						trigger={null}
						collapsible
						collapsed={collapsed}
						breakpoint='lg'
						collapsedWidth='80'
						onCollapse={(collapsed, type) =>
							this.setState({
								collapsed: collapsed,
							})
						}>
						<Link className='logo' to='/'>
							<img src={logo} alt='Logo' />
						</Link>
						<Menu
							theme='dark'
							mode='inline'
							defaultSelectedKeys={['1']}>
							<Menu.Item key='1' icon={<UserOutlined />}>
								<Link to='/'>Trang chủ</Link>
							</Menu.Item>
							<Menu.Item key='2' icon={<UnorderedListOutlined />}>
								<Link to='/list'>Danh sách</Link>
							</Menu.Item>
							<Menu.Item key='3' icon={<UploadOutlined />}>
								<Link to='/import'>Import</Link>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout
						className='site-layout'
						style={{ marginLeft: collapsed ? 80 : 200 }}>
						<Header
							style={{
								position: 'fixed',
								zIndex: 1,
								width: '100%',
								padding: 0,
								boxShadow: '0 0 4px 3px #6d6b6b30',
							}}
							className='site-layout-background'>
							{React.createElement(
								this.state.collapsed
									? MenuUnfoldOutlined
									: MenuFoldOutlined,
								{
									className: 'trigger',
									onClick: this.toggle,
								}
							)}
						</Header>
						<Spin spinning={loading}>
							<Content
								className='site-layout-background'
								style={{
									margin: '84px 16px',
									padding: 24,
									minHeight: 280,
									overflow: 'initial',
								}}>
								<Switch>
									<Route exact path='/'>
										<HomePage />
									</Route>
									<Route path='/import'>
										<ImportPage />
									</Route>
								</Switch>
							</Content>
						</Spin>
						<Footer style={{ textAlign: 'center' }}>
							Quản lý khách sạn ©2020 Created by WeTechTeam.com
						</Footer>
					</Layout>
				</Layout>
			</Router>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		loading: store.loadingReducers.loading,
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);
