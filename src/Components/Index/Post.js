import 'antd/dist/antd.css';
import { Avatar,Menu, Dropdown, Carousel,Tooltip,Comment  } from 'antd';
import { UserOutlined, EllipsisOutlined, MessageOutlined, LikeOutlined } from '@ant-design/icons';

import Like from '../image/like.svg';

import '../style/Post.css'

function Post() {
  const menu = (
    <Menu>
      <Menu.Item danger>Gỡ bài</Menu.Item>
    </Menu>
  );
  const text = <span>Quyền Nguyễn</span>;
  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className="Post">
        <div className="p-post">
          <div className="p-info">
            <Avatar size={45} icon={<UserOutlined />} />
            <div className="info">
              <h3>NguyenCongQUyen</h3>
              <p>6 giờ</p>
            </div>
          </div>
          <div className="drop-delete">
            <Dropdown overlay={menu} placement="bottomRight">
              <EllipsisOutlined  style={{ fontSize: '20px',cursor:'pointer'}} />
            </Dropdown>,
          </div>
        </div>
        <div className="p-title">
            <h3>Tên sản phẩm : <span>Máy tính bảng</span></h3>
            <h3>Địa chỉ : <span>16 Nguyễn Quang Bích Tân Bính Hồ Chí Minh</span></h3>
            <p>Mong muốn trao đổi</p>
        </div>
        <div className="p-image">
          <Carousel >
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
          </Carousel>
        </div>
        <div className="p-count">
            <div className="count-like"> 
              <Tooltip placement="bottom" title={text}>
                <img src={Like} alt="like-post"/>
                <span>0 like</span>
              </Tooltip>
              
            </div>
            <div className="count-cmt">
              <p>8 bình luận</p>
            </div>
        </div>
        <div className="p-action">
            <p><LikeOutlined style={{marginRight:'10px'}} />Thích</p>
            <p><MessageOutlined style={{marginRight:'10px'}} />Bình luận</p>
        </div>
        <div className="p-comment">
          <div className="form-cmt">
            <form>
              <textarea placeholder="Add a comment..."></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="list-cmt">
          <Comment
            author={<span>Han Solo</span>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources.
              </p>
            }
          />
          </div>
        </div>
    </div>
  );
}
export default Post;
