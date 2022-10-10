import React from 'react';
import Sidebar from '../../components/Sidebar';

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
    </>
  );
};

export default DefaultLayout;
