import React from 'react';
import Sidebar from '../../components/Sidebar';

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Sidebar />
      <React.Fragment>{children}</React.Fragment>
    </>
  );
};

export default DefaultLayout;
