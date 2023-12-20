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
  } else if (
    path.includes('apply') ||
    path.includes('checkContract') ||
    path.includes('actualPayment')
  ) {
    title = '대출 신청';
  } else if (path.includes('judge')) {
    title = '대출 심사';
  } else if (path.includes('ongoing') || path.includes('detail')) {
    title = '대출 상세';
  } else if (path.includes('reject')) {
    title = '대출 반려';
  }
  return (
    <>
      <Header headerTitle={title} />
      <Outlet />
    </>
  );
};

export default Layout;
