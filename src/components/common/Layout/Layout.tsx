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
  } else if (path.includes('prime')) {
    title = '우대금리 설정';
  } else if (path.includes('family')) {
    title = '가족금리 설정';
  } else if (path.includes('rate')) {
    title = '금리 조정';
  }
  return (
    <>
      <Header headerTitle={title} />
      <Outlet />
    </>
  );
};

export default Layout;
