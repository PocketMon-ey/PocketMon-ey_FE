import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header headerTitle={'페이지 제목'} />
      <Outlet />
    </>
  );
};

export default Layout;
