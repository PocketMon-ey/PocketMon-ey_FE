import React from 'react';
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { theme } from './styles';
import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import { ParentLoanList } from './pages';
import Layout from './components/common/Layout/Layout';

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
          <Route path="/parent" element={<Layout />}>
            <Route path="loan" element={<ParentLoanList />} />
          </Route>
        </Routes>
      </MobileView>
    </>
  );
}

export default App;
