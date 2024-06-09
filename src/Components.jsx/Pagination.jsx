import React from 'react';
import { Pagination } from 'antd';
//import 'antd/dist/antd.css';
import Layout from './Layout';

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};

const App = () => (
  <Layout>
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Pagination
        total={100}
        defaultCurrent={1}
        pageSize={10}
        itemRender={itemRender}
        showQuickJumper={false}
        showSizeChanger={false}
      />
    </div>
  </Layout>
);

export default App;