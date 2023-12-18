import React, { useState } from 'react';
import UserTab from '../../components/common/UserTab/UserTab';
import TabBar from '../../components/common/TabBar/TabBar';
import CardGrid from '../../components/common/Card/CardGrid/CardGrid';

const ParentLoanList = () => {
  const [status, setStatus] = useState<number>(0); // 임의로 0으로 해놓음

  return (
    <div>
      <UserTab />
      <TabBar status={status} setStatus={setStatus} />
      <CardGrid loanList={[]} />
    </div>
  );
};

export default ParentLoanList;
