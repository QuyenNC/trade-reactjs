import { postContext } from "../../Context/PostContext";
import "../style/Nav.css";
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  SkinOutlined,
  CarOutlined,
  BranchesOutlined,
  GithubOutlined,
  ClearOutlined,
  HomeOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

function Nav() {
  return (
    <div className="Nav">
      <postContext.Consumer>
        {({ filterPost }) => (
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              onClick={filterPost("")}
              icon={<BarChartOutlined />}
            >
              Tất cả
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={filterPost("Bất động sản")}
              icon={<HomeOutlined />}
            >
              Bất động sản
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={filterPost("Xe cộ")}
              icon={<CarOutlined />}
            >
              Xe cộ
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={filterPost("Đồ điện tử")}
              icon={<BranchesOutlined />}
            >
              Đồ điện tử
            </Menu.Item>
            <Menu.Item
              key="5"
              onClick={filterPost("Thú cưng")}
              icon={<GithubOutlined />}
            >
              Thú cưng
            </Menu.Item>
            <Menu.Item
              key="6"
              onClick={filterPost("Đồ gia dụng")}
              icon={<ClearOutlined />}
            >
              Đồ gia dụng
            </Menu.Item>
            <Menu.Item
              key="7"
              onClick={filterPost("Thời trang")}
              icon={<SkinOutlined />}
            >
              Thời trang
            </Menu.Item>
          </Menu>
        )}
      </postContext.Consumer>
    </div>
  );
}
export default Nav;
