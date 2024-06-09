import React from 'react';
import Sidebar from './Sidebar';
import { BellOutlined } from '@ant-design/icons';
import UsersTable from './UsersTable';
import { Button, Pagination } from 'antd';

function Layout({ children }) {
  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <Button>Prev</Button>;
    }
    if (type === 'next') {
      return <Button>Next</Button>;
    }
    return originalElement;
  };
  //flex-col lg:flex-row bg-gray-100
  return (
    <div className="flex  h-screen ">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="text-xl font-semibold">Users</div>
          <div className="text-gray-600"><BellOutlined /></div>
        </header>
        {/* p-6  bg-gray-100  */}
        <main className="flex-1 overflow-y-auto">
          {children}
          {/* <div className='p-6'> */}
          <UsersTable />
          {/* </div> */}
          <div className="bg-white shadow p-4 text-center lg:text-right">
            <Pagination
              defaultCurrent={1}
              total={50}
              pageSize={10}
              itemRender={itemRender}
              className="inline-block"
            />
          </div>
        </main>
        <footer className="bg-white shadow p-4 text-right">
        </footer>
      </div>
    </div>
  );
}

export default Layout;