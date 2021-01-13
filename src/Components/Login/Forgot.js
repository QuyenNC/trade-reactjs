
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Form, Input, Button} from 'antd';
import {  GoogleOutlined,MailOutlined} from '@ant-design/icons';

import '../style/Forgot.css';

function Forgot() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <div className="Forgot">
       <div className="wrap">
          <div className="r-box">
            <div className="f-forgot">
                <h3>Quên mật khẩu</h3>
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
                    <Form.Item className="login-btn">
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Gửi mã xác thực
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
export default Forgot;
