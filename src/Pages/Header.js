import { Link } from "react-router-dom";
import { postContext } from "../Context/PostContext";
import "./style/Header.css";
import "antd/dist/antd.css";

import Logo from "./image/trade.png";
import {
  HomeOutlined,
  WechatOutlined,
  EllipsisOutlined,
  FormOutlined,
  LoginOutlined,
  UserOutlined,
  TransactionOutlined,
  SplitCellsOutlined,
  AreaChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {} from "antd";

import { Row, Col, Badge, Input, Menu, Dropdown } from "antd";
function Header(props) {
  const { isLogin, onLogout } = props;
  const menu =
    isLogin === true ? (
      <Menu>
        <Menu.Item>
          <Link to="profile" className="drop-menu">
            <UserOutlined style={{ fontSize: "20px", marginRight: "10px" }} />
            Profile
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="exchange-request" className="drop-menu">
            <TransactionOutlined
              style={{ fontSize: "20px", marginRight: "10px" }}
            />
            Đề nghị trao đổi
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="request-exchange" className="drop-menu">
            <SplitCellsOutlined
              style={{ fontSize: "20px", marginRight: "10px" }}
            />
            Yêu cầu trao đổi
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="history-exchange" className="drop-menu">
            <AreaChartOutlined
              style={{ fontSize: "20px", marginRight: "10px" }}
            />
            Lịch sữ giao dịch
          </Link>
        </Menu.Item>
      </Menu>
    ) : (
      <Menu>
        <Menu.Item>
          <Link to="/register">
            <UserOutlined style={{ fontSize: "20px", marginRight: "10px" }} />
            Đăng ký
          </Link>
        </Menu.Item>
      </Menu>
    );
  const notification = (
    <Menu>
      <Menu.Item>Bạn nhận được yêu cầu trao đổi</Menu.Item>
    </Menu>
  );

  return (
    <div className="Header">
      <div className="wrap">
        <Row>
          <Col span={6}>
            <Link to="/">
              <div className="logo">
                <img src={Logo} alt="Main logo gl-trade" />
              </div>
            </Link>
          </Col>
          <Col span={18}>
            <div className="main-menu">
              <ul>
                <li>
                  <Link to="/">
                    <HomeOutlined
                      style={{ fontSize: "20px", marginRight: "10px" }}
                    />
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Dropdown
                    overlay={notification}
                    placement="bottomRight"
                    arrow
                  >
                    <span>
                      <Badge size="small" offset={[-10, -2]} count={0} showZero>
                        <WechatOutlined
                          style={{ fontSize: "20px", marginRight: "10px" }}
                        />
                      </Badge>
                      Thông báo
                    </span>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <span>
                      <EllipsisOutlined
                        style={{ fontSize: "20px", marginRight: "10px" }}
                      />
                    </span>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <div className="search">
              <Input.Group compact>
                <postContext.Consumer>
                  {({ searchPost }) => (
                    <Input.Search
                      placeholder="Tìm kiếm sản phẩm trên GL-Trade"
                      allowClear
                      style={{ width: "90%", marginTop: "5px" }}
                      onChange={searchPost}
                      defaultValue=""
                    />
                  )}
                </postContext.Consumer>
              </Input.Group>
            </div>
          </Col>
          <Col span={8}>
            <div className="lg-action">
              <div className="login">
                {isLogin === true ? (
                  <Link to="/login" onClick={onLogout}>
                    <LogoutOutlined
                      style={{ fontSize: "20px", marginRight: "10px" }}
                    />
                    Đăng xuất
                  </Link>
                ) : (
                  <Link to="/login">
                    <LoginOutlined
                      style={{ fontSize: "20px", marginRight: "10px" }}
                    />
                    Đăng nhập
                  </Link>
                )}
              </div>
              <div className="post">
                <Link to="post-product">
                  <FormOutlined
                    style={{ fontSize: "20px", marginRight: "10px" }}
                  />
                  Đăng tin
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
