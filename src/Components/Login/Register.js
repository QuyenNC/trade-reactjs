
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined,MailOutlined,PhoneOutlined} from '@ant-design/icons';

import '../style/Register.css';

function Register() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <div className="Register">
       <div className="wrap">
          <div className="r-box">
            <div className="f-register">
                <h3>Đăng ký</h3>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="email"
                        rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                    >
                         <Input className="input-control" prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
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
                              message: 'Please input your password!',
                            },
                          ]}
                          hasFeedback
                    >
                        <Input.Password 
                            className="input-control"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                        ]}
                    >
                        <Input.Password 
                            className="input-control"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Phonenumber!',
                        },
                        ]}
                    >
                        <Input className="input-control" prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone number" />
                    </Form.Item>
                    <Form.Item className="login-btn">
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Đăng ký
                        </Button>
                    </Form.Item>
                    <Form.Item className="or-text">
                        <p className="or-form-text">hoặc</p>
                    </Form.Item>
                    <Form.Item>
                        <div  className="register-btn">
                            <a href="##" className="login-google">
                                Đăng nhập bằng <GoogleOutlined style={{ fontSize: '16px', marginLeft:'5px'}}/>
                            </a>
                            <Link to="login" className="register-form-button">
                                Đăng nhập
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
export default Register;
