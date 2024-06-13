import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FaBriefcase, FaUsers, FaComments, FaPencilRuler } from 'react-icons/fa';
import logo from '../image.png'; // Adjust the path to your logo file
import UsersTable from './UsersTable';
import { BellOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ background: '#ffffff' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ background: '#ffffff' }}
      >
        <div className="p-4">
          <div className="flex items-center mb-6">
            <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
            <div className="ml-4">
              <div className="text-sm font-semibold">Designer <DownOutlined className='ml-1'/></div>
              <div className="text-xs text-gray-500">Admin@review</div>
            </div>
          </div>
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ background: '#ffffff', border: 'none' }}>
            <Menu.Item key="1" icon={<FaBriefcase />} style={{ padding: '10px 20px' }}>
              My Work
            </Menu.Item>
            <Menu.Item key="2" icon={<FaUsers />} style={{ padding: '10px 20px' }}>
              Users
            </Menu.Item>
            <Menu.Item key="3" icon={<FaComments />} style={{ padding: '10px 20px' }}>
              Comments
            </Menu.Item>
            <Menu.Item key="4" icon={<FaPencilRuler />} style={{ padding: '10px 20px' }}>
              Designers
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout style={{ background: '#ffffff' }}>
        
        <header className="bg-white  p-0 flex justify-between items-center">
          <div className="text-xl font-semibold">Users</div>
          <div className="text-gray-600"><BellOutlined /></div>
        </header>
        
          
        
        <Content
          style={{
            margin: '24px 16px 0',
            background: '#ffffff',
          }}
        >
          <div
            // style={{
            //   padding: 24,
            //   minHeight: 360,
            //   background: colorBgContainer,
            //   borderRadius: borderRadiusLG,
            // }}
          >
            <UsersTable/>
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
            background: '#ffffff',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default Sidebar;