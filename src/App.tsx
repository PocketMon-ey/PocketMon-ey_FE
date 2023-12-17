import React from 'react';
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { theme } from './styles';
import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import ApplyLoan from './pages/loan/ApplyLoan';

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserView>
        <span style={{ color: theme.colors.primary_purple }}>
          데스크탑에서는 지원하지 않는 서비스입니다.
        </span>
      </BrowserView>

      <MobileView>
        {/* 추후 라우팅.. */}
        <Routes>
          {/* <Route path='/' element={<Layout />} >
        <Route index element={<Main />} /> */}
          <Route path="/child/loan/apply" element={<ApplyLoan />} />
        </Routes>
      </MobileView>
    </>
  );
}

export default App;
