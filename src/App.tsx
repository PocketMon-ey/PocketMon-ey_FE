import React from 'react';
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { theme } from './styles';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserView>
        <span style={{ color: theme.colors.primary_purple }}>
          데스크탑에서는 지원하지 않는 서비스입니다.
        </span>
      </BrowserView>
      {/* 추후 라우팅.. */}
      {/* <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Main />} />
        <Route path='/pageA' element={<PageA />} />
        <Route path='/pageB' element={<PageB />} />
        <Route path='/pageC' element={<PageC />} />
      </Route>
    </Routes> */}
      <MobileView>지훈아 정신차려 ! </MobileView>
    </>
  );
}

export default App;
