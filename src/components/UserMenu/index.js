import React from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from '../../service/config';

const menu = () => {
	// localStorage.removeItem('token');
	const logout = (e) => {
		axios
			.post('logout')
			.then((res) => {
				localStorage.removeItem('token');
			})
			.catch((err) => {
				localStorage.removeItem('token');
				// message.error('Có lỗi đã xảy ra');
			});
	};
	return (
		<Menu onClick={logout}>
			<Menu.Item key='0'>
				<Link>Đăng xuất</Link>
			</Menu.Item>
		</Menu>
	);
};

const UserMenu = () => {
	return (
		<Dropdown overlay={menu} trigger={['click']} arrow>
			<Avatar
				style={{ backgroundColor: '#1890ff', marginRight: 15 }}
				icon={<UserOutlined />}
			/>
		</Dropdown>
	);
};

export default UserMenu;
