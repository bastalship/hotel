import { Button, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import React, { Component } from "react";
import styled from 'styled-components';

const Logo = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class LoginPage extends Component {
    onFinish = (values) => {
        console.log("Success:", values);
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    render() {
        return (
        <Card style={{ width: "100%" }}>
            <Logo>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </Logo>
            <Form
            layout="vertical"
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: "Please input your username!",
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: "Please input your password!",
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                Submit
                </Button>
            </Form.Item>
            </Form>
        </Card>
    );
  }
}

export default LoginPage;
