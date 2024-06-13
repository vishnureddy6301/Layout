import React, { useState } from 'react';
import { Pagination, Button } from 'antd';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowDown } from 'react-icons/fa';

function UsersTable() {
  const users = [
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
      image: `${process.env.PUBLIC_URL}/avatars/Avatar (1).png`,
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'Brisbane',
      image: `${process.env.PUBLIC_URL}/avatars/Avatar (2).png`,
    },
    {
        company: 'Catalog',
        companyName: 'para logic',
        email: 'hodigi1227@gmail.com',
        phoneNumber: '03030303033',
        city: 'New York',
        image: `${process.env.PUBLIC_URL}/avatars/Avatar (1).png`,
      },
      {
        company: 'Catalog',
        companyName: 'para logic',
        email: 'hodigi1227@gmail.com',
        phoneNumber: '03030303033',
        city: 'Brisbane',
        image: `${process.env.PUBLIC_URL}/avatars/Avatar (2).png`,
      },
      {
        company: 'Catalog',
        companyName: 'para logic',
        email: 'hodigi1227@gmail.com',
        phoneNumber: '03030303033',
        city: 'New York',
        image: `${process.env.PUBLIC_URL}/avatars/Avatar (1).png`,
      },
      {
        company: 'Catalog',
        companyName: 'para logic',
        email: 'hodigi1227@gmail.com',
        phoneNumber: '03030303033',
        city: 'Brisbane',
        image: `${process.env.PUBLIC_URL}/avatars/Avatar (2).png`,
      },{
        company: 'Catalog',
        companyName: 'para logic',
        email: 'hodigi1227@gmail.com',
        phoneNumber: '03030303033',
        city: 'New York',
        image: `${process.env.PUBLIC_URL}/avatars/Avatar (1).png`,
      },
      {
        company: 'Catalog',
        companyName: 'para logic',
        email: 'hodigi1227@gmail.com',
        phoneNumber: '03030303033',
        city: 'Brisbane',
        image: `${process.env.PUBLIC_URL}/avatars/Avatar (2).png`,
      },
    // Add other users here
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = users.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <Button>Prev</Button>;
    }
    if (type === 'next') {
      return <Button>Next</Button>;
    }
    return originalElement;
  };

  return (
    <div className="bg-white p-6 h-full overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full sm:w-1/3 p-2 mb-2 sm:mb-0 border border-gray-300 rounded"
        />
        <button className="bg-teal-500 text-white px-2 py-2 rounded text-sm">+ Add User</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-sm">
          <thead className='block sm:table-header-group overflow-y-auto'>
            <tr className='sm:table-row'>
              <th className="py-2 text-left o">Company <FaArrowDown  /></th>
              <th className="py-2 text-left">Company Name</th>
              <th className="py-2 text-left">Email Address</th>
              <th className="py-2 text-left">Phone Number</th>
              <th className="py-2 text-left">City</th>
              {/* <th className="py-2 text-right">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {currentData.map((user, index) => (
              <tr key={index} className="border-t sm:table-row flex flex-col sm:flex-row">
                <td className="py-2 flex items-center">
                  <img src={user.image} alt={user.company} className="w-8 h-8 rounded-full mr-2" />
                  <span>{user.company}</span>
                </td>
                <td className="py-2">{user.companyName}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">{user.phoneNumber}</td>
                <td className="py-2">{user.city}</td>
                <td className="py-2 text-right">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>  
        </table>
      </div>
      <div className="bg-white shadow p-4 text-center lg:text-right">
        <Pagination
          current={currentPage}
          total={users.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          itemRender={itemRender}
        //   className="inline-block"
        />
      </div>
    </div>
  );
}

export default UsersTable;