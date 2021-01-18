import '../style/Nav.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {
  SkinOutlined,
  CarOutlined,
  BranchesOutlined,
  GithubOutlined,
  ClearOutlined,
  HomeOutlined,
  BarChartOutlined
  } from '@ant-design/icons';

function Nav() {
  return (
    <div className="Nav">
       <Menu  mode="vertical"  >      
            <Menu.Item key="1" icon={<BarChartOutlined />}>Tất cả</Menu.Item>
            <Menu.Item key="2" icon={<HomeOutlined />}>Bất động sản</Menu.Item>
            <Menu.Item key="3" icon={<CarOutlined />}>Xe cộ</Menu.Item>
            <Menu.Item key="4" icon={<BranchesOutlined />}>Đồ điện tử</Menu.Item>
            <Menu.Item key="5" icon={<GithubOutlined />}>Thú cưng</Menu.Item>
            <Menu.Item key="6" icon={<ClearOutlined />}>Đồ gia dụng</Menu.Item>
            <Menu.Item key="7" icon={<SkinOutlined />}>Thời trang</Menu.Item>
        </Menu>,
    </div>
  );
}
export default Nav;
