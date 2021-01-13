import 'antd/dist/antd.css';
import { Row, Col } from 'antd';


import Nav from './Nav';
import Post from './Post';
function Index() {
  return (
    <div className="Index">
       <div className="wrap" >
        <Row >
            <Col span={6}>
                <Nav />
            </Col>
            <Col span={18}>
                <Post />
            </Col>
        </Row>
       </div>
    </div>
  );
}
export default Index;
