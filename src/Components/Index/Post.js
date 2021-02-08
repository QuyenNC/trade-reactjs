import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Moment from 'react-moment';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'antd/dist/antd.css';
import { Avatar, Menu, Dropdown, Carousel, Comment, Typography, Button, Tag, Popconfirm, Modal, Alert } from 'antd';
import { EllipsisOutlined, MessageOutlined, LikeOutlined, TransactionOutlined } from '@ant-design/icons';

import { postContext } from '../Context/PostContext';
import { tradeContext} from '../Context/TradeContext';

import Like from '../image/like.svg';
// import TradeModal from './TradeModal';

import '../style/Post.css'

function Post(props) {
  const { item } = props;
  const { Paragraph } = Typography;
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  let isLoginStt = true;
  if (token == null) {
    isLoginStt = false
  }
  const [isLogin] = useState(isLoginStt);
  let dissableTrade = !isLogin;
  if (user === null) {
    dissableTrade = !isLogin;
  } else if (user.username === item.username) {
    dissableTrade = isLogin;
  }



  const menu = (
    <postContext.Consumer>
      {({ onDeletePost }) => (
        <Menu>
          <Menu.Item danger>
            <Popconfirm
              title="Bạn có chắc chắn muốn gỡ bài này không?"
              onConfirm={onDeletePost(item)}
              okText="Yes"
              cancelText="No"
            >
              Gỡ bài
              </Popconfirm>
          </Menu.Item>
        </Menu>
      )}

    </postContext.Consumer>
  );
  let color;
  if(user !== null){
    const userExit = item.like.filter((like) => (
      like.username === user.username 
    ));
    if (userExit.length === 0) {
      color = 'rgb(104, 103, 103)';
    }
    else {
      color = '#1a67f3';
    }
  }
  
 
  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '100%'
  };
  return (
    <div className="Post">
      <div className="p-post">
        <div className="p-info">
          <Avatar size={45} src={item.avartarUser} />
          <div className="info">
            <h3>{item.username}</h3>
            <p><Moment fromNow>{item.date}</Moment></p>
          </div>
        </div>
        <div className="drop-delete">
          {
             user !== null
              ? (item.username === user.username ? <Dropdown overlay={menu} placement="bottomRight">
                <EllipsisOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
              </Dropdown> : "")
              : ""
          }

        </div>
      </div>
      <div className="p-title">
        <h3>Tên sản phẩm : <span>{item.title}</span></h3>
        <h3>Địa chỉ : <span>{item.address}</span></h3>
        {
          item.cata[0].split(',').map((tag, index) => (
            <Tag color="green" key={index}>{tag}</Tag>
          ))
        }
        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "Xem thêm" }}>
          {item.desciption}
        </Paragraph>
      </div>
      <div className="p-image">
        <Carousel >
          {item.imagePost.map((item, index) => (
            <div key={index}>
              <img src={item} alt="sdf" style={contentStyle} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="p-count">
        <div className="count-like">
          <img src={Like} alt="like-post" />
          <span>{item.like.length} like</span>
        </div>
        <div className="count-cmt">
          <p>{item.comment.length} bình luận</p>
        </div>
      </div>
      <div className="p-action">
        <postContext.Consumer>
          {({ likePost }) => (
            <Button disabled={!isLogin} style={{ color }} onClick={likePost(item)}><LikeOutlined style={{ marginRight: '10px', color }} />Thích</Button>
          )
          }
        </postContext.Consumer>
        <Button><MessageOutlined style={{ marginRight: '10px' }} />Bình luận</Button>
        <tradeContext.Consumer>
          {({handleCancel,
            handleChange,
            handleOk,
            showModal,
            isModalVisible,
            inputs,
            isTrade}) => (
              <>
                <Button disabled={dissableTrade} onClick={showModal(item)}><TransactionOutlined style={{ marginRight: '10px' }} />Trao đổi</Button>
                <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} title='Yêu cầu trao đổi' >
                  {isTrade === false ? <Alert message="Vui lòng điền đầy đủ thông tin" type="error" /> : "" }
                <select style={{ width: '100%', padding:'10px', fontSize:'16px', border:'1px solid #ddd' }} value={inputs.selectPost} name="selectPost" onChange={handleChange}>
                  <option value="" >Chọn bài viết của bạn</option>
                  <postContext.Consumer>
                      {
                      ({postItems})=>(
                          postItems.filter(item => (item.username === user.username)).map((item, index) => (
                              <option value={item._id} key={index}>{item.title}</option>
                          ))
                      )}
                  </postContext.Consumer> 
                </select>
                <input type="text" value={inputs.addPost} style={{ width: '100%', padding:'10px', fontSize:'16px', marginTop:'15px', border:'1px solid #ddd' }} onChange={handleChange} placeholder="Nhập địa chỉ của bạn" name="addPost" />
                </Modal>
              </>
            )}
          
        </tradeContext.Consumer>
      </div>
      <div className="p-comment">
        <div className="form-cmt">                                                    
          {
            isLogin === false ?
              <Link to="login" className="login-cmt">
                Đăng nhập để bình luận
              </Link> :
              <postContext.Consumer>
                {({ handleSubmitComment, handleChangeCmt, cmtValue }) => (
                  <form onSubmit={handleSubmitComment(item)}>
                    <textarea placeholder="Add a comment..." value={cmtValue} onChange={handleChangeCmt}></textarea>
                    <input type="submit" value="Submit" />
                  </form>
                )
                }

              </postContext.Consumer>

          }

        </div>
        <PerfectScrollbar>
          <div className="list-cmt">

            {item.comment.map((item, index) => (
              <Comment
                key={index}
                author={<span>{item.username}</span>}
                avatar={
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt={item.username}
                  />
                }
                content={
                  <p>
                    {item.text}
                  </p>
                }
                datetime={<Moment fromNow>{item.date}</Moment>}
              />
            ))}

          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
}
export default Post;
