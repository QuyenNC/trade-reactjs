import React, { useState } from 'react';
import axios from 'axios';
import {Link, Redirect} from "react-router-dom";
import 'antd/dist/antd.css';
import { Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined,MailOutlined,PhoneOutlined,EnvironmentOutlined} from '@ant-design/icons';

import '../style/Register.css';

function Register() {

    const token = localStorage.getItem('token');
    let isLoginStt = true;
    if(token == null){
        isLoginStt = false
    }
    const [isLogin ] = useState(isLoginStt);
    

    const [isRegis,setIsRegis] = useState(false);
    const [loadRegis,setLoadRegis] = useState(false);
    const onFinish = (values) => {
        setLoadRegis(true);
        const url = "/api/auth/register";
        axios.post(url,values )
          .then(function (res) {
            if(res.data.errors){
                return  message.error(res.data.errors.msg);
            }
            if(res.data.success){
                setIsRegis(true);
                return message.success(res.data.success.msg);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    
    if(isRegis === true){
        return <Redirect to="login" />
    }
    if(isLogin === true){
        return <Redirect to="/"/>;
      }
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
                            message: 'E-mail không hợp lệ !',
                        },
                        {
                            required: true,
                            message: 'Vui lòng nhập  E-mail!',
                        }
                        ]}
                    >
                         <Input className="input-control" prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập Username!',
                        },
                        {
                            min:6,
                            message :'Username tối thiểu 6 kí tự'
                        }
                        ]}
                    >
                        <Input className="input-control" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                              required: true,
                              message: 'Please input your password !',
                            },
                            {
                                min:6,
                                message :'Password tối thiểu 6 kí tự !'
                            },
                            {
                                whitespace:true,
                                message:'Password không được chứa khoảng trắng !'
                            }
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
                        name="phonenumber"
                        rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập Phonenumber!'
                        },
                        {
                            min:10,
                            message :'Số điện thoại không quá 10 số!'
                        },
                        {
                            max:10,
                            message :'Số điện thoại không quá 10 số!'
                        }
                        ]}
                    >
                        <Input type="number" className="input-control" prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone number" />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập địa chỉ !',
                        },
                        {
                            min:30,
                            message :'Địa chỉ tối thiểu 30 kí tự !'
                        }
                        ]}
                    >
                        <Input className="input-control" prefix={<EnvironmentOutlined   className="site-form-item-icon" />} placeholder="Nhập địa chỉ của bạn" />
                    </Form.Item>
                    <Form.Item className="login-btn">
                        <Button type="primary" loading={loadRegis} htmlType="submit" className="login-form-button">
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
