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
  } else if (path.includes('apply') || path.includes('checkContract')) {
    title = '대출 신청';
  } else if (path.includes('parent/loan/judge')) {
    title = '대출 심사';
  }
  return (
    <>
      <Header headerTitle={title} />
      <Outlet />
    </>
  );
};

export default Layout;
