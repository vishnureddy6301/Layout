import React from 'react';
import logo from '../image.png';
import { DownOutlined } from '@ant-design/icons';
import { FaBriefcase, FaUsers, FaComments, FaPencilRuler } from 'react-icons/fa';

function Sidebar() {
  // w-full lg:w-64 bg-white shadow-md h-full 
  return (
    <div className=" w-64 bg-white shadow-md h-full flex-shrink-0 ">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
          <div className="ml-4">
          <div className="text-sm font-semibold">Designer <DownOutlined className='ml-1'/></div>
            <div className="text-xs text-gray-500">Admin@review</div>
            
          </div>
        </div>
        {/* <div className="text-xl font-semibold mb-4">Dashboard</div> */}
    
      <nav className="mt-6">
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-200 flex items-center">
          <FaBriefcase className="mr-2" /> My Work
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-200 flex items-center">
          <FaUsers className="mr-2" /> Users
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-200 flex items-center">
          <FaComments className="mr-2" /> Comments
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-200 flex items-center">
          <FaPencilRuler className="mr-2" /> Designers
        </a>
      </nav>
    </div>
    </div>
  );
}

export default Sidebar;