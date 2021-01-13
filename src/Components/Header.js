
import {Link} from "react-router-dom";

import './style/Header.css';
import 'antd/dist/antd.css';

import Logo from './image/trade.png';
import {
  HomeOutlined,
  WechatOutlined,
  AuditOutlined,
  EllipsisOutlined,
  FormOutlined,
  LoginOutlined,
  UserOutlined,
  TransactionOutlined,
  SplitCellsOutlined,
  AreaChartOutlined
} from '@ant-design/icons';
import { } from 'antd';

import { Row, Col, Badge, Input, Menu, Dropdown} from 'antd';
function Header() {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link  to="profile" className="drop-menu" >
          <UserOutlined style={{ fontSize: '20px',marginRight:'10px' }} />Profile
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link  to="profile" className="drop-menu"  >
          <TransactionOutlined  style={{ fontSize: '20px',marginRight:'10px' }} />Đề nghị trao đổi
        </Link>
      </Menu.Item>
      <Menu.Item>     
        <Link  to="profile" className="drop-menu"  >
          <SplitCellsOutlined style={{ fontSize: '20px',marginRight:'10px' }} />Yêu cầu trao đổi
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link  to="profile" className="drop-menu"  >
          <AreaChartOutlined style={{ fontSize: '20px',marginRight:'10px' }} />Lịch sữ giao dịch
        </Link>
      </Menu.Item>
    </Menu>
  );
  const notification = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="Header">
      <div className="wrap">
        <Row>
          <Col span={6}>
            <div className="logo">
              <img src={Logo} alt="Main logo gl-trade" />
            </div>
          </Col>
          <Col span={18} >
            <div className="main-menu">
              <ul>
                <li><Link to="/"><HomeOutlined  style={{ fontSize: '20px',marginRight:'10px' }}/>Trang chủ</Link></li>
                <li><Link to="/trade"><AuditOutlined style={{ fontSize: '20px',marginRight:'10px' }}/>Tôi bán</Link></li>
                <li><Dropdown overlay={notification} placement="bottomRight" arrow><span><Badge size="small" offset={[-10, -2]}  count={0} showZero><WechatOutlined style={{ fontSize: '20px',marginRight:'10px' }} /></Badge>Thông báo</span></Dropdown></li>
                <li><Dropdown overlay={menu} placement="bottomRight" arrow><span ><EllipsisOutlined style={{ fontSize: '20px',marginRight:'10px' }} /></span></Dropdown></li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <div className="search">
            <Input.Group compact>
              <Input.Search placeholder="Tìm kiếm trên GL-Trade" allowClear style={{ width: '90%', marginTop:'5px' }} defaultValue="" />
            </Input.Group>
            </div>
          </Col>
          <Col span={8} >
            <div className="lg-action">
              <div className="login">
                <Link to="/login"><LoginOutlined style={{ fontSize: '20px',marginRight:'10px' }} />Đăng nhập</Link>
              </div>
              <div className="post">
                <Link to="/post"><FormOutlined style={{ fontSize: '20px',marginRight:'10px' }} />Đăng tin</Link>
              </div>
            </div>
          </Col>
        </Row>
       </div>
    </div>
  );
}

export default Header;