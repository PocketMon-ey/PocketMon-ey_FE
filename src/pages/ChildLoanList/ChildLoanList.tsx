import React, { useState } from 'react';
import { AddButton, TabBar, UserTab } from '../../components/common';
import CardGrid from '../../components/common/Card/CardGrid/CardGrid';
import { AddButtonContainer } from './styled';

const ChildLoanList = () => {
  const [status, setStatus] = useState<number>(0); // 임의로 0으로 해놓음

  return (
    <div>
      <UserTab />
      <TabBar status={status} setStatus={setStatus} />
      <CardGrid loanList={[]} />
      <AddButtonContainer>
        <AddButton></AddButton>
      </AddButtonContainer>
    </div>
  );
};

export default ChildLoanList;
