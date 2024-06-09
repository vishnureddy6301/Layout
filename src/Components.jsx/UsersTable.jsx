// import React from 'react';
// import { FaArrowDown } from "react-icons/fa";
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import logo from '../image.png';

// function UsersTable() {
//   const users = [
//     {
//       company: 'Catalog',
//       companyName: 'para logic',
//       email: 'hodigi1227@gmail.com',
//       phoneNumber: '03030303033',
//       city: 'New York',
//       image: 'path/to/image1.jpg'
//     },
//     {
//       company: 'Catalog',
//       companyName: 'para logic',
//       email: 'hodigi1227@gmail.com',
//       phoneNumber: '03030303033',
//       city: 'Brisbane',
//       image: 'path/to/image2.jpg'
//     },
//     {
//       company: 'Catalog',
//       companyName: 'para logic',
//       email: 'hodigi1227@gmail.com',
//       phoneNumber: '03030303033',
//       city: 'Colombo',
//       image: 'path/to/image3.jpg'
//     },
//     {
//       company: 'Catalog',
//       companyName: 'para logic',
//       email: 'hodigi1227@gmail.com',
//       phoneNumber: '03030303033',
//       city: 'New York',
//       image: 'path/to/image4.jpg'
//     },
//     {
//       company: 'Catalog',
//       companyName: 'para logic',
//       email: 'hodigi1227@gmail.com',
//       phoneNumber: '03030303033',
//       city: 'New York',
//       image: 'path/to/image5.jpg'
//     },
//     {
//       company: 'Catalog',
//       companyName: 'para logic',
//       email: 'hodigi1227@gmail.com',
//       phoneNumber: '03030303033',
//       city: 'New York',
//       image: 'path/to/image6.jpg'
//     },
//     // {
//     //   company: 'Catalog',
//     //   companyName: 'para logic',
//     //   email: 'hodigi1227@gmail.com',
//     //   phoneNumber: '03030303033',
//     //   city: 'New York',
//     //   image: 'path/to/image7.jpg'
//     // },
//     // {
//     //   company: 'Catalog',
//     //   companyName: 'para logic',
//     //   email: 'hodigi1227@gmail.com',
//     //   phoneNumber: '03030303033',
//     //   city: 'New York',
//     //   image: 'path/to/image8.jpg'
//     // },
//   ];

//   return (
    
//     <div className=" bg-white p-6 rounded-lg shadow-md ">
//       <div className="flex justify-between items-center mb-4">
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-1/3 p-2 border border-gray-300 rounded"
//         />
//         <button className="bg-teal-500 text-white px-4 py-2 rounded">+ Add User</button>
//       </div>
//       <table className="min-w-full bg-white ">
//         <thead>
//           <tr>
//             <th className="py-2 text-left flex items-center">
//               Company <FaArrowDown  className="ml-1" />
//             </th>
//             <th className="py-2 text-left">Company Name</th>
//             <th className="py-2 text-left">Email Address</th>
//             <th className="py-2 text-left">Phone Number</th>
//             <th className="py-2 text-left">City</th>
//             <th className="py-2 text-left"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index} className="border-t">
//               <td className="py-2 flex items-center">
//               <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
//                 {/* <img src={user.image} alt={user.companyName} className="w-10 h-10 rounded-full mr-2" /> */}
//                 <span>{user.company}</span>
//               </td>
//               <td className="py-2">{user.companyName}</td>
//               <td className="py-2">{user.email}</td>
//               <td className="py-2">{user.phoneNumber}</td>
//               <td className="py-2">{user.city}</td>
//               <td className="py-2 text-right">
//                 <BsThreeDotsVertical />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
    
//   );
// }

// export default UsersTable;
import React from 'react';
//import App from './Pagination'
import logo from '../image.png'
import { BsThreeDotsVertical } from "react-icons/bs";

function UsersTable() {
  const users = [
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
      // image:"C:\Users\dhari\Downloads\Avatar.png",
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'Brisbane',
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'Colombo',
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
    },
    {
      company: 'Catalog',
      companyName: 'para logic',
      email: 'hodigi1227@gmail.com',
      phoneNumber: '03030303033',
      city: 'New York',
    },
   
    
  ];

  return (
    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full sm:w-1/3 p-2 mb-2 sm:mb-0 border border-gray-300 rounded"
        />
        <button className="bg-teal-500 text-white px-4 py-2 rounded"> + Add User</button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-left">Company</th>
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
            <img  className="rounded-full" src={logo} alt="Logo"  />
                {/* <img src={user.image} alt={user.company} className="w-10 h-10 rounded-full mr-2" /> */}
                <span className="ml-2">{user.company}</span>
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
   
        
  );
}

export default UsersTable;