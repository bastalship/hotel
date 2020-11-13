import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import React from "react";
import axios from "../../service/config";
import { withRouter } from "react-router-dom";
import { setAuth } from "../../redux/actions/authActions";
import { connect } from "react-redux";

class UserMenu extends React.Component {
  logout = () => {
    axios
      .post("logout")
      .then((res) => {
        localStorage.removeItem("token");
        this.props.setAuth(null);
        this.props.history.push("/auth/login");
      })
      .catch((err) => {
        localStorage.removeItem("token");
        // message.error('Có lỗi đã xảy ra');
      });
  };
  render() {
    const menu = (
      <Menu onClick={this.logout}>
        <Menu.Item key="0">Đăng xuất</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} trigger={["click"]} arrow>
        <Avatar
          style={{ backgroundColor: "#1890ff", marginRight: 15 }}
          icon={<UserOutlined />}
        />
      </Dropdown>
    );
  }
}


const mapStateToProps = null;

const mapDispatchToProps = (dispatch, props) => {
	return {
		setAuth: (token) => {
			dispatch(setAuth(token));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserMenu)) ;
