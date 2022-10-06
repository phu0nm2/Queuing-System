import React, { useState } from 'react';
import './styles.scss';
import icons from '../../shared/assests/icons/index';
import LogoAlta from '../../components/LogoAlta';
import { Button, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    'Dashboard',
    '1',
    <div className="icon">
      <img src={icons.dashboardIcon} alt="icon dashboard" />
    </div>,
  ),
  getItem(
    'Thiết bị',
    '2',
    <div className="icon">
      <img src={icons.desktopIcon} alt="icon dashboard" />
    </div>,
  ),
  getItem(
    'Dịch vụ',
    '3',
    <div className="icon">
      <img src={icons.serviceIcon} alt="icon dashboard" />
    </div>,
  ),
  getItem(
    'Cấp số',
    '4',
    <div className="icon">
      <img src={icons.numberLevelIcon} alt="icon dashboard" />
    </div>,
  ),
  getItem(
    'Báo cáo',
    '5',
    <div className="icon">
      <img src={icons.reportIcon} alt="icon dashboard" />
    </div>,
  ),
  getItem(
    'Cài đặt',
    'sub1',
    <div className="icon">
      <img src={icons.settingIcon} alt="icon dashboard" />
    </div>,
    [
      getItem('Quản lý vai trò', '6'),
      getItem('Quản lý tài khoản', '7'),
      getItem('Nhật ký người dùng', '8'),
    ],
  ),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
          style={{ backgroundColor: '#fff' }}
        >
          <LogoAlta />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
          <Button
            style={{
              color: '#FF7506',
              width: '176px',
              height: '48px',
              borderRadius: '8px',
              fontWeight: '600',
              left: '12px',
              background: '#FFF2E7',
              top: '170px',
              border: 'unset',
            }}
          >
            <div className="icon icon-logout">
              <img src={icons.logoutIcon} alt="icon logout" />
              Đăng xuất
            </div>
          </Button>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Dashboard content
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
