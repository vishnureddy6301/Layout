import React,{ useState } from 'react';
import Sidebar from './Sidebar';
import { BellOutlined,MenuOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import UsersTable from './UsersTable';
//import { Button, Pagination } from 'antd';

function Layout({ children }) {
  
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

  // const itemRender = (current, type, originalElement) => {
  //   if (type === 'prev') {
  //     return <Button>Prev</Button>;
  //   }
  //   if (type === 'next') {
  //     return <Button>Next</Button>;
  //   }
  //   return originalElement;
  // };
  //flex-col lg:flex-row bg-gray-100  w-24 h-24 t-12 l-11 font-outfit w-24 h-24 t-12 l-11
  return (
    <div className="flex  h-screen ">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow p-2 flex justify-between items-center">
          <div className="text-xl font-semibold bg:#171717
">Users</div>
          <div className="text-gray-600 "><BellOutlined /></div>
          <div className='flex-none lg:hidden'>
           <Button className=" sm:hidden " type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
            </div>
        </header>
        {/* p-6  bg-gray-100  */}
        
        <main className="flex-1   overflow-y-auto">
        <Drawer title="Menu" placement="right" onClose={closeDrawer} visible={drawerVisible}>
          <UsersTable/>
        </Drawer>
          {children}
          <div className='p-0 hidden lg:block '>
          <UsersTable />
          </div>
          
        </main>
        <footer className="bg-white shadow p-4 text-right">
        </footer>
      </div>
    </div>
  );
}

export default Layout;