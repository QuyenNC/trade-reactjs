
import 'antd/dist/antd.css';

import { Row, Col } from 'antd';
import './style/Footer.css';
import Fb from './image/facebook.svg';
import Ytb from './image/youtube.svg';
import Gg from './image/google.svg';
function Footer(){
    return (
        <div className="Footer">
            <div className="wrap">
            <Row>
                <Col span={8}>
                    <div className="support">
                            <h3>Hỗ trợ khách hàng</h3>
                            <ul>
                                <li>Trung tâm trợ giúp</li>
                                <li>An toàn mua bán</li>
                                <li>Quy định cần biết</li>
                                <li>Liên hệ hỗ trợ</li>
                            </ul>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="contact">
                        <h3>Liên hệ với chúng tôi</h3>
                            <ul>
                                <li>Giới thiệu</li>
                                <li>Tuyển dụng</li>
                                <li>Truyền thông</li>
                                <li>Blog</li>
                            </ul>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="social">
                        <h3>Liên kết</h3>
                        <div className="icon">
                            <img src={Fb} alt="logo - facebook" />
                            <img src={Ytb} alt="logo - youtube" />
                            <img src={Gg} alt="logo - google" />
                        </div>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    );
}


export default Footer;