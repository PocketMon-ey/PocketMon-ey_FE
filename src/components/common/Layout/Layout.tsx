import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const path = useLocation().pathname;
  let title: string = '';

  if (path.includes('home')) {
    title = '';
  } else if (path.includes('list')) {
    title = '대출 목록';
  }
  return (
    <>
      <Header headerTitle={title} />
      <Outlet />
    </>
  );
};

export default Layout;
