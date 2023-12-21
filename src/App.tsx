import React from 'react';
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { theme } from './styles';
import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import ApplyLoan from './pages/Loan/ApplyLoan';
import Layout from './components/common/Layout/Layout';
import SelectPage from './pages/SelectPage/SelectPage';
import ParentHome from './pages/ParentHome/ParentHome';
import ChildHome from './pages/ChildHome/ChildHome';
import CheckContract from './pages/Loan/CheckContract';
import ParentReject from './pages/ParentReject/ParentReject';
import EditRate from './pages/Rate/EditRate/EditRate';
import FamilyRate from './pages/Rate/FamilyRate/FamilyRate';
import PrimeRate from './pages/Rate/PrimeRate/PrimeRate';
import LoanDetail from './pages/LoanDetail/LoanDetail';
import ActualPayment from './pages/Loan/ActualPayment';
import Ready from './pages/Ready/Ready';
import { GlobalContextProvider } from './context/context';
import LoanList from './pages/LoanList/LoanList';

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
        <GlobalContextProvider>
          <Routes>
            <Route path="/" element={<SelectPage />} />
            {/* <Route path="/parent" element={<Layout />}>
              <Route path="home" element={<ParentHome />} />
              <Route path="loan">
                <Route path="list" element={<LoanList />} />
                <Route path="judge/:loanId" element={<CheckContract />} />
                <Route path="ongoing/:loanId" element={<CheckContract />} />
                <Route path="reject" element={<ParentReject />} />
                <Route path="detail/:loanId" element={<LoanDetail />} />
                <Route path="rate" element={<EditRate />} />
                <Route path="rate/family" element={<FamilyRate />} />
                <Route path="rate/prime" element={<PrimeRate />} />
              </Route>
              <Route path="ready" element={<Ready />} />
            </Route> */}
            <Route path="/parent/home" element={<ParentHome />} />
            <Route path="/parent/loan/list" element={<LoanList />} />
            <Route
              path="/parent/loan/judge/:loanId"
              element={<CheckContract />}
            />
            <Route
              path="/parent/loan/ongoing/:loanId"
              element={<CheckContract />}
            />
            <Route
              path="/parent/loan/reject/:loanId"
              element={<ParentReject />}
            />
            <Route
              path="/parent/loan/detail/:loanId"
              element={<LoanDetail />}
            />
            <Route path="/parent/loan/rate" element={<EditRate />} />
            <Route path="/parent/loan/rate/family" element={<FamilyRate />} />
            <Route path="/parent/loan/rate/prime" element={<PrimeRate />} />
            <Route path="/parent/ready" element={<Ready />} />

            {/* <Route path="/child" element={<Layout />}>
              <Route path="home" element={<ChildHome />} />
              <Route path="loan">
                <Route path="list" element={<LoanList />} />
                <Route path="apply" element={<ApplyLoan />} />
                <Route path="actualPayment" element={<ActualPayment />} />
                <Route path="checkContract" element={<CheckContract />} />
                <Route path="detail/:loanId" element={<LoanDetail />} />
              </Route>
              <Route path="ready" element={<Ready />} />
            </Route> */}
            <Route path="/child/home" element={<ChildHome />} />
            <Route path="/child/loan/list" element={<LoanList />} />
            <Route path="/child/loan/apply" element={<ApplyLoan />} />
            <Route
              path="/child/loan/actualPayment"
              element={<ActualPayment />}
            />
            <Route
              path="/child/loan/checkContract"
              element={<CheckContract />}
            />
            <Route
              path="/child/loan/checkContract/:loanId"
              element={<CheckContract />}
            />
            <Route path="/child/loan/detail/:loanId" element={<LoanDetail />} />
            <Route path="/child/ready" element={<Ready />} />
          </Routes>
        </GlobalContextProvider>
      </MobileView>
    </>
  );
}

export default App;
