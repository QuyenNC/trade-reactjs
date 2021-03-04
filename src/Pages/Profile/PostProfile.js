
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import imgDefault from '../image/imgdefault.jpg';
import appStore from '../image/appStore.png';
import chPlay from '../image/chPlay.png';

import '../style/PostProfile.css';

function PostProfile(){
    return (
        <div className="PostProfile">
            <div className="wrap">
                <Row className="f-infor">
                    <Col span={10}  className="f-infor-col_10" >
                        <img src={imgDefault} alt="Default Posts"/>
                    </Col>
                    <Col span={14} className="f-infor-col_14" >
                        <h3>Start capturing and sharing your moments.</h3>
                        <p>Get the app to share your first photo or video.</p>
                        <div className="f-infor-col_16--img">
                            <img src={appStore} alt="Download on the App Store"/>
                            <img src={chPlay} alt="Download on the CH Play"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>);
}

export default PostProfile;