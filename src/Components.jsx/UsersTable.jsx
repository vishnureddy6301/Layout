import React ,{useState} from 'react';
import { Pagination,Button } from 'antd';
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
      city: 'Colombo',
      image: `${process.env.PUBLIC_URL}/avatars/Avatar (3).png`,
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
      image: `${process.env.PUBLIC_URL}/avatars/Avatar (4).png`,
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
      image: `${process.env.PUBLIC_URL}/avatars/Avatar (5).png`,
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
      image: `${process.env.PUBLIC_URL}/avatars/Avatar (6).png`,
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
      image: `${process.env.PUBLIC_URL}/avatars/Avatar (7).png`,
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
      image: `${process.env.PUBLIC_URL}/avatars/Avatar (8).png`,
    },
   
    
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of users per page

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
    //rounded-lg shadow-md
    <div className="bg-white p-6">
      <div className="flex flex-col sm:flex-row justify-between  items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full sm:w-1/3 p-2 mb-2 sm:mb-0 border border-gray-300 rounded"
        />
        <button className="bg-teal-500 text-white px-2 py-2 rounded bg: #00D2D0 text-sm
"> + Add User</button>
      </div>
      <div className='overflow-x-auto'>
      <table className="min-w-full bg-white text-sm">
        <thead>
          <tr>
            <th className="py-2 text-left">Company<FaArrowDown className='mt-1'/> </th>
            <th className="py-2 text-left">Company Name</th>
            <th className="py-2 text-left">Email Address</th>
            <th className="py-2 text-left">Phone Number</th>
            <th className="py-2 text-left">City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-t">
            <td className="py-2 flex items-center">
            {/* <img  className="rounded-full" src={logo} alt="Logo"  /> */}
                <img src={user.image} alt={user.company} className="w-8 h-8 rounded-full mr-2" />
                <span >{user.company}</span>
              </td>

              {/* <td className="py-2">{user.company}</td> */}
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
              defaultCurrent={1}
              total={50}
              pageSize={10}
              itemRender={itemRender}
              className="inline-block"
            />
          </div>
    </div>
   
        
  );
}

export default UsersTable;