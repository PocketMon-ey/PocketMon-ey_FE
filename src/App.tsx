import React from 'react';
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { theme } from './styles';
import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import { ParentLoanList } from './pages';
import Layout from './components/common/Layout/Layout';
import SelectPage from './pages/SelectPage/SelectPage';
import ParentHome from './pages/ParentHome/ParentHome';
import ChildHome from './pages/ChildHome/ChildHome';

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
        <Routes>
          <Route path="/" element={<SelectPage />} />
          <Route path="/parent" element={<Layout />}>
            <Route path="home" element={<ParentHome />} />
            <Route path="loan" element={<ParentLoanList />} />
          </Route>
          <Route path="/child" element={<Layout />}>
            <Route path="home" element={<ChildHome />} />
          </Route>
        </Routes>
      </MobileView>
    </>
  );
}

export default App;
