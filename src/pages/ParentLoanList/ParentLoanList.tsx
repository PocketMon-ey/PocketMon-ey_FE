import React, { useState } from 'react';
import UserTab from '../../components/common/UserTab/UserTab';
import TabBar from '../../components/common/TabBar/TabBar';
import Button from '../../components/common/Button/BigButton/BigButton';
import CardGrid from '../../components/common/Card/CardGrid/CardGrid';
import AddButton from '../../components/common/Button/AddButton/AddButton';

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
