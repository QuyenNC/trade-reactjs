import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import postDefault from '../image/postDefault.svg';

import Nav from './Nav';
import Post from './Post';
function Index(props) {
  const {data} = props;
  return (
    <div className="Index">
       <div className="wrap" >
        <Row >
            <Col span={6}>
                <Nav />
            </Col>
            <Col span={18}>
                {data.length ? data.map((item,index)=>(
                  <Post item={item} key={index}/>
                )) :
                <div style={{width:'100%',background:'white',marginTop:'10px',height:'650px',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',textAlign:'center'}}> 
                  <h2 style={{width:'100%'}} >Chưa có bài viết nào</h2>
                  <img src={postDefault} style={{width:'100%'}}  alt="postDefault" />
                </div>}
            </Col>
        </Row>
       </div>
    </div>
  );
}
export default Index;
