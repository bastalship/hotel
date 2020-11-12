import React from "react";
import { Avatar, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/auth/login">Đăng xuất</Link>
      </Menu.Item>
    </Menu>
  );

const UserMenu = (props) => {
  return (
    <Dropdown overlay={menu} trigger={['click']} arrow>
    <Avatar style={{ backgroundColor: "#1890ff", marginRight: 15 }} icon={<UserOutlined />} />
  </Dropdown>
  );
};

export default UserMenu;
