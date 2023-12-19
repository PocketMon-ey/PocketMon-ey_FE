import React from 'react';
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { theme } from './styles';
import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import ApplyLoan from './pages/loan/ApplyLoan';
import { ParentLoanList } from './pages';
import Layout from './components/common/Layout/Layout';
import SelectPage from './pages/SelectPage/SelectPage';
import ParentHome from './pages/Home/ParentHome/ParentHome';
import ChildHome from './pages/Home/ChildHome/ChildHome';
import ChildLoanList from './pages/ChildLoanList/ChildLoanList';
import CheckContract from './pages/loan/CheckContract';
import ParentReject from './pages/ParentReject/ParentReject';
import EditRate from './pages/Rate/EditRate/EditRate';
import FamilyRate from './pages/Rate/FamilyRate/FamilyRate';
import PrimeRate from './pages/Rate/PrimeRate/PrimeRate';
import LoanDetail from './pages/LoanDetail/LoanDetail';
import ActualPayment from './pages/loan/ActualPayment';

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
            <Route path="loan">
              <Route path="list" element={<ParentLoanList />} />
              <Route path="judge" element={<CheckContract />} />
              <Route path="ongoing" element={<CheckContract />} />
              <Route path="reject" element={<ParentReject />} />
              <Route path="detail" element={<LoanDetail />} />
              <Route path="rate" element={<EditRate />} />
              <Route path="rate/family" element={<FamilyRate />} />
              <Route path="rate/prime" element={<PrimeRate />} />
            </Route>
          </Route>
          <Route path="/child" element={<Layout />}>
            <Route path="home" element={<ChildHome />} />
            <Route path="loan">
              <Route path="list" element={<ChildLoanList />} />
              <Route path="apply" element={<ApplyLoan />} />
              <Route path="actualPayment" element={<ActualPayment />} />
              <Route path="checkContract" element={<CheckContract />} />
              <Route path="detail" element={<LoanDetail />} />
            </Route>
          </Route>
        </Routes>
      </MobileView>
    </>
  );
}

export default App;
