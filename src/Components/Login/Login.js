

import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';

import '../style/Login.css';

function Login() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <div className="Login">
       <div className="wrap">
          <div className="l-box">
            <div className="f-login">
                <h3>Đăng nhập</h3>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                        <Input className="input-control" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input
                        className="input-control"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item className="login-btn">
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                    <Form.Item className="forgot-btn">
                        <Link to="forgot" className="forgot-form-button ">
                            Quên mật khẩu ?
                        </Link>
                    </Form.Item>
                    <Form.Item className="or-text">
                        <p className="or-form-text">hoặc</p>
                    </Form.Item>
                    <Form.Item>
                        <div  className="register-btn">
                            <a href="##" className="login-google">
                                Đăng nhập bằng <GoogleOutlined style={{ fontSize: '16px', marginLeft:'5px'}}/>
                            </a>
                            <Link to="register" className="register-form-button">
                                Đăng ký
                            </Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
          </div>
       </div>
    </div>
  );
}
export default Login;
