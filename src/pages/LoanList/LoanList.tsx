import React, { useState } from 'react';
import { AddButton, Header, TabBar, UserTab } from '../../components/common';
import CardGrid from '../../components/common/Card/CardGrid/CardGrid';
import { AddButtonContainer } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';

const LoanList = () => {
  const [status, setStatus] = useState<number>(0); // 임의로 0으로 해놓음
  const navigate = useNavigate();
  const path = useLocation().pathname;
  return (
    <div>
      <Header headerTitle="대출 목록" />
      <UserTab />
      <TabBar status={status} setStatus={setStatus} />
      <CardGrid status={status} />
      <AddButtonContainer onClick={() => navigate('/child/loan/apply')}>
        {path.includes('child') ? <AddButton></AddButton> : <></>}
      </AddButtonContainer>
    </div>
  );
};

export default LoanList;
