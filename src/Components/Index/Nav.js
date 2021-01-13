import '../style/Nav.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
  } from '@ant-design/icons';

function Nav() {
  return (
    <div className="Nav">
       <Menu  mode="vertical"  >      
            <Menu.Item key="1" icon={<MailOutlined />}>Option 1</Menu.Item>
            <Menu.Item key="2" icon={<CalendarOutlined />}>Option 2</Menu.Item>
            <Menu.Item key="3" icon={<AppstoreOutlined />}>Option 3</Menu.Item>
            <Menu.Item key="4" icon={<SettingOutlined />}>Option 4</Menu.Item>
            <Menu.Item key="5" icon={<LinkOutlined />}>Option 5</Menu.Item>
            <Menu.Item key="6" icon={<MailOutlined />}>Option 6</Menu.Item>
        </Menu>,
    </div>
  );
}
export default Nav;
